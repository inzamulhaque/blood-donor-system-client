import {
  Badge,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Grid,
  Row,
  Spin,
  Tag,
} from "antd";
import { useMemo, useState } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";
import IDForm from "../../components/shared/form/IDForm";
import IDInput from "../../components/shared/form/IDInput";
import {
  MailOutlined,
  NumberOutlined,
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IDSelect from "../../components/shared/form/IDSelect";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonorSchema } from "../../schemas/Donor";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { useAddNewDonorMutation } from "../../redux/features/admin/adminApi";
import { toast } from "sonner";
import type { TError } from "../../type";

const { useBreakpoint } = Grid;

const AddDonor = () => {
  const [donor, setDonor] = useState<Record<string, string> | null>(null);
  const [formErrors, setFormErrors] = useState<
    FieldErrors<Record<string, unknown>>
  >({});
  const { trackingNumber } = useAppSelector(useCurrentUser) || {};

  const [addDonor, { isLoading }] = useAddNewDonorMutation();

  const screens = useBreakpoint();
  const columns = screens.md ? 2 : 1;

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleAddDonor = async (values: FieldValues) => {
    try {
      const res = await addDonor(values).unwrap();

      if (res?.success) {
        setDonor(res?.data);
        toast.error(res?.message as string, {
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

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Add Donor</h1>
        <Divider />

        <IDForm
          onSubmit={handleAddDonor}
          setFormErrors={setFormErrors}
          defaultValues={{ addedBy: trackingNumber }}
          resolver={zodResolver(DonorSchema)}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Name"
                name="name"
                type="text"
                required={true}
                err={simpleErroes["name"]}
                prefix={<UserOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Email"
                name="email"
                type="text"
                required={false}
                err={simpleErroes["email"]}
                prefix={<MailOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Phone Number"
                name="phoneNumber"
                type="text"
                required={true}
                err={simpleErroes["phoneNumber"]}
                prefix={<PhoneOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDSelect
                label="Blood Group"
                name="bloodGroup"
                required={true}
                err={simpleErroes["bloodGroup"]}
                options={BLOOD_GROUPS_OPTIONS}
                placeholder="Select Donor Blood Group"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDSelect
                label="Upozila"
                name="upozila"
                required={true}
                err={simpleErroes["upozila"]}
                options={UPOZILAS_PABNA_OPTIONS}
                placeholder="Select Donor Upozila"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Added By"
                name="addedBy"
                type="number"
                err={simpleErroes["addedBy"]}
                required={true}
                prefix={<NumberOutlined />}
                disabled={true}
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24}>
              <Button
                type="primary"
                color="primary"
                htmlType="submit"
                size="large"
                block
              >
                <UserAddOutlined /> Add New Donor
              </Button>
            </Col>
          </Row>
        </IDForm>

        <Divider />

        {isLoading && (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        )}

        {!isLoading && donor && (
          <>
            <Card title="Donor Details" style={{ maxWidth: 900 }}>
              <Descriptions bordered size="middle" column={columns}>
                <Descriptions.Item label="Name">
                  {donor?.name}
                </Descriptions.Item>

                <Descriptions.Item label="Email">
                  {donor?.email}
                </Descriptions.Item>

                <Descriptions.Item label="Phone Number">
                  {donor?.phoneNumber}
                </Descriptions.Item>

                <Descriptions.Item label="Blood Group">
                  <Tag color="volcano">{donor?.bloodGroup}</Tag>
                </Descriptions.Item>

                <Descriptions.Item label="Upozila">
                  {donor?.upozila}
                </Descriptions.Item>

                <Descriptions.Item label="Added By (Admin TN)">
                  <Tag color="blue">{donor?.addedBy}</Tag>
                </Descriptions.Item>

                <Descriptions.Item label="Account Visibility">
                  <Tag
                    color={
                      donor?.accountVisibility === "public" ? "green" : "orange"
                    }
                  >
                    {donor?.accountVisibility.toUpperCase()}
                  </Tag>
                </Descriptions.Item>

                <Descriptions.Item label="Availability">
                  {donor?.availability ? (
                    <Badge status="success" text="Available" />
                  ) : (
                    <Badge status="error" text="Unavailable" />
                  )}
                </Descriptions.Item>

                <Descriptions.Item label="Deleted">
                  {donor?.isDeleted ? (
                    <Tag color="red">Yes</Tag>
                  ) : (
                    <Tag color="green">No</Tag>
                  )}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </>
        )}
      </div>
    </>
  );
};

export default AddDonor;
