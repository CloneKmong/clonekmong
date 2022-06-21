import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";

const store = configureStore({
    reducer:{
        Kmong: KmongSlice,
    },
});

export default store;