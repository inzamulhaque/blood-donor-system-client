import { Button, Card, Col, Divider, Flex, Row, Tag, Typography } from "antd";
import "./DonateDates.css";
import { CalendarOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const DonateDates = () => {
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

        <Row gutter={[20, 20]}>
          <Col xs={24} sm={24} md={12} lg={8}>
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
                    {"donateDate"}
                  </Title>
                </Flex>

                <Text type="secondary">No note added</Text>

                <Tag color="green" style={{ width: "fit-content" }}>
                  Donated
                </Tag>
              </Flex>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DonateDates;
