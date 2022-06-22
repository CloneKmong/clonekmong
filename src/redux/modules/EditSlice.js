import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SERVER_URL = "http://13.209.22.194";

export const getEditProjectList = createAsyncThunk(
  "GET/getEditProjectList",
  async (args) => {
    ///modal/{projectId}
    return await axios.get(`${SERVER_URL}/modal/${args.project_id}`, {
      headers: { Authorization: args.token },
    }).then( res => res.data )
    .catch( e => console.log( e ));
  }
);


const RequiredFunction = ["갤러리", "게시판", "일정 관리", "SNS 연동"];
const userRelated = ["회원가입 및 정보관리", "SNS 간편 로그인", "즐겨찾기", "메세지"];
const Commerce = ["장바구니", "배송 관리", "PG사 연동", "해외결제"];
const Sites = ["다국어 지원", "관리자 페이지", "보안", "GA 설치"];


export const modifyEditProjectList = createAsyncThunk(
  "PUT/modifyEditProjectList",
  async (args) => {
    console.log(args);
    await axios
      .put(`${SERVER_URL}/projects/project/${args.id}`, args.Data, {
        headers: { Authorization: args.token },
      })
      .then((res) => {
        console.log("Edit ", res.data);
      })
      .catch((e) => console.log(e));
      return args.Data;
  }
);

const EditSlice = createSlice({
  name: "PostSlice",
  initialState: {
    list: [{
      bigCategory:"",
      budget:"",
      commerceRelatedFunction:"",
      currentStatus:"",
      description:"",
      dueDateForApplication:"",
      progressMethod:"",
      projectScope:"",
      reactable:"",
      requiredFunction:"",
      siteEnvironment:"",
      smallCategory:"",
      solutionInUse:"",
      taxInvoice: false,
      title:"",
      userRelatedFunction:"",
      volunteerValidDate:"",
      workingPeriod:"",
    }],
  },
  reducers: {},
  extraReducers: {
    [getEditProjectList.fulfilled]: (state, action) => {
      console.log( action.payload );
      const Valuelist = [ { ...action.payload.responseDtoMap } ];
      const keylist = Object.keys ( Valuelist[0] );

      let resultRequired = keylist.filter( x1 => RequiredFunction.some(x2=> x1 === x2 ) )[0];
      let resultCommerce = keylist.filter( x1 => Commerce.some(x2=> x1 === x2 ) )[0];
      let resultSites = keylist.filter( x1 => Sites.some(x2=> x1 === x2 ) )[0];
      let resultUserRelated = keylist.filter( x1 => userRelated.some(x2=> x1 === x2 ) )[0];
      
      state.list[0].bigCategory = action.payload.bigCategory;
      state.list[0].smallCategory = action.payload.smallCategory;
      state.list[0].title = action.payload.title;
      state.list[0].progressMethod = action.payload.progressMethod;
      state.list[0].description = action.payload.description;
      state.list[0].budget = action.payload.budget;
      state.list[0].dueDateForApplication = action.payload.dueDateForApplication;
      state.list[0].volunteerValidDate = action.payload.volunteerValidDate;
      state.list[0].taxInvoice = action.payload.taxInvoice;
      state.list[0].workingPeriod = action.payload.workingPeriod;
      state.list[0].solutionInUse = action.payload.solutionInUse;
      state.list[0].currentStatus = action.payload.currentStatus;
      state.list[0].projectScope = action.payload.projectScope;
      state.list[0].reactable = action.payload.reactable;
      state.list[0].requiredFunction = resultRequired;
      state.list[0].siteEnvironment = resultSites;
      state.list[0].userRelatedFunction = resultUserRelated;
      state.list[0].commerceRelatedFunction = resultCommerce;
      console.log( current(state.list) );
    },
    [modifyEditProjectList.fulfilled]: ( state, action ) => {
        console.log("fullfill");
        console.log( current ( state.list ) )
        state.list = { ...state.list, ...action.payload };
        console.log( ( state.list ) )
    }
  },
});

export default EditSlice.reducer;
