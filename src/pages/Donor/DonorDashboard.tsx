import { Card, Col, Divider, Row, Tag, Typography } from "antd";
import Loader from "../../components/shared/Loader";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  EyeOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { useGetDonateCountQuery } from "../../redux/features/donors/donorsApi";

const { Title, Text } = Typography;

const DonorDashboard = () => {
  const { data, isLoading } = useGetMeQuery({});
  const { data: count, isLoading: countIsLoading } = useGetDonateCountQuery({});

  if (isLoading || countIsLoading) {
    return <Loader />;
  }

  const user = data?.data;

  console.log(user);

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Donor Dashboard</h1>
        <Divider />

        <div style={{ padding: "24px" }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                <CheckCircleOutlined
                  style={{
                    fontSize: 28,
                    color: user?.availability ? "#52c41a" : "#f5222d",
                  }}
                />
                <Title level={5} style={{ marginTop: 12 }}>
                  Availability
                </Title>
                <Tag color={data?.data?.availability ? "green" : "red"}>
                  I'm {data?.data?.availability ? "Available" : "Unavailable"}
                </Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                <EyeOutlined
                  style={{
                    fontSize: 28,
                    color:
                      user?.accountVisibility === "public"
                        ? "#1890ff"
                        : "#d9d9d9",
                  }}
                />
                <Title level={5} style={{ marginTop: 12 }}>
                  Account Visibility
                </Title>
                <Tag
                  color={
                    user?.accountVisibility === "public" ? "blue" : "default"
                  }
                >
                  {user?.accountVisibility.toUpperCase()}
                </Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                <HeartOutlined style={{ fontSize: 28, color: "#f5222d" }} />
                <Title level={5} style={{ marginTop: 12 }}>
                  Blood Group
                </Title>
                <Tag color="red">{user?.bloodGroup}</Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                <CalendarOutlined style={{ fontSize: 28, color: "#faad14" }} />
                <Title level={5} style={{ marginTop: 12 }}>
                  Last Donate Date
                </Title>
                <Text type="secondary">
                  {user?.lastDonateDate
                    ? dayjs(user?.lastDonateDate).format("DD MMM YYYY")
                    : "You have not made any donations yet."}
                </Text>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                {user?.accountStatus === "active" ? (
                  <CheckCircleOutlined
                    style={{ fontSize: 28, color: "#13c2c2" }}
                  />
                ) : (
                  <CloseCircleOutlined
                    style={{ fontSize: 28, color: "#f5222d" }}
                  />
                )}
                <Title level={5} style={{ marginTop: 12 }}>
                  Account Status
                </Title>

                <Tag
                  color={user?.accountStatus === "active" ? "green" : "red"}
                  style={{ fontSize: 14 }}
                >
                  {user?.accountStatus.toUpperCase()}
                </Tag>
              </Card>
            </Col>

            <Col xs={24} sm={12} lg={8}>
              <Card hoverable style={{ borderRadius: 12, textAlign: "center" }}>
                <ClockCircleOutlined
                  style={{ fontSize: 28, color: "#13c2c2" }}
                />
                <Title level={5} style={{ marginTop: 12 }}>
                  Times Donated
                </Title>
                <Text>
                  {count?.data === 0
                    ? "You have not donated blood yet."
                    : `${count?.data} ${count?.data === 1 ? "time" : "times"}`}
                </Text>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DonorDashboard;
