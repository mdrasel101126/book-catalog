import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const bookCatalogApi = createApi({
  reducerPath: "bookCatalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["reviews"],
  endpoints: () => ({}),
});
