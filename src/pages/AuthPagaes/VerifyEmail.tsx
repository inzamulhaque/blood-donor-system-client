import { Button, Divider, Input, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { HeartFilled } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeTN, useCurrentTN } from "../../redux/features/user/userSlice";
import { Navigate } from "react-router-dom";
import {
  useResendOtpMutation,
  useVeriFyEmailMutation,
} from "../../redux/features/auth/authApi";
import Loader from "../../components/shared/Loader";
import { toast } from "sonner";

dayjs.extend(duration);
const { Title, Text } = Typography;

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string>("");
  const [seconds, setSeconds] = useState<number>(300);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [goSignin, setGoSignin] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const trackingNumber = useAppSelector(useCurrentTN);
  const [verifyEmail, { isLoading }] = useVeriFyEmailMutation();
  const [resendOtp, { isLoading: resendIsLoading }] = useResendOtpMutation();

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

  const handleVerify = async () => {
    try {
      const res = await verifyEmail({
        trackingNumber,
        otp: Number(otp),
      }).unwrap();

      if (res.success) {
        setGoSignin(true);

        toast.success(res.message, {
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

  if (!trackingNumber) {
    if (goSignin) {
      return <Navigate to={"/signin"} replace={true} />;
    } else {
      return <Navigate to={"/signup"} replace={true} />;
    }
  }

  if (isLoading || resendIsLoading) {
    return <Loader />;
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at top, #ffebee 0%, #ffffff 60%, #fff 100%)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 420,
            background: "#fff",
            borderRadius: 20,
            padding: "36px 32px",
            boxShadow: "0 30px 60px rgba(211,47,47,0.18)",
            border: "1px solid #ffe2e2",
          }}
        >
          <Space
            direction="vertical"
            size="middle"
            style={{ width: "100%" }}
            align="center"
          >
            {/* Logo / Icon */}
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d32f2f, #ff5252)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 25px rgba(211,47,47,0.35)",
              }}
            >
              <HeartFilled style={{ fontSize: 28, color: "#fff" }} />
            </div>

            {/* Title */}
            <Title level={4} style={{ marginBottom: 0, textAlign: "center" }}>
              Verify Your Email
            </Title>

            <Text
              type="secondary"
              style={{ textAlign: "center", fontSize: 14 }}
            >
              We’ve sent a 5-digit verification code to your email address.
              Please enter it below to continue.
            </Text>

            <Divider style={{ margin: "12px 0" }} />

            {/* OTP Input */}
            <Input.OTP
              length={5}
              value={otp}
              onChange={setOtp}
              size="large"
              style={{ width: "100%", justifyContent: "center" }}
            />

            <Button
              type="primary"
              size="large"
              disabled={otp.length !== 5}
              onClick={handleVerify}
              style={{
                width: "100%",
                borderRadius: 10,
                background: "linear-gradient(135deg, #d32f2f, #ff5252)",
                border: "none",
                fontWeight: 600,
                height: 46,
              }}
            >
              Verify & Continue
            </Button>

            {/* Timer & Resend */}
            <Space direction="vertical" align="center" size={4}>
              {isResendDisabled ? (
                <Text type="secondary" style={{ fontSize: 13 }}>
                  Resend OTP in <strong>{formatTime(seconds)}</strong>
                </Text>
              ) : (
                <Text type="secondary" style={{ fontSize: 13 }}>
                  Didn’t receive the code?
                </Text>
              )}

              <Button
                type="link"
                disabled={isResendDisabled}
                onClick={handleResendOtp}
                style={{
                  color: isResendDisabled ? "#aaa" : "#d32f2f",
                  fontWeight: 500,
                  padding: 0,
                }}
              >
                Resend OTP
              </Button>
            </Space>
          </Space>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
