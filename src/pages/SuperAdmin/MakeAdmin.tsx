import { Button, Col, Divider, Row } from "antd";
import { useMemo, useState } from "react";
import IDForm from "../../components/shared/form/IDForm";
import type { FieldValues } from "react-hook-form";
import IDInput from "../../components/shared/form/IDInput";
import { SearchOutlined } from "@ant-design/icons";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { toast } from "sonner";

const MakeAdmin = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

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

    console.log(query);
  };

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
      </div>
    </>
  );
};

export default MakeAdmin;
