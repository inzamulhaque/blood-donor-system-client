import { Typography } from "antd";

const { Title, Text } = Typography;

const FormHeaer = ({
  title,
  shortDes,
}: {
  title: string;
  shortDes: string;
}) => {
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Title level={2} style={{ margin: 0 }}>
          {title}
        </Title>
        <Text type="secondary">{shortDes}</Text>
      </div>
    </>
  );
};

export default FormHeaer;
