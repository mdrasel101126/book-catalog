import { bookCatalogApi } from "../../api/apiSlice";

const bookApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;
