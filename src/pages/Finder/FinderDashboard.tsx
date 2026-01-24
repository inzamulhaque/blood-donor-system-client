import { Col, Divider, Pagination, Row, Spin } from "antd";
import DonorSearchBar from "../../components/dashboard/components/DonorSearchBar";
import { useSearchDonorQuery } from "../../redux/features/finder/finderApi";
import { useState } from "react";
import DonorCard from "../../components/dashboard/components/DonorCard";

const FinderDashboard = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(12);
  const [params, setParams] = useState<Record<string, string>>({});

  const [skipSearch, setSkipSearch] = useState<boolean>(true);

  const { data, isLoading } = useSearchDonorQuery(
    { page, limit, ...params },
    {
      skip: skipSearch,
    },
  );

  console.log(data);

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Finder Dashboard</h1>
        <Divider />

        <DonorSearchBar setSkipSearch={setSkipSearch} setParams={setParams} />
        <Divider />

        {isLoading && (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        )}

        <Row gutter={[20, 20]}>
          {!isLoading &&
            data &&
            data?.data?.length !== 0 &&
            data?.data?.map((donor: Record<string, string>, index: number) => {
              return (
                <Col key={index} xs={24} sm={24} md={12} lg={6}>
                  <DonorCard
                    name={donor?.name}
                    email={donor?.email}
                    bloodGroup={donor?.bloodGroup}
                    upozila={donor?.upozila}
                    phoneNumber={donor?.phoneNumber}
                  />
                </Col>
              );
            })}
        </Row>

        {!isLoading && data && data?.data?.length === 0 && (
          <>
            <h3 style={{ textAlign: "center", opacity: 0.5, color: "red" }}>
              No donors are available at the moment. <br /> Please contact our
              admin through our <br /> Facebook page for further assistance!
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

export default FinderDashboard;
