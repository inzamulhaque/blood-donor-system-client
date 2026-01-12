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

    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const { useSigninMutation, useChangePasswordMutation } = authApi;
