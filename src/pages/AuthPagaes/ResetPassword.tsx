import {
  ArrowLeftOutlined,
  LockOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Button, Card, Space, Typography } from "antd";
import { motion } from "framer-motion";
import type { FieldValues } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import "./authStyle.css";
import IDForm from "../../components/shared/form/IDForm";
import FormHeader from "../../components/auth/FormHeader";
import { useEffect, useMemo, useState } from "react";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";

import { toast } from "sonner";
import {
  useResendOtpMutation,
  useResetPasswordMutation,
} from "../../redux/features/auth/authApi";
import Loader from "../../components/shared/Loader";
import IDPassword from "../../components/shared/form/IDPassword";
import IDInput from "../../components/shared/form/IDInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "../../schemas/Auth";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeTN, useCurrentTN } from "../../redux/features/user/userSlice";

dayjs.extend(duration);

const { Text } = Typography;

const ResetPassword = () => {
  const [seconds, setSeconds] = useState<number>(300);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const [resendOtp, { isLoading: resendIsLoading }] = useResendOtpMutation();
  const trackingNumber = useAppSelector(useCurrentTN);
  const dispatch = useAppDispatch();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  useEffect(() => {
    if (seconds === 0) {
      setIsResendDisabled(false);
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (sec: number) => {
    return dayjs.duration(sec, "seconds").format("mm:ss");
  };

  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await resetPassword({
        newPassword: values.password,
        otp: Number(values.otp),
        TN: trackingNumber,
      }).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });

        dispatch(removeTN());
      }
    } catch (error: any) {
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

  const handleResendOtp = async () => {
    try {
      const res = await resendOtp(trackingNumber).unwrap();

      if (res.success) {
        toast.success(res.message, {
          duration: 5000,
          position: "top-right",
        });

        setSeconds(300);
        setIsResendDisabled(true);
      }
    } catch (error: any) {
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

  if (isLoading || resendIsLoading) {
    return <Loader />;
  }

  if (!trackingNumber) {
    return <Navigate to={"/signin"} replace={true} />;
  }

  return (
    <>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="authFormContainer"
      >
        <motion.div
          className="backHomeBtn"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              style={{ color: "white", fontSize: "16px", fontWeight: "500" }}
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ width: "100%", maxWidth: "450px" }}
        >
          <Card className="authFormCard">
            <FormHeader
              title="Reset Your Password"
              shortDes="Create a new password to continue your mission of saving lives."
            />

            <IDForm
              setFormErrors={setFormErrors}
              onSubmit={handleSubmit}
              resolver={zodResolver(ResetPasswordSchema)}
            >
              <IDInput
                label="OTP"
                name="otp"
                type="string"
                prefix={<NumberOutlined />}
                required={true}
                err={simpleErroes["otp"]}
              />

              <Space
                direction="horizontal"
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}
              >
                {isResendDisabled ? (
                  <Text type="secondary">
                    Resend OTP in <strong>{formatTime(seconds)}</strong>
                  </Text>
                ) : (
                  <Text type="secondary">Didn’t receive OTP?</Text>
                )}

                <Button
                  type="link"
                  disabled={isResendDisabled}
                  onClick={handleResendOtp}
                  style={{
                    color: isResendDisabled ? "#999" : "#c62828",
                    fontWeight: 600,
                    padding: 0,
                  }}
                >
                  Resend OTP
                </Button>
              </Space>

              <IDPassword
                label="Password"
                name="password"
                prefix={<LockOutlined />}
                required={true}
                err={simpleErroes["password"]}
              />

              <IDPassword
                label="Confirm Password"
                name="confirmPassword"
                prefix={<LockOutlined />}
                required={true}
                err={simpleErroes["confirmPassword"]}
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ width: "100%" }}
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
                  Save New Password
                </Button>
              </motion.div>
            </IDForm>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ResetPassword;
