import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// 리스트 작성 페이지
export const addProjectList = createAsyncThunk(
  "ADD/addProjectList",
  async (formData) => {
    const response = await axios.post(
      `${SERVER_URL}/projects/project`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    return response.data;
  }
);

// 디테일 페이지 파일 가져오기
export const getProjectDetailFiles = createAsyncThunk(
  "GET/getProjectDetailFiles",
  async (projectId) => {
    return await axios
      .get(`${SERVER_URL}/projects/${projectId}`)
      .then((response) => response.data);
  }
);

const PostSlice = createSlice({
  name: "PostSlice",
  initialState: {
    list: {},
    files: [],
  },
  reducers: {},
  extraReducers: {
    [addProjectList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    },
    [getProjectDetailFiles.fulfilled]: (state, action) => {
      state.files = [action.payload.files[0]];
    },
  },
});

export default PostSlice.reducer;
