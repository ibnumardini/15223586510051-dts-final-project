import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { REACT_APP_BASE_API_URL } = process.env;

export const cnbcNewsApi = createApi({
  reducerPath: "cnbcNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${REACT_APP_BASE_API_URL}/cnbc` }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => "/news",
    }),
    getLatestNews: builder.query({
      query: () => "/terbaru",
    }),
    getTechNews: builder.query({
      query: () => "/tech",
    }),
    getLifestyleNews: builder.query({
      query: () => "/lifestyle",
    }),
  }),
});

export const {
  useGetNewsQuery,
  useGetLatestNewsQuery,
  useGetTechNewsQuery,
  useGetLifestyleNewsQuery,
} = cnbcNewsApi;
