import { apiSlice } from "src/redux/api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // getstore
    getStores: builder.query({
      query: () => `/api/store/show`,
      providesTags: ["Store"],
      keepUnusedDataFor: 600,
    }),
  }),
});

export const {
  useGetStoresQuery,
} = authApi;
