import {
  Button,
  Col,
  Divider,
  Pagination,
  Row,
  Spin,
  Switch,
  Table,
  Tag,
  type TableColumnsType,
} from "antd";
import { type TUser } from "../../type";
import {
  FileSearchOutlined,
  RightCircleOutlined,
  SearchOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useAllUserQuery } from "../../redux/features/admin/adminApi";
import IDForm from "../../components/shared/form/IDForm";
import type { FieldValues } from "react-hook-form";
import IDInput from "../../components/shared/form/IDInput";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";

const UserData = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [params, setParams] = useState<Record<string, string>>();

  const user = useAppSelector(useCurrentUser);

  const { data, isLoading } = useAllUserQuery({ ...params, page, limit });

  const handleSearch = (values: FieldValues) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.searchValue);

    const isNumber = /^\d+$/.test(values.searchValue);

    if (isEmail) {
      setParams({
        email: [values.searchValue] as unknown as string,
      });
    } else if (isNumber) {
      setParams({
        trackingNumber: [values.searchValue] as unknown as string,
      });
    } else {
      setParams({
        searchTerm: [values.searchValue] as unknown as string,
      });
    }
  };

  const columns: TableColumnsType<TUser> = [
    {
      title: "SL",
      key: "sl",
      align: "center",
      render: (_text, _record, index) => index + 1,
    },

    {
      title: "Name",
      key: "name",
      align: "center",
      dataIndex: "name",
    },

    {
      title: "Email",
      key: "email",
      align: "center",
      dataIndex: "email",
    },

    {
      title: "Tracking Number",
      key: "trackingNumber",
      align: "center",
      dataIndex: "trackingNumber",
    },

    {
      title: "Status",
      dataIndex: "accountStatus",
      key: "status",
      align: "center",

      render: (status: "active" | "inactive") => (
        <Switch
          checked={status === "active"}
          checkedChildren="Active"
          unCheckedChildren="Inactive"
          disabled
        />
      ),
    },

    {
      title: "Role",
      key: "role",
      align: "center",
      dataIndex: "role",
    },

    {
      title: "Block Status",
      key: "blockStatus",
      align: "center",
      render: (item) => {
        const canBlock = item?.role === "donor" || item?.role === "finder";

        if (!canBlock && user?.role !== "super-admin") {
          return (
            <Tag color={"blue"} style={{ fontWeight: 500, color: "red" }}>
              <StopOutlined /> Insufficient Permission
            </Tag>
          );
        }

        if (user?.role === "super-admin" && item?.role === "super-admin") {
          return (
            <Tag color={"blue"} style={{ fontWeight: 500, color: "red" }}>
              <StopOutlined /> Insufficient Permission
            </Tag>
          );
        }

        return (
          <>
            {item?.blockStatus?.isBlocked ? (
              <Tag color="red" style={{ fontWeight: 500, color: "red" }}>
                Suspended by Admin
              </Tag>
            ) : (
              <Tag color="green" style={{ fontWeight: 500, color: "blue" }}>
                Eligible for Participation
              </Tag>
            )}
          </>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      align: "center",
      render: (item) => {
        return (
          <>
            <Link to={`/admin/dashboard/users/${item.trackingNumber}`}>
              <Button type="primary" disabled={item.role === "super-admin"}>
                View Details <RightCircleOutlined />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ padding: "10px 20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Search Users</h1>
        <Divider />

        <IDForm onSubmit={handleSearch} setFormErrors={setFormErrors}>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={18} md={18} lg={16}>
              <IDInput
                label="Search Value"
                name="searchValue"
                type="text"
                required={true}
                prefix={<FileSearchOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={8}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  style={{
                    background:
                      "linear-gradient(135deg, #c62828 0%, #8e24aa 100%)",
                    border: "none",
                    height: "45px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "6px",
                  }}
                >
                  <SearchOutlined /> Find Users
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

        {formErrors.message && (
          <h3 style={{ textAlign: "center", opacity: 0.3, color: "red" }}>
            Something Went Wrong
          </h3>
        )}

        {!isLoading && data && data?.data?.length !== 0 && (
          <>
            <Table<TUser>
              columns={columns}
              dataSource={data.data}
              pagination={false}
              scroll={{ x: "max-content" }}
            />
          </>
        )}

        {!isLoading && data && data?.data?.length === 0 && (
          <>
            <h3 style={{ textAlign: "center", opacity: 0.3, color: "red" }}>
              User Not Fond
            </h3>
          </>
        )}

        {!isLoading && data && data?.meta && data?.meta?.totalPage > 1 && (
          <Pagination
            align="end"
            defaultCurrent={data?.meta?.page}
            pageSize={data?.meta?.limit}
            total={data?.meta?.total}
            onChange={(page, pageSize) => {
              setPage(page);
              setLimit(pageSize);
            }}
            style={{
              marginTop: "10px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default UserData;
