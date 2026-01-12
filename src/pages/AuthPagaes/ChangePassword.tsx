import { Button, Divider } from "antd";
import "./authStyle.css";
import { useMemo, useState } from "react";
import type { FieldValues } from "react-hook-form";
import IDForm from "../../components/shared/form/IDForm";
import IDPassword from "../../components/shared/form/IDPassword";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { LockOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePasswordSchema } from "../../schemas/Auth";
const ChangePassword = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handlePasswordChange = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <>
      <div className="changePasswordForm">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Change Password
          <Divider />
        </h3>

        <IDForm
          onSubmit={handlePasswordChange}
          setFormErrors={setFormErrors}
          resolver={zodResolver(ChangePasswordSchema)}
        >
          <IDPassword
            name="oldPassword"
            label="Current Password"
            err={simpleErroes["oldPassword"]}
            required={true}
          />

          <IDPassword
            name="newPassword"
            label="New Password"
            err={simpleErroes["newPassword"]}
            required={true}
          />

          <IDPassword
            name="confirmNewPassword"
            label="Confirm New Password"
            err={simpleErroes["confirmNewPassword"]}
            required={true}
          />

          <Button type="primary" htmlType="submit" size="large" block>
            <LockOutlined /> Change Password
          </Button>
        </IDForm>
      </div>
    </>
  );
};

export default ChangePassword;
