import { useParams } from "react-router-dom";
import {
  useUserBlockByTNMutation,
  useUserDetailsByTNQuery,
} from "../../redux/features/admin/adminApi";
import Loader from "../../components/shared/Loader";
import { Badge, Button, Card, Descriptions, Space, Tag } from "antd";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const UserDetails = () => {
  const { trackingNumber } = useParams();
  const { data, isLoading } = useUserDetailsByTNQuery(trackingNumber);
  const [userBlockByTN, { isLoading: blockIsLoading }] =
    useUserBlockByTNMutation();

  const screens = useBreakpoint();
  const columns = screens.md ? 2 : 1;

  const role = data?.data?.role;
  const isBlocked = data?.data?.blockStatus?.isBlocked;

  console.log(data);

  if (isLoading || blockIsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ padding: "10px 20px" }}>
        <Card
          title="User Details"
          bordered={false}
          style={{ maxWidth: 900 }}
          actions={
            role === "donor" || role === "finder"
              ? [
                  <Space key="actions">
                    {!isBlocked && (
                      <Button
                        type="primary"
                        danger
                        onClick={() => {
                          userBlockByTN(data?.data?.trackingNumber);
                        }}
                      >
                        Block User
                      </Button>
                    )}

                    {isBlocked && (
                      <Button
                        type="default"
                        onClick={() => {
                          console.log(
                            "Unblock user",
                            data?.data?.trackingNumber
                          );
                        }}
                      >
                        Unblock User
                      </Button>
                    )}
                  </Space>,
                ]
              : undefined
          }
        >
          <Descriptions bordered size="middle" column={columns}>
            <Descriptions.Item label="Name" span={1}>
              {data?.data?.name}
            </Descriptions.Item>

            <Descriptions.Item label="Email" span={1}>
              {data?.data?.email}
            </Descriptions.Item>

            <Descriptions.Item label="Tracking Number" span={1}>
              <Tag color="blue">{data?.data?.trackingNumber}</Tag>
            </Descriptions.Item>

            <Descriptions.Item label="Account Status" span={1}>
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

            <Descriptions.Item label="Upozila" span={1}>
              {data?.data?.upozila}
            </Descriptions.Item>

            {data?.data?.bloodGroup && (
              <Descriptions.Item label="Blood Group" span={1}>
                <Tag color="volcano">{data?.data?.bloodGroup}</Tag>
              </Descriptions.Item>
            )}

            <Descriptions.Item label="Phone Number" span={1}>
              {data?.data?.phoneNumber}
            </Descriptions.Item>

            {data?.data?.accountVisibility && (
              <Descriptions.Item label="Account Visibility" span={1}>
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

            <Descriptions.Item label="Availability" span={1}>
              {data?.data?.availability ? (
                <Tag color="green">Available</Tag>
              ) : (
                <Tag color="red">Unavailable</Tag>
              )}
            </Descriptions.Item>

            <Descriptions.Item label="Deleted" span={1}>
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
