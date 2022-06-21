import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// Main View 리스트 가져오기
export const getMainProjectList = createAsyncThunk( "GET/getMainProjectList", async ( args ) =>{
    console.log("Main list");
    return await axios.get(`${SERVER_URL}/`)
    .then( res => res.data )
    .catch( e => console.log( e ) );
});

const KmongSlice = createSlice({
    name : "KmongSlice",
    initialState:{
        list: [{}],
    },
    reducers:{

    },
    extraReducers:{
        [ getMainProjectList.fulfilled ] : ( state, action ) => {
            console.log( action.payload );
            state.list = [ ...action.payload ];
        }
    }
});

export default KmongSlice.reducer;