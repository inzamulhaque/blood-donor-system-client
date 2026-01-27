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

    donorSignup: builder.mutation({
      query: (payload) => ({
        url: "/users/new-donor",
        method: "POST",
        body: payload,
      }),

      invalidatesTags: ["user", "donor"],
    }),

    finderSignup: builder.mutation({
      query: (payload) => ({
        url: "/users/new-finder",
        method: "POST",
        body: payload,
      }),

      invalidatesTags: ["user", "finder"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateMyInfoMutation,
  useDonorSignupMutation,
  useFinderSignupMutation,
} = userApi;
