import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import PostSlice from "../redux/modules/PostSlice";

const store = configureStore({
  reducer: {
    Kmong: KmongSlice,
    Post: PostSlice,
  },
});

export default store;
