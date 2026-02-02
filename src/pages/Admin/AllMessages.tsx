import {
  Button,
  Divider,
  Pagination,
  Table,
  type TableColumnsType,
} from "antd";
import { useGetAllMessagesQuery } from "../../redux/features/contact/contactApi";
import Loader from "../../components/shared/Loader";
import { useState } from "react";
import type { TContact } from "../../type";
import { Link, useLocation } from "react-router-dom";

const AllMessages = () => {
  const location = useLocation();

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data, isLoading } = useGetAllMessagesQuery({ page, limit });

  if (isLoading) {
    return <Loader />;
  }

  const columns: TableColumnsType<TContact> = [
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
      title: "Subject",
      key: "subject",
      align: "center",
      dataIndex: "subject",
    },

    {
      title: "Action",
      key: "_id",
      dataIndex: "_id",

      render: (id) => {
        return (
          <Link to={`${location.pathname}/${id}`}>
            <Button type="primary" color="primary" size="large">
              Read Message
            </Button>
          </Link>
        );
      },
    },
  ];

  console.log(data);

  return (
    <>
      <style>
        {`
  .unreadMessage {
    background-color: black !important;
    color: white !important;
  }

  .unreadMessage:hover td {
    background-color: gray !important;
  }
`}
      </style>

      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>All Messages</h1>
        <Divider />

        {!isLoading && data && data?.data?.length !== 0 && (
          <>
            <Table<TContact>
              columns={columns}
              dataSource={data.data}
              pagination={false}
              scroll={{ x: "max-content" }}
              rowKey="_id"
              rowClassName={(record: TContact) =>
                record.isReaded === false ? "unreadMessage" : ""
              }
            />
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

export default AllMessages;
