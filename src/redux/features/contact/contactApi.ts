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

    getSingleMessage: builder.query({
      query: (id) => ({
        url: `/contact/message/${id}`,
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { useGetAllMessagesQuery, useGetSingleMessageQuery } = contactApi;
