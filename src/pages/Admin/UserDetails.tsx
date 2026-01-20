import { useParams } from "react-router-dom";
import {
  useBlockAdminByTNMutation,
  useUnblockAdminByTNMutation,
  useUserBlockByTNMutation,
  useUserDetailsByTNQuery,
  useUserUnblockByTNMutation,
} from "../../redux/features/admin/adminApi";
import Loader from "../../components/shared/Loader";
import {
  Badge,
  Button,
  Card,
  Descriptions,
  Input,
  Modal,
  Space,
  Tag,
} from "antd";
import { Grid } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const { useBreakpoint } = Grid;

const UserDetails = () => {
  const [isBlockModalOpen, setIsBlockModalOpen] = useState<boolean>(false);
  const [isUnBlockModalOpen, setIsUnBlockModalOpen] = useState<boolean>(false);
  const [reason, setReason] = useState<string | null>(null);

  const { trackingNumber } = useParams();
  const { data, isLoading } = useUserDetailsByTNQuery(trackingNumber);

  const [userBlockByTN, { isLoading: blockIsLoading }] =
    useUserBlockByTNMutation();
  const [adminBlockByTN, { isLoading: adminBlockIsLoading }] =
    useBlockAdminByTNMutation();
  const [userUnblockByTN, { isLoading: unblockIsLoading }] =
    useUserUnblockByTNMutation();
  const [adminUnblockByTN, { isLoading: adminUnblockIsLoading }] =
    useUnblockAdminByTNMutation();
  const user = useAppSelector(useCurrentUser);

  const screens = useBreakpoint();
  const columns = screens.md ? 2 : 1;

  const role = data?.data?.role;
  const isBlocked = data?.data?.blockStatus?.isBlocked;

  const handleBlock = async () => {
    if (!reason) {
      toast.error("Please provide a reason for blocking this user!", {
        duration: 7000,
        position: "top-center",
      });
    }

    if (reason) {
      setIsBlockModalOpen(false);
      setReason(null);

      if (data?.data?.role === "donor" || data?.data?.role === "finder") {
        const res = await userBlockByTN({
          tn: data?.data?.trackingNumber,
          reason,
        }).unwrap();

        if (res?.success) {
          toast.success(res?.message, {
            duration: 7000,
            position: "top-right",
          });
        }
      }

      if (user?.role === "super-admin" && data?.data?.role === "admin") {
        const res = await adminBlockByTN({
          tn: data?.data?.trackingNumber,
          reason,
        }).unwrap();

        if (res?.success) {
          toast.success(res?.message, {
            duration: 7000,
            position: "top-right",
          });
        }
      }
    }
  };

  const handleUnBlock = async () => {
    setIsUnBlockModalOpen(false);

    if (data?.data?.role === "donor" || data?.data?.role === "finder") {
      const res = await userUnblockByTN(data?.data?.trackingNumber).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 7000,
          position: "top-right",
        });
      }
    }

    if (user?.role === "super-admin" && data?.data?.role === "admin") {
      const res = await adminUnblockByTN(data?.data?.trackingNumber).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 7000,
          position: "top-right",
        });
      }
    }
  };

  if (
    isLoading ||
    blockIsLoading ||
    unblockIsLoading ||
    adminBlockIsLoading ||
    adminUnblockIsLoading
  ) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ padding: "10px 20px" }}>
        <Card
          title="User Details"
          style={{ maxWidth: 900 }}
          actions={
            user?.role === "admin" && (role === "donor" || role === "finder")
              ? [
                  <Space key="actions">
                    {!isBlocked && (
                      <Button
                        type="primary"
                        danger
                        onClick={() => {
                          setIsBlockModalOpen(true);
                        }}
                      >
                        Block User
                      </Button>
                    )}

                    {isBlocked && (
                      <Button
                        type="primary"
                        color="primary"
                        onClick={() => setIsUnBlockModalOpen(true)}
                      >
                        Unblock User
                      </Button>
                    )}
                  </Space>,
                ]
              : user?.role === "super-admin" && role !== "super-admin"
                ? [
                    <Space key="actions">
                      {!isBlocked && (
                        <Button
                          type="primary"
                          danger
                          onClick={() => {
                            setIsBlockModalOpen(true);
                          }}
                        >
                          Block User
                        </Button>
                      )}

                      {isBlocked && (
                        <Button
                          type="primary"
                          color="primary"
                          onClick={() => setIsUnBlockModalOpen(true)}
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

      <Modal
        title="Block User"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Block Now"
        open={isBlockModalOpen}
        onOk={handleBlock}
        onCancel={() => setIsBlockModalOpen(false)}
      >
        <Input value={data?.data?.trackingNumber} readOnly={true} disabled />

        <TextArea
          rows={4}
          placeholder="Please provide a reason for blocking this user (e.g., policy violation, suspicious activity, misuse of the platform)."
          maxLength={150}
          showCount
          onChange={(e) => setReason(e.target.value)}
          style={{
            margin: "10px 0",
          }}
        />
      </Modal>

      <Modal
        title="Unblock User"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Unblock Now"
        open={isUnBlockModalOpen}
        onOk={handleUnBlock}
        onCancel={() => setIsUnBlockModalOpen(false)}
      >
        <Input value={data?.data?.trackingNumber} readOnly={true} disabled />
      </Modal>
    </>
  );
};

export default UserDetails;
