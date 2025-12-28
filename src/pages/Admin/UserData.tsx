import { Button, Divider, type TableColumnsType } from "antd";
import type { TUser } from "../../type";

const UserData = () => {
  const columns: TableColumnsType<TUser> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },

    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },

    {
      title: "Contact No.",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },

    {
      title: "Status",
      key: "status",
      render: (item) => {
        console.log(item);
        <>
          <Button>Active/Inactive</Button>
        </>;
      },
    },
  ];

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>All User</h1>
        <Divider />
      </div>
    </>
  );
};

export default UserData;
