import { Controller } from "react-hook-form";
import "./form.css";
import { Form, Input } from "antd";
type TTextAreaProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  err?: string;
};

const IDTextArea = ({
  name,
  label,
  disabled,
  required,
  err,
}: TTextAreaProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}>
            <Input.TextArea
              {...field}
              id={name}
              size="large"
              placeholder={label}
              disabled={disabled}
              className="IDInput"
            />
            {err && <p style={{ color: "red", marginTop: 4 }}>{err}</p>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDTextArea;
