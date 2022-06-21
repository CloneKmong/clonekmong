import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// Main View 리스트 가져오기


export const getProjectDetail = createAsyncThunk ("get/getProjectDetail", async ( projectId ) => {
  return await axios.get( `${SERVER_URL}/projects/${projectId}`)
  .then( response => response.data )
});

const GaYeonSlice = createSlice({
    name : "GaYeonSlice",
    initialState:{
    },
    reducers:{

    },
    extraReducers:{
        [ getProjectDetail.fulfilled ] : ( state, action ) => {
            state.object = action.payload ;
        }
    }
});

export default GaYeonSlice.reducer;