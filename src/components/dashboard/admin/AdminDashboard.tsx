import { Col, Flex, Row } from "antd";

const AdminDashboard = () => {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Row gutter={[20, 20]}>
          <Col xs={24} md={12}>
            <div
              style={{
                background: "red",
                color: "white",
                padding: "50px 20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Donor</h3>
                <h3>30</h3>
              </Flex>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <div
              style={{
                background: "yellow",
                color: "black",
                padding: "50px 20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <Flex justify="space-between" align="center">
                <h3>Donor</h3>
                <h3>30</h3>
              </Flex>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AdminDashboard;
