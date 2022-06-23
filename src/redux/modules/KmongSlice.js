import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
const SERVER_URL = "http://13.209.22.194";
// Main View 리스트 가져오기
export const getMainProjectList = createAsyncThunk(
  "GET/getMainProjectList",
  async (args) => {
    console.log("Main list");
    return await axios
      .get(`${SERVER_URL}/`)
      .then((res) => res.data )
      .catch((e) => console.log(e));
  }
);
// 프로젝트 타이틀을 눌렀을 때 디테일 페이지 정보 받아오기
export const getProjectDetail = createAsyncThunk(
  "get/getProjectDetail",
  async (projectId) => {
    return await axios
      .get(`${SERVER_URL}/projects/${projectId}`)
      .then((response) => response.data);
  }
);
// 프로젝트 리스트 페이지로 갔을 때 1 페이지 정보 받아오기
export const getProejectListPage = createAsyncThunk(
  "get/getProejectListPage",
  async () => {
    return await axios
      .get(`${SERVER_URL}/projects`, {
        params: {
          page: Number(1),
          size: Number(5),
          sortBy: "createdAt",
        },
      })
      .then((response) => response.data);
  }
);
// 프로젝트 리스트에서 페이지 누를 때마다 변경
export const getProejectListClickPage = createAsyncThunk(
  "get/getProejectListClickPage",
  async (pageNumber) => {
    return await axios
      .get(`${SERVER_URL}/projects`, {
        params: {
          page: Number(pageNumber),
          size: Number(5),
          sortBy: "createdAt",
        },
      })
      .then((response) => response.data)
      .catch((e) => console.log(e));
  }
);
const KmongSlice = createSlice({
  name: "KmongSlice",
  initialState: {
    list: [{}],
    length: 0,
    object: {},
    firstPage: [],
    fileUrl: {},
    fileName: [],
  },
  reducers: {},
  extraReducers: {
    [getMainProjectList.fulfilled]: (state, action) => {
      console.log( action.payload );
      state.list = [...action.payload];
    },
    [getMainProjectList.rejected]: (state, action) => {
      console.log("Reject");
    },
    [getProjectDetail.fulfilled]: (state, action) => {
      state.object = action.payload;
      state.fileUrl = action.payload.files[0].fileUrl;
      state.fileName = action.payload.files[0].fileName;
    },
    [getProejectListPage.fulfilled]: (state, action) => {
      state.firstPage = [...action.payload];
      state.length = action.payload[0].total_length;
    },
    [getProejectListClickPage.fulfilled]: (state, action) => {
      state.firstPage = [...action.payload];
    },
  },
});
export default KmongSlice.reducer;