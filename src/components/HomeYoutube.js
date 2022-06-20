import React from "react";
import styled from "styled-components";

const HomeYoutube = () => {
  return (
    <HomeYoutubeWrap>
      <HomeYoutubeContentWrap>
        <HomeYoutubeContentText1>
          <HomeYoutubeContentTitle>프로젝트 성공 사례</HomeYoutubeContentTitle>
          <HomeYoutubeContentBody1>
            크몽 전문가와 협업하여
            <br />
            한정된 시간에도 좋은 성과를 낼 수 있습니다.
          </HomeYoutubeContentBody1>
          <HomeYoutubeContentBody2>
            전담 매니저님의 전문과 추천과
            <br />
            1:1 밀착 케어 덕분에 시드 투자 유치와
            <br />
            창업경진대회 수상이라는 쾌거를 이루었습니다.
          </HomeYoutubeContentBody2>
          <HomeYoutubeContentFooter1>
            웹 개발 & 모션그래픽 제작 의뢰
          </HomeYoutubeContentFooter1>
          <HomeYoutubeContentFooter2>
            데이터비 오승현대표님
          </HomeYoutubeContentFooter2>
        </HomeYoutubeContentText1>
        <div
          style={{
            marginTop: "15px",
            borderRadius: "25px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <iframe
            width="692"
            height="390"
            src="https://www.youtube.com/embed/8vomiFIf7ZU?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </HomeYoutubeContentWrap>
    </HomeYoutubeWrap>
  );
};

const HomeYoutubeWrap = styled.div`
  height: 550px;
  background-color: #f2f3f7;
`;

const HomeYoutubeContentWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  padding: 80px 16px;
`;

const HomeYoutubeContentTitle = styled.h3`
  font-size: 32px;
  color: #303441;
  font-weight: bold;
`;

const HomeYoutubeContentBody1 = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  margin: 32px 0 24px 0;
  color: #303441;
`;

const HomeYoutubeContentBody2 = styled.p`
  font-size: 15px;
  color: #555969;
  margin: 0 0 20px 0;
  line-height: normal;
`;

const HomeYoutubeContentFooter1 = styled.p`
  font-size: 13px;
  margin: 0 0 4px 0;
  line-height: normal;
  color: #9a9ba7;
`;

const HomeYoutubeContentFooter2 = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
  line-height: normal;
  color: #303441;
`;

const HomeYoutubeContentText1 = styled.div`
  padding: 40px 0;
  margin-right: 40px;
  /* display: flex; */
`;

export default HomeYoutube;
