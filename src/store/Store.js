import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import PostSlice from "../redux/modules/PostSlice";
import MyPageSlice from "../redux/modules/MyPageSlice"
import EditSlice from "../redux/modules/EditSlice"

const store = configureStore({
  reducer: {
    Kmong: KmongSlice,
    Post: PostSlice,
    MyPage : MyPageSlice,
    Edit : EditSlice
  },
});

export default store;
