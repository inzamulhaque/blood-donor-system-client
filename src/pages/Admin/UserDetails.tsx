import { useParams } from "react-router-dom";
import { useUserDetailsByTNQuery } from "../../redux/features/admin/adminApi";
import Loader from "../../components/shared/Loader";
import { Badge, Card, Descriptions, Tag } from "antd";

const UserDetails = () => {
  const { trackingNumber } = useParams();
  const { data, isLoading } = useUserDetailsByTNQuery(trackingNumber);

  console.log(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ padding: "10px 20px" }}>
        <Card title="User Details" bordered={false} style={{ maxWidth: 900 }}>
          <Descriptions bordered column={2} size="middle">
            <Descriptions.Item label="Name">
              {data?.data?.name}
            </Descriptions.Item>

            <Descriptions.Item label="Email">
              {data?.data?.email}
            </Descriptions.Item>

            <Descriptions.Item label="Tracking Number">
              <Tag color="blue">{data?.data?.trackingNumber}</Tag>
            </Descriptions.Item>

            <Descriptions.Item label="Account Status">
              <Badge
                status={
                  data?.data?.accountStatus === "active" ? "success" : "error"
                }
                text={data?.data?.accountStatus}
              />
            </Descriptions.Item>

            {data?.data?.blockStatus && (
              <Descriptions.Item label="Blocked">
                {data?.data?.blockStatus?.isBlocked ? (
                  <Tag color="red">Blocked</Tag>
                ) : (
                  <Tag color="green">Not Blocked</Tag>
                )}
              </Descriptions.Item>
            )}

            <Descriptions.Item label="Upozila">
              {data?.data?.upozila}
            </Descriptions.Item>

            {data?.data?.bloodGroup && (
              <Descriptions.Item label="Blood Group">
                <Tag color="volcano">{data?.data?.bloodGroup}</Tag>
              </Descriptions.Item>
            )}

            <Descriptions.Item label="Phone Number">
              {data?.data?.phoneNumber}
            </Descriptions.Item>

            {data?.data?.accountVisibility && (
              <Descriptions.Item label="Account Visibility">
                <Tag
                  color={
                    data?.data?.accountVisibility === "public"
                      ? "green"
                      : "orange"
                  }
                >
                  {data?.data?.accountVisibility.toUpperCase()}
                </Tag>
              </Descriptions.Item>
            )}

            <Descriptions.Item label="Availability">
              {data?.data?.availability ? (
                <Tag color="green">Available</Tag>
              ) : (
                <Tag color="red">Unavailable</Tag>
              )}
            </Descriptions.Item>

            <Descriptions.Item label="Deleted">
              {data?.data?.isDeleted ? (
                <Tag color="red">Yes</Tag>
              ) : (
                <Tag color="green">No</Tag>
              )}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
    </>
  );
};

export default UserDetails;
