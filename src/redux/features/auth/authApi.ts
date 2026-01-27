import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (signinCredential) => ({
        url: "/auth/signin",
        method: "POST",
        body: signinCredential,
      }),
      invalidatesTags: ["user"],
    }),

    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/change-password",
        method: "PATCH",
        body: payload,
      }),
    }),

    signOut: builder.mutation({
      query: () => ({
        url: "/auth/signout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),

    veriFyEmail: builder.mutation({
      query: (payload) => ({
        url: `/auth/verify-otp/${payload.trackingNumber}`,
        method: "POST",
        body: { otp: payload.otp },
      }),
    }),

    resendOtp: builder.mutation({
      query: (TN) => ({
        url: `/auth/resend-otp/${TN}`,
        method: "POST",
      }),
    }),

    forgotPassword: builder.mutation({
      query: (payload) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: payload,
      }),
    }),

    resetPassword: builder.mutation({
      query: (payload) => ({
        url: `/auth/reset-password/${payload.TN}`,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSigninMutation,
  useChangePasswordMutation,
  useSignOutMutation,
  useVeriFyEmailMutation,
  useResendOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
