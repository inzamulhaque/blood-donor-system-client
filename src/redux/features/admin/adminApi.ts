import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    findDonor: builder.query({
      query: (params) => ({
        url: "/admins/all-donor",
        method: "GET",
        params,
      }),

      providesTags: ["admin", "donor"],
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

      invalidatesTags: ["admin", "donor"],
    }),

    getDonorAndFinderCount: builder.query({
      query: () => ({
        url: "/admins/donor-and-finder-count",
        method: "GET",
      }),
    }),

    getDonorByBloodGroup: builder.query({
      query: () => ({
        url: "/admins/donor-count-by-blood-group",
        method: "GET",
      }),
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
} = adminApi;
