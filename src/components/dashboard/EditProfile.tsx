import { Button, Col, Divider, Row } from "antd";
import {
  useGetMeQuery,
  useUpdateMyInfoMutation,
} from "../../redux/features/user/userApi";
import Loader from "../shared/Loader";
import IDForm from "../shared/form/IDForm";
import { useMemo, useState } from "react";
import type { FieldValues } from "react-hook-form";
import IDInput from "../shared/form/IDInput";
import {
  NumberOutlined,
  PhoneOutlined,
  SaveOutlined,
  UserOutlined,
} from "@ant-design/icons";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import IDSelect from "../shared/form/IDSelect";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading } = useGetMeQuery({});
  const [updateMyInfo, { isLoading: updateLoading }] =
    useUpdateMyInfoMutation();
  const user = data?.data;

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  if (isLoading || updateLoading) {
    return <Loader />;
  }

  const handleEditProfile = async (values: FieldValues) => {
    const redirectTo = location?.pathname?.split("/").slice(0, -1).join("/");

    try {
      const res = await updateMyInfo(values).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });

        navigate(redirectTo);
      }
    } catch (error) {
      const errs: Record<string, unknown>[] = error?.data?.errorSources;

      if (Array.isArray(errs)) {
        errs.forEach((err) => {
          toast.error(err.message as string, {
            duration: 5000,
            position: "top-right",
          });
        });
      }
    }
  };

  return (
    <>
      <div
        style={{
          padding: "10px 20px",
        }}
      >
        <h1>Edit Profile</h1>
        <Divider />

        <IDForm
          setFormErrors={setFormErrors}
          onSubmit={handleEditProfile}
          defaultValues={user}
        >
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <IDInput
                label="Name"
                name="name"
                type="text"
                prefix={<UserOutlined />}
                err={simpleErroes["name"]}
              />
            </Col>

            <Col xs={24} sm={24} md={12} lg={8}>
              <IDInput
                label="Tracking Number"
                name="trackingNumber"
                type="text"
                disabled={true}
                prefix={<NumberOutlined />}
                err={simpleErroes["trackingNumber"]}
              />
            </Col>

            {user?.phoneNumber && (
              <Col xs={24} sm={24} md={12} lg={8}>
                <IDInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                  prefix={<PhoneOutlined />}
                  err={simpleErroes["phoneNumber"]}
                />
              </Col>
            )}

            {user?.bloodGroup && (
              <Col xs={24} sm={24} md={12} lg={8}>
                <IDSelect
                  label="Blood Group"
                  name="bloodGroup"
                  options={BLOOD_GROUPS_OPTIONS}
                  placeholder="Select Your Blood Group"
                  required={false}
                  err={simpleErroes["bloodGroup"]}
                />
              </Col>
            )}

            {user?.upozila && (
              <Col xs={24} sm={24} md={12} lg={8}>
                <IDSelect
                  label="Upozila"
                  name="upozila"
                  options={UPOZILAS_PABNA_OPTIONS}
                  placeholder="Select Your Upozila"
                  required={false}
                  err={simpleErroes["upozila"]}
                />
              </Col>
            )}

            {user?.accountVisibility && (
              <Col xs={24} sm={24} md={12} lg={8}>
                <IDSelect
                  label="Account Visibility"
                  name="accountVisibility"
                  options={[
                    { label: "Public", value: "public" },
                    { label: "Private", value: "private" },
                  ]}
                  placeholder="Select Your Account Visibility"
                  required={false}
                  err={simpleErroes["accountVisibility"]}
                />
              </Col>
            )}

            <Col xs={24} sm={24} md={24} lg={24}>
              <Button
                type="primary"
                color="primary"
                htmlType="submit"
                size="large"
                block
              >
                <SaveOutlined /> Save Changes
              </Button>
            </Col>
          </Row>
        </IDForm>
      </div>
    </>
  );
};

export default EditProfile;
