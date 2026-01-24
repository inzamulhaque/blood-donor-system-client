import { baseApi } from "../../api/baseApi";

const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyDonateDates: builder.query({
      query: () => ({
        url: "/donors/donate-date",
        method: "GET",
      }),
      providesTags: ["donor"],
    }),

    addDonateDate: builder.mutation({
      query: (payload) => ({
        url: "/donors/donate-date",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["donor", "user"],
    }),

    getDonateCount: builder.query({
      query: () => ({
        url: "/donors/donate-count",
        method: "GET",
      }),

      providesTags: ["donor", "user"],
    }),
  }),
});

export const {
  useGetMyDonateDatesQuery,
  useAddDonateDateMutation,
  useGetDonateCountQuery,
} = donorsApi;
