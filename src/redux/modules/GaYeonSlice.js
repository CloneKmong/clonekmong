import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// Main View 리스트 가져오기


export const getProjectDetail = createAsyncThunk ("get/getProjectDetail", async ( projectId ) => {
  return await axios.get( `${SERVER_URL}/projects/${projectId}`)
  .then( response => response.data )
});

export const getProejectListPage = createAsyncThunk ("get/getProejectListPage", async () => {
  return await axios.get( `${SERVER_URL}/projects`, {
    params:{
      page: Number(1),
      size: Number(5),
      sortBy : "createdAt"
    },
  })
  .then( response => response.data );
});

export const getProejectListClickPage = createAsyncThunk ("get/getProejectListClickPage", async ( pageNumber ) => {
  return await axios.get( `${SERVER_URL}/projects`, {
    params:{
      page: Number(pageNumber),
      size: Number(5),
      sortBy : "createdAt"
    },
  })
  .then( response => response.data )
  .catch( e => console.log( e ) );
});




const GaYeonSlice = createSlice({
    name : "GaYeonSlice",
    initialState:{
      object:{},
      firstPage:[],
    },
    reducers:{

    },
    extraReducers:{
        [ getProjectDetail.fulfilled ] : ( state, action ) => {
            state.object = action.payload ;
        },
        [ getProejectListPage.fulfilled ] : ( state, action ) => {
          state.firstPage = [...action.payload] ;
        },
        [ getProejectListClickPage.fulfilled ] : ( state, action ) => {
          state.firstPage = [...action.payload] ;
        }
    }
});

export default GaYeonSlice.reducer;