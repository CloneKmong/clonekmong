import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import PostSlice from "../redux/modules/PostSlice";
import MyPageSlice from "../redux/modules/MyPageSlice"

const store = configureStore({
  reducer: {
    Kmong: KmongSlice,
    Post: PostSlice,
    MyPage: MyPageSlice,
  },
});

export default store;
