import { bookCatalogApi } from "../../api/apiSlice";

const bookApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-book",
        method: "POST",
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => "/books",
    }),
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostBookMutation,
  useUpdateBookMutation,
} = bookApi;
