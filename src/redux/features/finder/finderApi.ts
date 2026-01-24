import { baseApi } from "../../api/baseApi";

const finderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchDonor: builder.query({
      query: (params) => ({
        url: "/finders/find-donor",
        method: "GET",
        params,
      }),

      providesTags: ["donor"],
    }),

    becameDonor: builder.mutation({
      query: (payload) => ({
        url: "/finders/finder-to-donor",
        method: "PATCH",
        boldy: payload,
      }),

      invalidatesTags: ["finder", "user"],
    }),
  }),
});

export const { useSearchDonorQuery } = finderApi;
