import { Button, Divider } from "antd";
import "./authStyle.css";
import { useMemo, useState } from "react";
import type { FieldErrors, FieldValues } from "react-hook-form";
import IDForm from "../../components/shared/form/IDForm";
import IDPassword from "../../components/shared/form/IDPassword";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { LockOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangePasswordSchema } from "../../schemas/Auth";
import { toast } from "sonner";

import Loader from "../../components/shared/Loader";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import type { TError } from "../../type";

const ChangePassword = () => {
  const [formErrors, setFormErrors] = useState<
    FieldErrors<Record<string, unknown>>
  >({});
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handlePasswordChange = async (values: FieldValues) => {
    try {
      const res = await changePassword(values).unwrap();

      if (res?.success) {
        toast.success(res.message, {
          duration: 7000,
          position: "top-right",
        });
      }
    } catch (error: unknown) {
      const apiError = error as TError;
      const errs = apiError?.data?.errorSources;

      if (Array.isArray(errs)) {
        errs.forEach((err) => {
          toast.error(err?.message, {
            duration: 5000,
            position: "top-right",
          });
        });
      }
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
