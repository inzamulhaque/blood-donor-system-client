import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findDonor: builder.query({
      query: (params) => ({
        url: "/admins/all-donor",
        method: "GET",
        params,
      }),

      providesTags: ["donor"],
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
        url: `/admins/block-user/${params.tn}`,
        method: "PATCH",
        body: { reason: params.reason },
      }),

      invalidatesTags: ["admin", "user"],
    }),

    userUnblockByTN: builder.mutation({
      query: (params) => ({
        url: `/admins/unblock-user/${params}`,
        method: "PATCH",
      }),

      invalidatesTags: ["admin", "user"],
    }),

    addNewDonor: builder.mutation({
      query: (body) => ({
        url: "/donors/add-donor",
        method: "POST",
        body,
      }),

      invalidatesTags: ["donor"],
    }),

    getDonorAndFinderCount: builder.query({
      query: () => ({
        url: "/admins/donor-and-finder-count",
        method: "GET",
      }),

      providesTags: ["donor", "finder"],
    }),

    getDonorByBloodGroup: builder.query({
      query: () => ({
        url: "/admins/donor-count-by-blood-group",
        method: "GET",
      }),

      providesTags: ["donor"],
    }),

    getAdminCount: builder.query({
      query: () => ({
        url: "/admins/admin-count",
        method: "GET",
      }),

      providesTags: ["admin", "user"],
    }),

    blockAdminByTN: builder.mutation({
      query: (params) => ({
        url: `/admins/block-admin/${params.tn}`,
        method: "PATCH",
        body: { reason: params.reason },
      }),

      invalidatesTags: ["admin", "user"],
    }),

    unblockAdminByTN: builder.mutation({
      query: (params) => ({
        url: `/admins/unblock-admin/${params}`,
        method: "PATCH",
      }),

      invalidatesTags: ["admin", "user"],
    }),

    getSingleDonor: builder.query({
      query: (params) => ({
        url: "/admins/get-single-donor",
        method: "GET",
        params,
      }),

      providesTags: ["admin", "user"],
    }),

    makeDonorAnAdmin: builder.mutation({
      query: (params) => ({
        url: "/admins/change-donor-to-admin",
        method: "PATCH",
        params,
      }),

      invalidatesTags: ["admin", "user"],
    }),

    removeAdmin: builder.mutation({
      query: (params) => ({
        url: `/admins/remove-admin/${params}`,
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
  useUserUnblockByTNMutation,
  useAddNewDonorMutation,
  useGetDonorAndFinderCountQuery,
  useGetDonorByBloodGroupQuery,
  useGetAdminCountQuery,
  useBlockAdminByTNMutation,
  useUnblockAdminByTNMutation,
  useGetSingleDonorQuery,
  useMakeDonorAnAdminMutation,
  useRemoveAdminMutation,
} = adminApi;
