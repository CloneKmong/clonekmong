import { configureStore } from "@reduxjs/toolkit";
import KmongSlice from "../redux/modules/KmongSlice";
import GaYeonSlice from "../redux/modules/GaYeonSlice";

const store = configureStore({
    reducer:{
        Kmong: KmongSlice,
        GaYeon: GaYeonSlice,
    },
});

export default store;