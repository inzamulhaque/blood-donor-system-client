import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
import "./form.css";

type TInputProps = {
  type: string;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
};

const IDInput = ({ type, name, label, disabled, required }: TInputProps) => {
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
            />
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDInput;
