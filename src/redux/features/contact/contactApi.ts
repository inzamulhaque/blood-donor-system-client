import { baseApi } from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMessages: builder.query({
      query: (params) => ({
        url: "contact/all-messages",
        method: "GET",
        params,
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { useGetAllMessagesQuery } = contactApi;
