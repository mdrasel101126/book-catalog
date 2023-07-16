import { bookCatalogApi } from "../../api/apiSlice";

const reviewApi = bookCatalogApi.injectEndpoints({
  endpoints: (builder) => ({
    postReview: builder.mutation({
      query: (body) => ({
        url: "reviews/create-review",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { usePostReviewMutation } = reviewApi;
