import { Controller } from "react-hook-form";
import "./form.css";
import { Form, Input } from "antd";
type TTextAreaProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
};

const IDTextArea = ({ name, label, disabled, required }: TTextAreaProps) => {
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
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDTextArea;
