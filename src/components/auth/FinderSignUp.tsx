import { useMemo, useState } from "react";
import FormHeader from "./FormHeader";
import type { FieldErrors, FieldValues } from "react-hook-form";
import { motion } from "framer-motion";
import IDForm from "../shared/form/IDForm";
import IDSelect from "../shared/form/IDSelect";
import { UPOZILAS_PABNA_OPTIONS } from "../../constants/upozila";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import IDInput from "../shared/form/IDInput";
import IDPassword from "../shared/form/IDPassword";
import AcceptPolicyTerms from "./AcceptPolicyTerms";
import NextOrSignupBtn from "./NextOrSignupBtn";
import { toast } from "sonner";
import simplifyZodErrors from "../../utils/SimplifyZodErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { FinderRegisterSchema } from "../../schemas/Finder";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useFinderSignupMutation } from "../../redux/features/user/userApi";
import { setTN } from "../../redux/features/user/userSlice";
import Loader from "../shared/Loader";
import type { TError } from "../../type";

const FinderSignUp = () => {
  const [formErrors, setFormErrors] = useState<
    FieldErrors<Record<string, unknown>>
  >({});
  const [formDefaultValues, setFormDefaultValues] = useState<FieldValues>({});

  const [acceptTermsPolicy, setAcceptTermsPolicy] = useState<
    Record<string, boolean>
  >({ terms: false, policy: false });
  const [openSection, setOpenSection] = useState<number>(1);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [finderSignUp, { isLoading }] = useFinderSignupMutation();

  const simpleErroes = useMemo(() => {
    const serr = simplifyZodErrors(formErrors) || {};

    const errFields = Object.keys(serr).join(", ");

    if (errFields) {
      toast.error(
        `আপনার ${errFields} ফিল্ডে সমস্যা আছে। দয়া করে সেগুলো ঠিক করুন।`,
        {
          duration: 7000,
          position: "top-center",
        },
      );
    }

    return serr;
  }, [formErrors]);

  const handleSubmit = async (values: FieldValues) => {
    setOpenSection(1);
    setAcceptTermsPolicy({ terms: false, policy: false });
    setFormDefaultValues(values);

    try {
      const res = await finderSignUp(values).unwrap();

      if (res?.success) {
        toast.success(res?.message, {
          duration: 5000,
          position: "top-right",
        });

        setFormDefaultValues({});

        dispatch(setTN({ trackingNumber: res?.data?.user?.trackingNumber }));
        navigate("/verify-email");
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
      <FormHeader
        title="Find Blood. Save Lives."
        shortDes="Find blood as a finder or donor — become a donor to help save lives."
      />

      <IDForm
        setFormErrors={setFormErrors}
        onSubmit={handleSubmit}
        defaultValues={formDefaultValues}
        resolver={zodResolver(FinderRegisterSchema)}
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
              err={simpleErroes["email"]}
              prefix={<MailOutlined />}
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
              err={simpleErroes["password"]}
              prefix={<LockOutlined />}
            />

            <IDPassword
              label="Confirm Password"
              name="confirmPassword"
              required={true}
              err={simpleErroes["confirmPassword"]}
              prefix={<LockOutlined />}
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

            <AcceptPolicyTerms
              acceptTermsPolicy={acceptTermsPolicy}
              setAcceptTermsPolicy={setAcceptTermsPolicy}
            />
          </motion.div>
        )}

        <NextOrSignupBtn
          acceptTermsPolicy={acceptTermsPolicy}
          setOpenSection={setOpenSection}
          totalSection={3}
          openSection={openSection}
        />
      </IDForm>
    </>
  );
};

export default FinderSignUp;
