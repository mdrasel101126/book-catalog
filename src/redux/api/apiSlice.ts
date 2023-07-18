import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
export const bookCatalogApi = createApi({
  reducerPath: "bookCatalogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-backend-ten.vercel.app/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.accessToken;
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["reviews", "addBook", "deleteBook", "updateBook"],
  endpoints: () => ({}),
});
