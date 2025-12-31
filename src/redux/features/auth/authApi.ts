import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (signinCredential) => ({
        url: "/auth/signin",
        method: "POST",
        body: signinCredential,
      }),
    }),
  }),
});

export const { useSigninMutation } = authApi;
