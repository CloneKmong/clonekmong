import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

// Main View 리스트 가져오기
export const getMyProjectList = createAsyncThunk( "GET/createAsyncThunk", async ( token ) => {
    console.log( token )
    return await axios.get(`${SERVER_URL}/mypage/projects`, 
    { headers: { Authorization: token } })
    .then( res=> res.data  )
    .catch( e => console.log( e.response ) );
});

export const editMyProjectList = createAsyncThunk( "EDIT/editMyProjectList", async ( args ) => {

});

export const deleteMyProjectList = createAsyncThunk( "DELETE/", async ( args ) => {
    // console.log( args );
    let result = false;
    await axios.delete(`${SERVER_URL}/projects/project/${args.id}`, 
    { 
      headers: { Authorization: args.token } 
    } )
    .then( res => {
        if( res.data.ok ){
            result = true;
        }
        console.log( res.data ) 
    });
    if( result ){
        return args.id;
    }
});
//   "ADD/addProjectList",
//   async (newList) => {
//     const response = await axios.post(
//       `${SERVER_URL}/projects/project`,
//       newList,
//       {
//         headers: {
//           //   "Content-Type": "multipart/form-data",
//           Authorization: localStorage.getItem("access_token"),
//         },
//       }
//     );
//     return response.data;
//   }
// );

const MyPageSlice = createSlice({
  name: "MyPageSlice",
  initialState: {
    list: [{}],
  },
  reducers: {},
  extraReducers: {
    [getMyProjectList.fulfilled]: (state, action) => {
        console.log( action.payload );
        state.list = [ ...action.payload ];
    },
    [editMyProjectList.fulfilled] : ( state, action ) => {

    },
    [deleteMyProjectList.fulfilled]: (state, action) => {
        console.log("?? ", action.payload );
        console.log( current( state.list ) );
        // if (action.payload) {
        //     const lists = current(state.list).filter((item, index) => {
        //       return item.id !== action.payload;
        //     });
        //     console.log("Delete fullfill");
        //     state.list = lists;
        // }
    }
  },
});

export default MyPageSlice.reducer;
