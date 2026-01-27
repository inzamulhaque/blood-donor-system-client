import { ArrowLeftOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { motion } from "framer-motion";
import type { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import "./authStyle.css";
import IDForm from "../../components/shared/form/IDForm";
import IDInput from "../../components/shared/form/IDInput";
import FormHeader from "../../components/auth/FormHeader";
import { useMemo, useState } from "react";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";

import { toast } from "sonner";
import { useForgotPasswordMutation } from "../../redux/features/auth/authApi";
import Loader from "../../components/shared/Loader";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setTN } from "../../redux/features/user/userSlice";

const ForgotPassword = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    return serr;
  }, [formErrors]);

  const handleSubmit = async (values: FieldValues) => {
    try {
      const res = await forgotPassword(values).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });

        dispatch(setTN({ trackingNumber: res?.data?.user }));

        navigate("/reset-password");
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

  if (isLoading) {
    return <Loader />;
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
              title="Recover Your Account"
              shortDes="Don’t worry — we’ll help you get back to saving lives."
            />

            <IDForm setFormErrors={setFormErrors} onSubmit={handleSubmit}>
              <IDInput
                label="Email"
                name="email"
                type="email"
                prefix={<MailOutlined />}
                required={true}
                err={simpleErroes["email"]}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "10px",
                }}
              >
                <Link to="/signin" style={{ color: "#8e24aa" }}>
                  Signin Now
                </Link>
              </div>

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
                  Send OTP
                </Button>
              </motion.div>
            </IDForm>
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ForgotPassword;
