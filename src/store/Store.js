import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import GaYeonSlice from "../redux/modules/GaYeonSlice";
import PostSlice from "../redux/modules/PostSlice";

const store = configureStore({
  reducer: {
    Kmong: KmongSlice,
    Post: PostSlice,
    GaYeon: GaYeonSlice,
  },
});

export default store;
