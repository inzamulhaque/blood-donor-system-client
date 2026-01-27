import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
import "./form.css";
import type React from "react";
import type { Dayjs } from "dayjs";

type TInputProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  prefix?: React.ReactNode;
  err?: string;
  disabledDate?: (currentDate: Dayjs) => boolean;
};

const IDDate = ({
  name,
  label,
  disabled,
  required,
  prefix,
  err,
  disabledDate,
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}>
            <DatePicker
              {...field}
              id={name}
              size="large"
              placeholder={label}
              disabled={disabled}
              className="IDInput"
              disabledDate={disabledDate}
              required={required}
              prefix={prefix}
            />

            {err && <p style={{ color: "red", marginTop: 4 }}>{err}</p>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDDate;
