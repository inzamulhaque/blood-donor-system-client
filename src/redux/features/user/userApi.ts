import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),

      providesTags: ["user"],
    }),

    updateMyInfo: builder.mutation({
      query: (payload) => ({
        url: "/users/update",
        method: "PATCH",
        body: payload,
      }),

      invalidatesTags: ["user"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateMyInfoMutation } = userApi;
