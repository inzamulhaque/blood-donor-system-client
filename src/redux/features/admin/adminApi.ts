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
  }),
});

export const { useFindDonorQuery, useAllUserQuery } = adminApi;
