import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import "./form.css";
import type React from "react";

type TInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: React.ReactNode;
};

const IDInput = ({
  type,
  name,
  label,
  disabled,
  required,
  prefix,
}: TInputProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              placeholder={label}
              disabled={disabled}
              className="IDInput"
              required={required}
              prefix={prefix}
            />

            {errors[name] && (
              <p style={{ color: "red", marginTop: 4 }}>
                {errors[name]?.message as string}
              </p>
            )}
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDInput;
