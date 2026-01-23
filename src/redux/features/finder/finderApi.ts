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
  }),
});

export const { useSearchDonorQuery } = finderApi;
