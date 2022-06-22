import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Detail from "./components/Detail";

import MyKmong from "./components/MyKmong";
import ProjectLists from "./components/ProjectLists";
import CreateProjectModal from "./components/CreateProjectModal";

/*
import package

styled-components
react-redux
axios
@reduxjs/toolkit
 */

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyKmong />} />
        <Route path="/list" element={<ProjectLists />} />
        <Route path="/list/:page" element={<ProjectLists />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail/:projectId" element={<Detail />} />
        <Route path="/create" element={<CreateProjectModal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
