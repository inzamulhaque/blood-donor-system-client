import {
  HeartOutlined,
  PlusCircleOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { useMemo, useState } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import IDForm from "../../components/shared/form/IDForm";
import IDSelect from "../../components/shared/form/IDSelect";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { BecameDonorSchema } from "../../schemas/Finder";
import { toast } from "sonner";
import { useBecameDonorMutation } from "../../redux/features/finder/finderApi";
import Loader from "../../components/shared/Loader";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { useSignOutMutation } from "../../redux/features/auth/authApi";
import type { TError } from "../../type";

const { Title, Text, Paragraph } = Typography;

const BecameDonor = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<
    FieldErrors<Record<string, unknown>>
  >({});

  const [becameDonor, { isLoading }] = useBecameDonorMutation();
  const [signOut] = useSignOutMutation();

  const dispatch = useAppDispatch();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleBecameDonor = async (values: FieldValues) => {
    setIsModalOpen(false);
    try {
      const res = await becameDonor(values).unwrap();

      if (res?.success) {
        dispatch(logout());
        await signOut({});

        toast.error(
          "For security reasons, please sign in again to continue to your donor dashboard!",
          {
            duration: 5000,
            position: "top-right",
          },
        );
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

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <div className="donationHeader">
          <h1>Became A Donor</h1>

          <Button
            type="primary"
            color="primary"
            size="large"
            onClick={() => setIsModalOpen(true)}
          >
            Add Your Blood Group
          </Button>
        </div>
        <Divider />

        <div style={{ padding: "40px 0" }}>
          <Row justify="center">
            <Col xs={22} sm={20} md={16} lg={14}>
              <Card
                style={{
                  borderRadius: 16,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  background: "linear-gradient(135deg, #fff 0%, #fff5f5 100%)",
                }}
              >
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={3}
                    style={{ color: "#c62828", textAlign: "center" }}
                  >
                    🩸 ডোনার হিসেবে যুক্ত হন
                  </Title>

                  <Paragraph style={{ fontSize: 16, textAlign: "center" }}>
                    মাত্র একটি ধাপে Donor হওয়া সম্ভব—শুধু আপনার{" "}
                    <Text strong>blood group</Text> যোগ করুন।
                    <br />
                    Donor হিসেবে যুক্ত হলে আপনি রক্ত খুঁজতে পারবেন এবং একই সঙ্গে
                    জরুরি মুহূর্তে মানুষের জীবন বাঁচাতে ভূমিকা রাখতে পারবেন।
                    <br />
                    <Text strong>Ihsan Al-Dima</Text>–এর সাথে যুক্ত হয়ে আপনার
                    মানবিক দায়িত্বকে সহজ ও অর্থবহ করে তুলুন।
                  </Paragraph>

                  <Row gutter={[16, 16]}>
                    <Col xs={24} md={8}>
                      <Card bordered={false} style={{ textAlign: "center" }}>
                        <HeartOutlined
                          style={{ fontSize: 28, color: "#e53935" }}
                        />
                        <Title level={5}>মানবিক কাজে অংশগ্রহণ</Title>
                        <Text type="secondary">
                          জরুরি মুহূর্তে মানুষের জীবন বাঁচাতে সাহায্য করুন।
                        </Text>
                      </Card>
                    </Col>

                    <Col xs={24} md={8}>
                      <Card bordered={false} style={{ textAlign: "center" }}>
                        <UserAddOutlined
                          style={{ fontSize: 28, color: "#e53935" }}
                        />
                        <Title level={5}>সহজ নিবন্ধন</Title>
                        <Text type="secondary">
                          মাত্র একটি ধাপে donor হিসেবে যুক্ত হন।
                        </Text>
                      </Card>
                    </Col>

                    <Col xs={24} md={8}>
                      <Card bordered={false} style={{ textAlign: "center" }}>
                        <PlusCircleOutlined
                          style={{ fontSize: 28, color: "#e53935" }}
                        />
                        <Title level={5}>Blood Group যোগ করুন</Title>
                        <Text type="secondary">
                          শুধু blood group যোগ করলেই donor হয়ে যাবেন।
                        </Text>
                      </Card>
                    </Col>
                  </Row>

                  <Button
                    type="primary"
                    size="large"
                    block
                    onClick={() => setIsModalOpen(true)}
                    style={{
                      background:
                        "linear-gradient(135deg, #c62828 0%, #8e24aa 100%)",
                      border: "none",
                      borderRadius: 8,
                      height: 48,
                      fontWeight: 600,
                    }}
                  >
                    🩸 ব্লাড গ্রুপ যোগ করুন
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Modal
        title="Add Blood Group and Join Our Donor Network"
        closable={{ "aria-label": "Custom Close Button" }}
        onCancel={handleCancel}
        open={isModalOpen}
        footer={null}
      >
        <IDForm
          setFormErrors={setFormErrors}
          onSubmit={handleBecameDonor}
          resolver={zodResolver(BecameDonorSchema)}
        >
          <IDSelect
            name="bloodGroup"
            label="Blood Group"
            required={true}
            placeholder="Select Your Blood Group"
            options={BLOOD_GROUPS_OPTIONS}
            err={simpleErroes["bloodGroup"]}
          />

          <Button
            type="primary"
            color="primary"
            size="large"
            htmlType="submit"
            block
          >
            <PlusCircleOutlined /> Add Blood Group
          </Button>
        </IDForm>
      </Modal>
    </>
  );
};

export default BecameDonor;
