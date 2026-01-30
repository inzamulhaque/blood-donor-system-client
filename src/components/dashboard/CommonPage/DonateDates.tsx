import {
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Modal,
  Row,
  Tag,
  Typography,
} from "antd";
import "./DonateDates.css";
import { CalendarOutlined, FileAddOutlined } from "@ant-design/icons";
import {
  useAddDonateDateMutation,
  useGetMyDonateDatesQuery,
} from "../../../redux/features/donors/donorsApi";
import Loader from "../../shared/Loader";
import dayjs, { Dayjs } from "dayjs";
import { useMemo, useState } from "react";
import IDForm from "../../shared/form/IDForm";
import IDDate from "../../shared/form/IDDate";
import IDTextArea from "../../shared/form/IDTextArea";
import type { FieldErrors, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonateDateSchema } from "../../../schemas/Donor";
import simplifyZodErrors from "../../../utils/SimplifyZodErrors";
import { toast } from "sonner";
import type { TError } from "../../../type";

const { Text, Title } = Typography;

const DonateDates = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [formErrors, setFormErrors] = useState<
    FieldErrors<Record<string, unknown>>
  >({});

  const { data, isLoading } = useGetMyDonateDatesQuery({});
  const [addDonateDate, { isLoading: isAdding }] = useAddDonateDateMutation();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  if (isLoading || isAdding) {
    return <Loader />;
  }

  const dates = data?.data || [];

  const handleAddDonateDate = async (values: FieldValues) => {
    setIsModalOpen(false);
    const donateDate = dayjs(values.date).toDate();

    const formattedDate = dayjs(donateDate).format("DD-MM-YYYY");

    try {
      const res = await addDonateDate({
        date: formattedDate,
        ...values,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });
      }
    } catch (error: unknown) {
      const apiError = error as TError;
      const errs = apiError?.data?.errorSources;

      if (Array.isArray(errs)) {
        errs.forEach((err) => {
          toast.error(err?.message, {
            duration: 5000,
            position: "top-right",
          });
        });
      }
    }
  };

  const disableAdvanceDates = (current: Dayjs) => {
    return current.isAfter(dayjs().endOf("day"));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <div className="donationHeader">
          <h1>Donation List</h1>

          <Button
            type="primary"
            color="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
          >
            Add Donate Date
          </Button>
        </div>

        <Divider />

        <div>
          {dates.length === 0 && (
            <h3
              style={{
                textAlign: "center",
                color: "red",
                opacity: "0.5",
              }}
            >
              You have not added any donate dates yet.
            </h3>
          )}
        </div>

        <Row gutter={[20, 20]} align="stretch">
          {dates.map((date: Record<string, Date | string>, index: number) => (
            <Col xs={24} sm={24} md={12} lg={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Flex vertical gap={12}>
                  <Flex align="center" gap={8}>
                    <CalendarOutlined
                      style={{ color: "#1677ff", fontSize: 18 }}
                    />
                    <Title level={5} style={{ margin: 0 }}>
                      {dayjs(date?.date).format("DD MMM YYYY")}
                    </Title>
                  </Flex>

                  <Text type="secondary">
                    {(date?.note as string) || "No note added"}
                  </Text>

                  <Tag color="green" style={{ width: "fit-content" }}>
                    Donated
                  </Tag>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Modal
        title="Add Donate Date"
        closable={{ "aria-label": "Custom Close Button" }}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
      >
        <IDForm
          onSubmit={handleAddDonateDate}
          setFormErrors={setFormErrors}
          resolver={zodResolver(DonateDateSchema)}
        >
          <IDDate
            label="Donate Date"
            name="date"
            required={true}
            err={simpleErroes["date"]}
            disabledDate={disableAdvanceDates}
            prefix={<CalendarOutlined />}
          />

          <IDTextArea
            label="Note"
            name="note"
            maxLength={150}
            err={simpleErroes["note"]}
            required={false}
          />

          <Button
            type="primary"
            color="primary"
            size="large"
            htmlType="submit"
            block
          >
            <FileAddOutlined /> Add Date
          </Button>
        </IDForm>
      </Modal>
    </>
  );
};

export default DonateDates;
