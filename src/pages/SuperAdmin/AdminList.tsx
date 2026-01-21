import {
  Button,
  Divider,
  Pagination,
  Switch,
  Table,
  Tag,
  type TableColumnsType,
} from "antd";
import Loader from "../../components/shared/Loader";
import { useAllUserQuery } from "../../redux/features/admin/adminApi";
import type { TUser } from "../../type";
import { Link } from "react-router-dom";
import { RightCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const AdminList = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data, isLoading } = useAllUserQuery({ role: "admin", page, limit });

  if (isLoading) {
    return <Loader />;
  }

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
        if (item?.blockStatus?.isBlocked) {
          return (
            <Tag color="red" style={{ fontWeight: 500, color: "red" }}>
              Suspended by Admin
            </Tag>
          );
        } else {
          return (
            <Tag color="green" style={{ fontWeight: 500, color: "blue" }}>
              Eligible for Participation
            </Tag>
          );
        }
      },
    },

    {
      title: "Action",
      key: "action",
      align: "center",
      render: (item) => {
        return (
          <>
            <Link
              to={`/super-admin/dashboard/admin-details/${item.trackingNumber}`}
            >
              <Button type="primary">
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
        <h1>All Admin</h1>
        <Divider />

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
              Admin Not Fond
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

export default AdminList;
