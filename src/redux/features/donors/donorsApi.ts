import { baseApi } from "../../api/baseApi";

const donorsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyDonateDates: builder.query({
      query: () => ({
        url: "/donors/donate-date",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMyDonateDatesQuery } = donorsApi;
