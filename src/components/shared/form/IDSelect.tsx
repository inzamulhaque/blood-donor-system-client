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
};

const IDSelect = ({
  label,
  name,
  options,
  disabled,
  placeholder,
  required,
  mode,
}: TPHSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
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

            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </>
  );
};

export default IDSelect;
