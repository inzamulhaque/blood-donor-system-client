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
  type TableProps,
} from "antd";
import IDSelect from "../../components/shared/form/IDSelect";
import {
  UPOZILAS_PABNA_OPTIONS,
  type TUpozilaPabna,
} from "../../constants/upozila";
import IDForm from "../../components/shared/form/IDForm";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import {
  BLOOD_GROUPS_OPTIONS,
  type TBloodGroup,
} from "../../constants/bloodGroup";
import { SearchOutlined } from "@ant-design/icons";
import { useFindDonorQuery } from "../../redux/features/admin/adminApi";

type TDonor = {
  name: string;
  email: string;
  phoneNumber: string;
  availability: boolean;
  bloodGroup: TBloodGroup;
  upozila: TUpozilaPabna;
  accountVisibility: "public" | "private";
  isDeleted: boolean;
};

const columns: TableProps<TDonor>["columns"] = [
  {
    title: "SL",
    key: "sl",
    render: (_text, _record, index) => index + 1,
  },

  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },

  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Upozila",
    dataIndex: "upozila",
    key: "upozila",
  },

  {
    title: "Blood Group",
    dataIndex: "bloodGroup",
    key: "bloodGroup",
  },

  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    render: (item) => {
      return (
        <>
          <a href={`tel:${item}`}>{item}</a>
        </>
      );
    },
  },

  {
    title: "Availability",
    dataIndex: "availability",
    key: "availability",
    render: (available: boolean) => (
      <Switch
        checked={available}
        checkedChildren="Available"
        unCheckedChildren="Unavailable"
        disabled
      />
    ),
  },

  {
    title: "Account Visibility",
    dataIndex: "accountVisibility",
    key: "accountVisibility",
  },

  {
    title: "Deleted",
    dataIndex: "isDeleted",
    key: "isDeleted",
    render: (isDeleted: boolean) => (
      <Tag color={isDeleted ? "red" : "green"}>
        {isDeleted ? "Deleted" : "Not Deleted"}
      </Tag>
    ),
  },
];

const FindDonor = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [params, setParams] = useState<Record<string, string | number>>();

  const { data, isLoading } = useFindDonorQuery({ ...params, page, limit });

  const handleSearch = (values: FieldValues) => {
    let filterValues = {};

    if (values) {
      filterValues = Object.fromEntries(
        Object.entries(values).filter(([, value]) => value !== "")
      );
    }

    setParams({ ...filterValues });
  };
  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <IDForm onSubmit={handleSearch} setFormErrors={setFormErrors}>
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={12} md={12} lg={8}>
              <IDSelect
                label="UPOZILA"
                name="upozila"
                required={true}
                placeholder="Select Upozila"
                options={[
                  { value: "", label: "All" },
                  ...UPOZILAS_PABNA_OPTIONS,
                ]}
              />
            </Col>
            <Col xs={24} sm={12} md={12} lg={8}>
              <IDSelect
                label="BLOOD GROUP"
                name="bloodGroup"
                required={true}
                placeholder="Select Blood Group"
                options={[{ value: "", label: "All" }, ...BLOOD_GROUPS_OPTIONS]}
              />
            </Col>

            <Col xs={24} sm={12} md={12} lg={8}>
              <IDSelect
                label="Availability"
                name="availability"
                required={false}
                placeholder="Select Availability"
                options={[
                  { value: "", label: "All" },

                  {
                    value: true as unknown as string,
                    label: "Available",
                  },

                  {
                    value: false as unknown as string,
                    label: "Not Available",
                  },
                ]}
              />
            </Col>

            <Col xs={24} sm={12} md={12} lg={8}>
              <IDSelect
                label="Delete Status"
                name="isDeleted"
                required={false}
                placeholder="Select Delete Status"
                options={[
                  { value: "", label: "All" },

                  {
                    value: true as unknown as string,
                    label: "Deleted",
                  },

                  {
                    value: false as unknown as string,
                    label: "Not Deleted",
                  },
                ]}
              />
            </Col>

            <Col xs={24} sm={12} md={12} lg={8}>
              <IDSelect
                label="Account Visibility"
                name="accountVisibility"
                required={false}
                placeholder="Select Account Visibility"
                options={[
                  { value: "", label: "All" },

                  {
                    value: "public",
                    label: "Public",
                  },

                  {
                    value: "private",
                    label: "Private",
                  },
                ]}
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
                  <SearchOutlined /> Find Donor
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
            <Table<TDonor>
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
              No Donor Available In This Moment
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

export default FindDonor;
