import type { FieldValues } from "react-hook-form";
import IDForm from "../../shared/form/IDForm";
import { useMemo, useState } from "react";
import simplifyZodErrors from "../../../utils/SimplifyZodErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { FindDonorSchema } from "../../../schemas/Finder";
import { Button, Col, Row } from "antd";
import IDSelect from "../../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../../constants/upozila";
import { BLOOD_GROUPS_OPTIONS } from "../../../constants/bloodGroup";
import { SearchOutlined } from "@ant-design/icons";

type TSearchDonorProps = {
  setSkipSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setParams: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

const DonorSearchBar = ({ setSkipSearch, setParams }: TSearchDonorProps) => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleSearch = (values: FieldValues) => {
    setSkipSearch(false);
    setParams(values);
  };

  return (
    <>
      <IDForm
        onSubmit={handleSearch}
        setFormErrors={setFormErrors}
        resolver={zodResolver(FindDonorSchema)}
      >
        <Row gutter={[20, 20]}>
          <Col xs={24} sm={12} md={12} lg={8}>
            <IDSelect
              label="UPOZILA"
              name="upozila"
              required={true}
              placeholder="Select Upozila"
              options={UPOZILAS_PABNA_OPTIONS}
              err={simpleErroes["upozila"]}
            />
          </Col>

          <Col xs={24} sm={12} md={12} lg={8}>
            <IDSelect
              label="BLOOD GROUP"
              name="bloodGroup"
              required={true}
              placeholder="Select Blood Group"
              options={BLOOD_GROUPS_OPTIONS}
              err={simpleErroes["bloodGroup"]}
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
    </>
  );
};

export default DonorSearchBar;
