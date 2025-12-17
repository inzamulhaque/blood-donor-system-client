import { Controller } from "react-hook-form";
import "./form.css";
import { Form, Input } from "antd";
import type React from "react";

type TInputProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: React.ReactNode;
};

const IDPassword = ({
  name,
  label,
  disabled,
  required,
  prefix,
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}>
            <Input.Password
              {...field}
              id={name}
              size="large"
              placeholder={label}
              disabled={disabled}
              className="IDInput"
              required={required}
              prefix={prefix}
            />
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDPassword;
