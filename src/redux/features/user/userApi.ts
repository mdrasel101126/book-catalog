import { bookCatalogApi } from "../../api/apiSlice";

const userApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        method: "POST",
        data: data,
      }),
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery } = userApi;
