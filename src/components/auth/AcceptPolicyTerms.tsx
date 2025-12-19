import { Checkbox } from "antd";
import type React from "react";
import { Link } from "react-router-dom";

type TAcceptPolicyTermsProps = {
  acceptTermsPolicy: Record<string, boolean>;
  setAcceptTermsPolicy: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
};

const AcceptPolicyTerms = ({
  acceptTermsPolicy,
  setAcceptTermsPolicy,
}: TAcceptPolicyTermsProps) => {
  return (
    <>
      <Checkbox
        checked={acceptTermsPolicy.policy}
        onChange={() =>
          setAcceptTermsPolicy({
            policy: !acceptTermsPolicy.policy,
            terms: acceptTermsPolicy.terms,
          })
        }
      >
        I accept{" "}
        <Link to="/policy" target="_blank">
          our policy
        </Link>
      </Checkbox>

      <Checkbox
        checked={acceptTermsPolicy.terms}
        onChange={() =>
          setAcceptTermsPolicy({
            terms: !acceptTermsPolicy.terms,
            policy: acceptTermsPolicy.policy,
          })
        }
      >
        I accept{" "}
        <Link to="/terms" target="_blank">
          our terms of service
        </Link>
      </Checkbox>
    </>
  );
};

export default AcceptPolicyTerms;
