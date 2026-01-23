import {
  Badge,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Grid,
  Modal,
  Row,
  Spin,
  Tag,
} from "antd";
import { useMemo, useState } from "react";
import IDForm from "../../components/shared/form/IDForm";
import type { FieldValues } from "react-hook-form";
import IDInput from "../../components/shared/form/IDInput";
import { SearchOutlined } from "@ant-design/icons";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { toast } from "sonner";
import {
  useGetSingleDonorQuery,
  useMakeDonorAnAdminMutation,
} from "../../redux/features/admin/adminApi";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const MakeAdmin = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [params, setParams] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const { data, isLoading } = useGetSingleDonorQuery(params, {
    skip: !shouldFetch,
  });

  const [makeAdmin, { isLoading: isMakeAdminLoading }] =
    useMakeDonorAnAdminMutation();

  const screens = useBreakpoint();
  const columns = screens.md ? 2 : 1;

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleSearch = (values: FieldValues) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
    const { searchKey } = values;

    const query: {
      email?: string;
      phoneNumber?: string;
      role: "donor";
    } = {
      role: "donor",
    };

    if (emailRegex.test(searchKey)) {
      query.email = searchKey;
    } else if (phoneRegex.test(searchKey)) {
      query.phoneNumber = searchKey;
    } else {
      toast.error("Invalid Search Params", {
        duration: 5000,
        position: "top-right",
      });
    }

    setParams(query);
    setShouldFetch(true);
  };

  const handleMakeAdmin = async () => {
    try {
      const email = data?.data?.email;

      const res = await makeAdmin({ email }).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });
      }

      navigate("/super-admin/dashboard/users");
    } catch (error) {
      const errs: Record<string, unknown>[] = error?.data?.errorSources;

      if (Array.isArray(errs)) {
        errs.forEach((err) => {
          toast.error(err.message as string, {
            duration: 5000,
            position: "top-right",
          });
        });
      }
    }
  };

  if (isMakeAdminLoading) {
    return <Loader />;
  }

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1>Find Donor & Make Admin</h1>
        <Divider />

        <IDForm onSubmit={handleSearch} setFormErrors={setFormErrors}>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={16} lg={16}>
              <IDInput
                label="Enter Email or Phone Number"
                name="searchKey"
                type="text"
                required={true}
                prefix={<SearchOutlined />}
                err={simpleErroes["searchKey"]}
              />
            </Col>

            <Col xs={24} sm={24} md={8} lg={8}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Button
                  type="primary"
                  color="primary"
                  htmlType="submit"
                  size="large"
                  block
                >
                  <SearchOutlined /> Search
                </Button>
              </div>
            </Col>
          </Row>
        </IDForm>

        <Divider />

        {isLoading && (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        )}

        {data?.data && (
          <>
            <Card
              title="User Details"
              actions={[
                data?.data?.role === "donor" ? (
                  <Button
                    type="primary"
                    color="primary"
                    size="large"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Make Admin
                  </Button>
                ) : undefined,
              ]}
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
                      data?.data?.accountStatus === "active"
                        ? "success"
                        : "error"
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
                  <a href={`tel:${data?.data?.phoneNumber}`}>
                    {data?.data?.phoneNumber}
                  </a>
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
          </>
        )}
      </div>

      <Modal
        title="Make This Donor an Admin"
        closable={{ "aria-label": "Custom Close Button" }}
        okText="Make Admin"
        onOk={handleMakeAdmin}
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
      >
        <Descriptions bordered column={1} size="middle">
          <Descriptions.Item label="Name">{data?.data?.name}</Descriptions.Item>

          <Descriptions.Item label="Email">
            {data?.data?.email}
          </Descriptions.Item>

          <Descriptions.Item label="Phone Number">
            {data?.data?.phoneNumber}
          </Descriptions.Item>

          <Descriptions.Item label="Blood Group">
            {data?.data?.bloodGroup}
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
};

export default MakeAdmin;
