import { Button, Card, Col, Divider, Flex, Row, Tag, Typography } from "antd";
import "./DonateDates.css";
import { CalendarOutlined } from "@ant-design/icons";
import { useGetMyDonateDatesQuery } from "../../../redux/features/donors/donorsApi";
import Loader from "../../shared/Loader";
import dayjs from "dayjs";

const { Text, Title } = Typography;

const DonateDates = () => {
  const { data, isLoading } = useGetMyDonateDatesQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const dates = data?.data || [];

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <div className="donationHeader">
          <h1>Donation List</h1>

          <Button type="primary" color="primary" size="large">
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

        <Row gutter={[20, 20]}>
          {dates.map((date: Record<string, any>, index: number) => (
            <Col xs={24} sm={24} md={12} lg={8} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  width: "100%",
                }}
              >
                <Flex vertical gap={12}>
                  <Flex align="center" gap={8}>
                    <CalendarOutlined
                      style={{ color: "#1677ff", fontSize: 18 }}
                    />
                    <Title level={5} style={{ margin: 0 }}>
                      {dayjs(date?.date).format("DD-MM-YYYY")}
                    </Title>
                  </Flex>

                  <Text type="secondary">{date?.note || "No note added"}</Text>

                  <Tag color="green" style={{ width: "fit-content" }}>
                    Donated
                  </Tag>
                </Flex>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default DonateDates;
