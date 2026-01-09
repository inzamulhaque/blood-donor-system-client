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

      providesTags: ["admin", "user"],
    }),

    userDetailsByTN: builder.query({
      query: (params) => ({
        url: `/users/user/${params}`,
        method: "GET",
      }),

      providesTags: ["admin", "user"],
    }),

    userBlockByTN: builder.mutation({
      query: (params) => ({
        url: `/admins/block-user/${params}`,
        method: "PATCH",
      }),

      invalidatesTags: ["admin", "user"],
    }),
  }),
});

export const {
  useFindDonorQuery,
  useAllUserQuery,
  useUserDetailsByTNQuery,
  useUserBlockByTNMutation,
} = adminApi;
