import { Col, Row } from "antd";
import "./home.css";

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            maxWidth: "1000px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <Col className="gutter-row" xs={24} sm={24} md={14}>
            Col-1
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={10}>
            Col-2
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HeroSection;
