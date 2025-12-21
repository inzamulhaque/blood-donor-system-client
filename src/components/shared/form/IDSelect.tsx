import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  placeholder?: string;
  required: boolean;
  mode?: "multiple" | undefined;
  err?: string;
};

const IDSelect = ({
  label,
  name,
  options,
  disabled,
  placeholder,
  required,
  mode,
  err,
}: TPHSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label} required={required}>
            <Select
              {...field}
              mode={mode}
              placeholder={placeholder ?? null}
              options={options}
              disabled={disabled}
              size="large"
              style={{ width: "100%" }}
            />

            {err && <p style={{ color: "red", marginTop: 4 }}>{err}</p>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDSelect;
