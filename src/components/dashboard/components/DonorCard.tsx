import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Space, Tag, Typography } from "antd";
import type { TBloodGroup } from "../../../constants/bloodGroup";
import type { TUpozilaPabna } from "../../../constants/upozila";

const { Text, Title } = Typography;

type TDonorCardProps = {
  name: string;
  email: string;
  bloodGroup: TBloodGroup;
  upozila: TUpozilaPabna;
  phoneNumber: number | string;
};

const DonorCard = ({
  name,
  email,
  bloodGroup,
  upozila,
  phoneNumber,
}: TDonorCardProps) => {
  return (
    <>
      <Card
        hoverable
        style={{
          borderRadius: 12,
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Space direction="vertical" size="small" style={{ width: "100%" }}>
          <Title level={5}>
            <UserOutlined /> {name}
          </Title>

          <Text type="secondary">
            <MailOutlined /> {email}
          </Text>

          <div>
            <Text strong>Blood Group: </Text>
            <Tag color="red">{bloodGroup}</Tag>
          </div>

          <Text>
            <strong>Upozila:</strong> {upozila}
          </Text>

          <Button
            type="primary"
            icon={<PhoneOutlined />}
            block
            href={`tel:${phoneNumber}`}
          >
            {phoneNumber}
          </Button>
        </Space>
      </Card>
    </>
  );
};

export default DonorCard;
