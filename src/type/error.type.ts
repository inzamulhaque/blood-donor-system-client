export type TErrorSources = {
  path: string | number;
  message: string;
};
export type TError = {
  data: {
    statusCode: number;
    message: string;
    errorSources: TErrorSources[];
  };
};
