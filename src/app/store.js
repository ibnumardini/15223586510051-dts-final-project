import { configureStore } from "@reduxjs/toolkit";
import { cnbcNewsApi } from "../services/news/cnbc";

export default configureStore({
  reducer: {
    [cnbcNewsApi.reducerPath]: cnbcNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cnbcNewsApi.middleware)
  },
});
