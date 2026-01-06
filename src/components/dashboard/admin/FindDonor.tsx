import { Button, Col, Divider, Row, Spin } from "antd";
import IDSelect from "../../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../../constants/upozila";
import IDForm from "../../shared/form/IDForm";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import { BLOOD_GROUPS_OPTIONS } from "../../../constants/bloodGroup";
import { SearchOutlined } from "@ant-design/icons";
import { useFindDonorQuery } from "../../../redux/features/admin/adminApi";

const FindDonor = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [params, setParams] = useState<Record<string, string>>({});

  const { data, isLoading } = useFindDonorQuery(params);

  console.log(data);

  const handleSearch = (values: FieldValues) => {
    let filterValues = {};

    console.log(values);

    if (values) {
      filterValues = Object.fromEntries(
        Object.entries(values).filter(([, value]) => value !== "")
      );
    }
    setParams(filterValues);
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
      </div>
    </>
  );
};

export default FindDonor;
