import { useParams } from "react-router-dom";
import Loader from "../../components/shared/Loader";
import { useGetSingleMessageQuery } from "../../redux/features/contact/contactApi";
import { Card, Descriptions, Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const SingleMessage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetSingleMessageQuery(id);

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
        <Card
          title={<Title level={4}>Message Details</Title>}
          bordered
          style={{ maxWidth: 900, margin: "0 auto" }}
        >
          <Descriptions
            bordered
            column={1}
            size="middle"
            labelStyle={{ fontWeight: 600 }}
          >
            <Descriptions.Item label="Name">
              {data?.data?.name}
            </Descriptions.Item>

            <Descriptions.Item label="Email">
              <Text copyable>{data?.data?.email}</Text>
            </Descriptions.Item>

            {data?.data?.phoneNumber && (
              <Descriptions.Item label="Phone Number">
                <a href={`tel:${data?.data?.phoneNumber}`}>
                  {data?.data?.phoneNumber}
                </a>
              </Descriptions.Item>
            )}

            <Descriptions.Item label="Subject">
              <Text strong>{data?.data?.subject}</Text>
            </Descriptions.Item>
          </Descriptions>

          <Divider />

          <Title level={5}>Message</Title>
          <Paragraph
            style={{
              background: "#fafafa",
              padding: 16,
              borderRadius: 6,
              minHeight: 120,
              whiteSpace: "pre-wrap",
            }}
          >
            {data?.data?.message}
          </Paragraph>
        </Card>
      </div>
    </>
  );
};

export default SingleMessage;
