import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import HomeImg from "./HomeImg";
import HomeIcon from "./HomeIcon";
import HomeRegistedList from "./HomeRegistedList";
import HomeReview from "./HomeReview";
import HomeYoutube from "./HomeYoutube";
import HomeAd from "./HomeAd";
import HomeAd2 from "./HomeAd2";
import HomeAdBottom from "./HomeAdBottom";
import Footer from "./Footer";

const Home = () => {

  return (
    <MainWrap>
      <HomeImg/>
      <HomeIcon/>
      <MainBlank />
      <HomeRegistedList/>
      <HomeReview/>
      <HomeYoutube/>
      <HomeAd/>
      <HomeAd2/>
      {/* <HomeAdBottom/> */}
      {/* <Footer/> */}
    </MainWrap>
  );
};
// 전체 Wrap
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

// 사진 아래 이미지 배치 end

// 중간 공백
const MainBlank = styled.div`
  height: 40px;
`;

// 등록된 프로젝트 start


export default Home;
