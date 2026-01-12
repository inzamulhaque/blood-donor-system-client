import { Button, Col, Divider, Row } from "antd";
import { useMemo, useState } from "react";
import type { FieldValues } from "react-hook-form";
import IDForm from "../../components/shared/form/IDForm";
import IDInput from "../../components/shared/form/IDInput";
import {
  MailOutlined,
  NumberOutlined,
  PhoneOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IDSelect from "../../components/shared/form/IDSelect";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonorSchema } from "../../schemas/Donor";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";

const AddDonor = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const { trackingNumber } = useAppSelector(useCurrentUser) || {};

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleAddDonor = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Add Donor</h1>
        <Divider />

        <IDForm
          onSubmit={handleAddDonor}
          setFormErrors={setFormErrors}
          defaultValues={{ addedBy: trackingNumber }}
          resolver={zodResolver(DonorSchema)}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Name"
                name="name"
                type="text"
                required={true}
                err={simpleErroes["name"]}
                prefix={<UserOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Email"
                name="email"
                type="text"
                required={false}
                err={simpleErroes["email"]}
                prefix={<MailOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Donor Phone Number"
                name="phoneNumber"
                type="text"
                required={true}
                err={simpleErroes["phoneNumber"]}
                prefix={<PhoneOutlined />}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDSelect
                label="Blood Group"
                name="bloodGroup"
                required={true}
                err={simpleErroes["bloodGroup"]}
                options={BLOOD_GROUPS_OPTIONS}
                placeholder="Select Donor Blood Group"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDSelect
                label="Upozila"
                name="upozila"
                required={true}
                err={simpleErroes["upozila"]}
                options={UPOZILAS_PABNA_OPTIONS}
                placeholder="Select Donor Upozila"
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={12}>
              <IDInput
                label="Added By"
                name="addedBy"
                type="number"
                err={simpleErroes["addedBy"]}
                required={true}
                prefix={<NumberOutlined />}
                disabled={true}
              />
            </Col>

            <Col xs={24} sm={24} md={24} lg={24}>
              <Button
                type="primary"
                color="primary"
                htmlType="submit"
                size="large"
                block
              >
                <UserAddOutlined /> Add New Donor
              </Button>
            </Col>
          </Row>
        </IDForm>
      </div>
    </>
  );
};

export default AddDonor;
