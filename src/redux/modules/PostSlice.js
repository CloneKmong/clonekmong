import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// Main View 리스트 가져오기
export const addProjectList = createAsyncThunk(
  "ADD/addProjectList",
  async (formData) => {
    return await axios
      .post(`${SERVER_URL}/projects/project`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("access_token"),
        },
      })
      .then((res) => console.log("res"))
      .catch((e) => console.log("error"));
  }
);

const PostSlice = createSlice({
  name: "PostSlice",
  initialState: {
    list: [{}],
  },
  reducers: {},
  extraReducers: {
    [addProjectList.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [...action.payload];
    },
  },
});

export default PostSlice.reducer;
