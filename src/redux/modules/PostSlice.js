import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// 리스트 작성 페이지
export const addProjectList = createAsyncThunk(
  "ADD/addProjectList",
  async (newList) => {
    const response = await axios.post(
      `${SERVER_URL}/projects/project`,
      newList,
      {
        headers: {
          //   "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    return response.data;
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
