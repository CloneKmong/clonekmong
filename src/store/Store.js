import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import GaYeonSlice from "../redux/modules/GaYeonSlice";
import PostSlice from "../redux/modules/PostSlice";
import MyPageSlice from "../redux/modules/MyPageSlice"
import EditSlice from "../redux/modules/EditSlice"

const store = configureStore({
  reducer: {
    Kmong: KmongSlice,
    Post: PostSlice,
    MyPage : MyPageSlice,
    GaYeon: GaYeonSlice,
    Edit : EditSlice
  },
});

export default store;
