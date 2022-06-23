import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Detail from "./components/Detail";

import MyKmong from "./components/MyKmong";
import ProjectLists from "./components/ProjectLists";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";
/*
import package

styled-components
react-redux
axios
@reduxjs/toolkit
 */

function App() {

  const location = useLocation();

  

  const [underBar, setUnderBar] = React.useState(true);

  React.useEffect (() => {
    if (location.pathname === '/') {
      setUnderBar(true);
    } else if (location.pathname === '/list') {
      setUnderBar(false);
    } else {
      setUnderBar(false);
    }
   },[location]);


  return (
    <div className="App">
      <Header underBar={underBar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyKmong />} />
        <Route path="/list" element={<ProjectLists />} />
        <Route path="/list/:page" element={<ProjectLists />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:projectId" element={<Detail />} />
        <Route path="/create" element={<CreateProject />} />
        <Route path="/edit/:project_id" element={<EditProject/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
