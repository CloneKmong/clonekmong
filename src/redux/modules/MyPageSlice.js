import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// MyPage 리스트 조회
export const getMyProjectList = createAsyncThunk( "GET/createAsyncThunk", async ( token ) => {
    return await axios.get(`${SERVER_URL}/mypage/projects`, 
    { headers: { Authorization: token } })
    .then( res=>  res.data )
    .catch( e => console.log( e.response ) );
});

export const editMyProjectList = createAsyncThunk( "EDIT/editMyProjectList", async ( args ) => {
  
});
// MyPage 리스트 삭제
export const deleteMyProjectList = createAsyncThunk( "DELETE/", async ( args ) => {
    let result = false;
    console.log( args );
    await axios.delete(`${SERVER_URL}/projects/project/${args.id}`, 
    { 
      headers: { Authorization: args.token } 
    } )
    .then( res => {
        // console.log( res.data );
        if( res.data === "삭제에 성공하였습니다." ){
            result = true;
        }
        
    });
    if( result ){
        return args.id;
    }
});


const MyPageSlice = createSlice({
  name: "MyPageSlice",
  initialState: {
    list: [{}],
  },
  reducers: {},
  extraReducers: {
    [getMyProjectList.fulfilled]: (state, action) => {
        console.log("mypage get");
        console.log( action.payload );
        // if( state.list.length === 1 ){
        state.list = [ ...action.payload ];
      // }
    },
    [editMyProjectList.fulfilled] : ( state, action ) => {

    },
    [deleteMyProjectList.fulfilled]: (state, action) => {
        if( action.payload ){
            const lists = current(state.list).filter((item, index) => {
              return item.project_id !== action.payload;
            });
            state.list = lists;
        }
    }
  },
});

export default MyPageSlice.reducer;
