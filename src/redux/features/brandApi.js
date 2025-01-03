import { apiSlice } from "src/redux/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // getBrands
    getBrands: builder.query({
      query: () => `/api/brand/show`,
      providesTags: ["Brand"],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useGetBrandsQuery,
} = authApi;
