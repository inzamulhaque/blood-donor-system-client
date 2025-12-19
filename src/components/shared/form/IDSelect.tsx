import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[] | undefined;
  disabled?: boolean;
  placeholder?: string;
  mode?: "multiple" | undefined;
};

const IDSelect = ({
  label,
  name,
  options,
  disabled,
  placeholder,
  mode,
}: TPHSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
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
