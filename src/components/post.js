import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serverUrl = "http://13.209.22.194";

export const addList = createAsyncThunk("add/addList", async (newList) => {
  //   const res = await axios.post(`${serverUrl}`, newList);
  return res.data;
});

export const projectReducer = createSlice({
  name: "projectList",
  initialState: {},
  reducers: {},
  extraReducers: {
    [addList.fulfilled]: (state, { payload }) => [...state, payload],
  },
});
