import { Col, Flex, Row } from "antd";
import { motion } from "framer-motion";
import "./ourTeam.css";
import Card from "./Card";
import inzamulImg from "../../assets/ourTeamImages/Inzamul.jpg";

const OurAdmins = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Flex
          justify="center"
          style={{
            padding: "25px",
          }}
        >
          <motion.h3
            className="ourAdminTitle"
            initial={{ y: -150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
          >
            পরিচালনা পরিষদ
          </motion.h3>
        </Flex>

        <Row
          gutter={[20, 20]}
          align="middle"
          justify="center"
          style={{
            margin: "15px 0",
          }}
        >
          <Col xs={24} md={12} lg={8}>
            <Card
              imgUrl={inzamulImg}
              name="MD Inzamul Haque"
              designation="Chief Administrator"
              socialLink="https://www.linkedin.com/in/md-inzamul-haque/"
            />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Card
              imgUrl={inzamulImg}
              name="MD Inzamul Haque"
              designation="Chief Administrator"
              socialLink="https://www.linkedin.com/in/md-inzamul-haque/"
            />
          </Col>

          <Col xs={24} md={12} lg={8}>
            <Card
              imgUrl={inzamulImg}
              name="MD Inzamul Haque"
              designation="Chief Administrator"
              socialLink="https://www.linkedin.com/in/md-inzamul-haque/"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default OurAdmins;
