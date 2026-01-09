import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findDonor: builder.query({
      query: (params) => ({
        url: "/admins/all-donor",
        method: "GET",
        params,
      }),
    }),

    allUser: builder.query({
      query: (params) => ({
        url: "/admins/all-users",
        method: "GET",
        params,
      }),
    }),

    userDetailsByTN: builder.query({
      query: (params) => ({
        url: `/users/user/${params}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFindDonorQuery, useAllUserQuery, useUserDetailsByTNQuery } =
  adminApi;
