import { Form } from "antd";
import type React from "react";
import { useEffect, type ReactNode } from "react";
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
  FormProvider,
  type FieldErrors,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  setFormErrors: React.Dispatch<
    React.SetStateAction<FieldErrors<Record<string, unknown>>>
  >;
} & TFormConfig;

const IDForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  setFormErrors,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  useEffect(() => {
    const formErrors: FieldErrors<Record<string, unknown>> =
      methods?.formState?.errors;

    setFormErrors(formErrors);
  }, [methods.formState.errors]);

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
