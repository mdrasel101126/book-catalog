/* import { bookCatalogApi } from "../../api/apiSlice";

const userApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/users/login-user",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery, useLoginUserMutation } =
  userApi; */

import { bookCatalogApi } from "../../api/apiSlice";

const userApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/users/login-user",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => `/users/profile`,
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useGetUserQuery } =
  userApi;
