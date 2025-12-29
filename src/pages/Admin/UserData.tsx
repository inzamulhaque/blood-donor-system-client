import { Button, Divider, Table, type TableColumnsType } from "antd";
import { userTestData, type TUser } from "../../type";
import { RightCircleOutlined } from "@ant-design/icons";

const UserData = () => {
  const columns: TableColumnsType<TUser> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },

    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },

    {
      title: "Contact No.",
      key: "phoneNumber",
      render: (item) => {
        return (
          <>
            <a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a>
          </>
        );
      },
    },

    {
      title: "Status",
      key: "status",
      render: (item) => {
        console.log("item");
        return (
          <>
            {item?.accountStatus === "active" ? (
              <Button type="primary">Active</Button>
            ) : (
              <Button danger>Inactive</Button>
            )}
          </>
        );
      },
    },

    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },

    {
      title: "Block Status",
      key: "blockStatus",
      render: (item) => {
        console.log(item);
        return (
          <>
            {item?.blockStatus?.isBlocked ? (
              <Button type="primary">Unblock</Button>
            ) : (
              <Button danger>Block</Button>
            )}
          </>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log(item);
        return (
          <>
            <Button>
              View Details <RightCircleOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>All User</h1>
        <Divider />

        <Table
          dataSource={userTestData}
          columns={columns}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </>
  );
};

export default UserData;
