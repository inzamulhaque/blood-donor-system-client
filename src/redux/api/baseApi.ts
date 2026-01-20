import {
  DefinitionType,
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
} from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { toast } from "sonner";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://blood-donor-system-server.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    toast.error(result?.error?.data?.message, {
      duration: 7000,
      position: "top-right",
    });
  }

  if (result?.error?.status === 403) {
    toast.error(result?.error?.data?.message, {
      duration: 7000,
      position: "top-right",
    });
  }

  if (result?.error?.status === 401) {
    const res = await fetch(
      "https://blood-donor-system-server.vercel.app/api/v1/auth/refresh-token",
      {
        method: "POST",
        credentials: "include",
      },
    );

    const data = await res.json();

    if (data?.data?.token) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user,
          token: data?.data?.token,
        }),
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["admin", "user", "donor", "finder"],
  endpoints: () => ({}),
});
