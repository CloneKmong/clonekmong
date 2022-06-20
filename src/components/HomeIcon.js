import React from "react";
import styled from "styled-components";

const HomeIcon = () => {
  return (
    <MainContentProejctDiv>
      <MainContentProjectInfo>
        <MainProjectManagerWrap>
          <MainProjectManagerImg />
          <MainProjectManagerText>전담 매니저 배치</MainProjectManagerText>
          <MainProjectManagerText2>1:1</MainProjectManagerText2>
        </MainProjectManagerWrap>
        <MainProjectPoolWrap>
          <MainProjectProPoolImg />
          <MainProjectProPoolText>전문가 Pool</MainProjectProPoolText>
          <MainProjectProPoolText2>30만+</MainProjectProPoolText2>
        </MainProjectPoolWrap>
        <MainProjectRecommendWrap>
          <MainProjectRecommendImg />
          <MainProjectRecommendText>전문가 추천까지</MainProjectRecommendText>
          <MainProjectRecommendText2>평균 2일</MainProjectRecommendText2>
        </MainProjectRecommendWrap>
        <MainProjectCompleteWrap>
          <MainProjectCompleteImg />
          <MainProjectCompleteText>프로젝트 완수율</MainProjectCompleteText>
          <MainProjectCompleteText2>99%</MainProjectCompleteText2>
        </MainProjectCompleteWrap>
      </MainContentProjectInfo>
    </MainContentProejctDiv>
  );
};

export default HomeIcon;

const MainContentProejctDiv = styled.div`
  background-color: rgb(250, 250, 252);
  height: 200px;
`;
const MainContentProjectInfo = styled.div`
  margin: auto;
  width: 1200px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 전담 매니저 Wrap
const MainProjectManagerWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 전담 매니저 이미지
const MainProjectManagerImg = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fstatistics-section__img-01.png&w=320&q=75);
  background-position: center;
`;

// 전담 매니저 text 1
const MainProjectManagerText = styled.span`
  font-size: 13px;
  margin-bottom: 5px;
`;
// 전담 매니저 text 2
const MainProjectManagerText2 = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: rgb(75, 148, 250);
`;

// 전문가 Pool Wrap
const MainProjectPoolWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 전문가 Pool 이미지
const MainProjectProPoolImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fstatistics-section__img-02.png&w=320&q=75);
  background-position: center;
`;

// 전문가 Pool text1
const MainProjectProPoolText = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;
// 전문가 Pool text2
const MainProjectProPoolText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgb(75, 148, 250);
`;
// 전문가 추천 Wrap
const MainProjectRecommendWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// 전문가 추천 이미지
const MainProjectRecommendImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fstatistics-section__img-03.png&w=320&q=75);
  background-position: center;
`;
// 전문가 추천 text1
const MainProjectRecommendText = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;
// 전문가 추천 text2
const MainProjectRecommendText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgb(75, 148, 250);
`;
// 프로젝트 완수율 Wrap
const MainProjectCompleteWrap = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 프로젝트 완수율 이미지
const MainProjectCompleteImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 60px;
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fstatistics-section__img-04.png&w=320&q=75);
  background-position: center;
`;
// 프로젝트 완수율 text1
const MainProjectCompleteText = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;
// 프로젝트 완수율 text2
const MainProjectCompleteText2 = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgb(75, 148, 250);
`;
