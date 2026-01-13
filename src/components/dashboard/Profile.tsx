import { Button, Card, Descriptions, Tag } from "antd";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import Loader from "../shared/Loader";
import dayjs from "dayjs";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { data, isLoading } = useGetMeQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const user = data?.data;

  return (
    <>
      <Card
        title="User Profile"
        actions={[
          <Link to={location.pathname + "/edit"}>
            <Button type="primary" color="primary" size="large">
              Edit Profile
            </Button>
          </Link>,
        ]}
      >
        <Descriptions column={1} bordered size="middle">
          <Descriptions.Item label="Name">{user?.name}</Descriptions.Item>

          <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>

          <Descriptions.Item label="Tracking Number">
            {user?.trackingNumber}
          </Descriptions.Item>

          <Descriptions.Item label="Role">
            <Tag color="blue">{user?.role}</Tag>
          </Descriptions.Item>

          {user?.accountVisibility && (
            <Descriptions.Item label="Account Visibility">
              <Tag
                color={
                  user?.accountVisibility === "public" ? "green" : "orange"
                }
              >
                {user?.accountVisibility}
              </Tag>
            </Descriptions.Item>
          )}

          <Descriptions.Item label="Account Status">
            <Tag color={user?.accountStatus === "active" ? "green" : "red"}>
              {user?.accountStatus}
            </Tag>
          </Descriptions.Item>

          <Descriptions.Item label="Deleted">
            <Tag color={user?.isDeleted ? "red" : "green"}>
              {user?.isDeleted ? "Yes" : "No"}
            </Tag>
          </Descriptions.Item>

          <Descriptions.Item label="Blocked">
            <Tag color={user?.blockStatus?.isBlocked ? "red" : "green"}>
              {user?.blockStatus?.isBlocked ? "Blocked" : "Not Blocked"}
            </Tag>
          </Descriptions.Item>

          {user?.availability && (
            <Descriptions.Item label="Availability">
              <Tag color={user?.availability ? "green" : "orange"}>
                {user?.availability ? "Available" : "Unavailable"}
              </Tag>
            </Descriptions.Item>
          )}

          {user?.phoneNumber && (
            <Descriptions.Item label="Phone Number">
              {user?.phoneNumber}
            </Descriptions.Item>
          )}

          {user?.bloodGroup && (
            <Descriptions.Item label="Blood Group">
              {user?.bloodGroup}
            </Descriptions.Item>
          )}

          {user?.upozila && (
            <Descriptions.Item label="Upozila">
              {user?.upozila}
            </Descriptions.Item>
          )}

          {user?.role === "donor" ||
            (user?.role === "admin" && (
              <Descriptions.Item label="Last Donate Date">
                {user?.lastDonateDate
                  ? dayjs(user.lastDonateDate).format("DD MMM YYYY")
                  : "N/A"}
              </Descriptions.Item>
            ))}
        </Descriptions>
      </Card>
    </>
  );
};

export default Profile;
