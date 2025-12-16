import { Form } from "antd";
import type { ReactNode } from "react";
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  type Resolver,
  FormProvider,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: Resolver<Record<string, unknown>>;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const IDForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
          {children}
        </Form>
      </FormProvider>
    </>
  );
};

export default IDForm;
