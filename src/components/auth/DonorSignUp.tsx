import { Typography } from "antd";
import { useMemo, useState } from "react";

import IDForm from "../shared/form/IDForm";
import { Link } from "react-router-dom";
import IDInput from "../shared/form/IDInput";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import IDPassword from "../shared/form/IDPassword";
import IDSelect from "../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import { BLOOD_GROUPS_OPTIONS } from "../../constants/bloodGroup";
import AcceptPolicyTerms from "./AcceptPolicyTerms";
import NextOrSignupBtn from "./NextOrSignupBtn";
import FormHeader from "./FormHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { DonorRegisterSchema } from "../../schemas/Donor";
import type { FieldValues } from "react-hook-form";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { toast } from "sonner";

const { Text } = Typography;

const DonorSignUp = () => {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [acceptTermsPolicy, setAcceptTermsPolicy] = useState<
    Record<string, boolean>
  >({ terms: false, policy: false });
  const [openSection, setOpenSection] = useState<number>(1);

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    const errFields = Object.keys(serr).join(", ");

    if (errFields) {
      toast.error(
        `আপনার ${errFields} ফিল্ডে সমস্যা আছে। দয়া করে সেগুলো ঠিক করুন।`,
        {
          duration: 7000,
          position: "top-center",
        }
      );
    }

    return serr;
  }, [formErrors]);

  const handleSubmit = (values: FieldValues) => {
    setOpenSection(1);
    setAcceptTermsPolicy({ terms: false, policy: false });
    console.log({ values });
  };
  return (
    <>
      <FormHeader
        title="Donate Blood. Save Lives."
        shortDes=" Your one step today can save a life tomorrow."
      />

      <IDForm
        onSubmit={handleSubmit}
        resolver={zodResolver(DonorRegisterSchema)}
        setFormErrors={setFormErrors}
      >
        {openSection === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDInput
              label="Name"
              name="name"
              type="text"
              prefix={<UserOutlined />}
              required={true}
              err={simpleErroes["name"]}
            />

            <IDInput
              label="Email"
              name="email"
              type="email"
              required={true}
              prefix={<MailOutlined />}
              err={simpleErroes["email"]}
            />
          </motion.div>
        )}

        {openSection === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDPassword
              label="Password"
              name="password"
              required={true}
              prefix={<LockOutlined />}
              err={simpleErroes["password"]}
            />

            <IDPassword
              label="Confirm Password"
              name="confirmPassword"
              required={true}
              prefix={<LockOutlined />}
              err={simpleErroes["confirmPassword"]}
            />
          </motion.div>
        )}

        {openSection === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDInput
              label="Phone"
              name="phoneNumber"
              type="text"
              required={true}
              prefix={<PhoneOutlined />}
              err={simpleErroes["phoneNumber"]}
            />

            <IDSelect
              label="Upozila"
              name="upozila"
              required={true}
              options={UPOZILAS_PABNA_OPTIONS}
              placeholder="Select your upozila"
              err={simpleErroes["upozila"]}
            />
          </motion.div>
        )}

        {openSection === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <IDSelect
              label="Blood Group"
              name="bloodGroup"
              required={true}
              options={BLOOD_GROUPS_OPTIONS}
              placeholder="Select your blood group"
              err={simpleErroes["bloodGroup"]}
            />

            <AcceptPolicyTerms
              acceptTermsPolicy={acceptTermsPolicy}
              setAcceptTermsPolicy={setAcceptTermsPolicy}
            />
          </motion.div>
        )}

        <NextOrSignupBtn
          acceptTermsPolicy={acceptTermsPolicy}
          setOpenSection={setOpenSection}
          totalSection={4}
          openSection={openSection}
        />

        <div style={{ textAlign: "center" }}>
          <Text type="secondary">Already have an account? </Text>
          <Link to="/signin" style={{ color: "#c62828", fontWeight: "600" }}>
            Sign In now
          </Link>
        </div>
      </IDForm>
    </>
  );
};

export default DonorSignUp;
