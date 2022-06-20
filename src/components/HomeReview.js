import React from "react";
import styled from "styled-components";

const HomeReview = () => {
  return (
    <>
      <MainProReviewWrap>
        <MainProReviewContentWrap>
          <h1>어떤 전문가들을 만날 수 있나요?</h1>
          <p>
            크몽 엔터프라이즈에 의뢰하세요, 각 분야 최고의 전문가들을
            찾아드려요!
          </p>
          <MainProPreviewCardWrap>
            <MainPreviewCardPortfolio>
              {/* card start */}
              <MainPreivewCardMaster>
                <MainProPreviewUserInfo>
                  <MainProWebImage />
                  <MainProWebTitle>
                    <MainProUserInfoText1>
                      웹 사이트 개발 전문가
                    </MainProUserInfoText1>
                    <MainProUserInfoText2>그로***</MainProUserInfoText2>
                  </MainProWebTitle>
                </MainProPreviewUserInfo>
                <MainProUserTagWrap>
                  <MainProUserTag>#full stack 개발</MainProUserTag>
                  <MainProUserTag>#기획</MainProUserTag>
                  <MainProUserTag>#디자인</MainProUserTag>
                </MainProUserTagWrap>
                <MainProPreviewProject>
                  <MainProPreviewProjectTitle>
                    작업한 포트폴리오
                  </MainProPreviewProjectTitle>
                  <MainProPreviewProjectLists>
                    인천공항・빅히트・윌라・짐카
                  </MainProPreviewProjectLists>
                </MainProPreviewProject>
              </MainPreivewCardMaster>
              <MainProPreviewCardReview>
                <MainClientReviewWrap>
                  <MainClientStarRatingWrap>
                    <div>⭐⭐⭐⭐⭐</div>
                    <MainClientStarPoints>5.0</MainClientStarPoints>
                  </MainClientStarRatingWrap>
                  <div>클라이언트 후기</div>
                </MainClientReviewWrap>
                <MainClientComment>
                  <span>앱 개발 의뢰했는데 아주 만족스러웠어요</span>
                  <br />
                  <span>
                    응대도 친절하시고 프로잭트 관리도 깔끔하게 해주셨습니다.
                  </span>
                  <br />
                  <span>다음에도 믿고 의뢰 하겠습니다!</span>
                  <br />
                </MainClientComment>
              </MainProPreviewCardReview>
              {/* card end */}
            </MainPreviewCardPortfolio>
            <MainPreviewCardPortfolio>
              {/* card start */}
              <MainPreivewCardMaster>
                <MainProPreviewUserInfo>
                  <MainProMobileImage />
                  <MainProWebTitle>
                    <MainProUserInfoText1>
                      웹・모바일 디자인 전문가
                    </MainProUserInfoText1>
                    <MainProUserInfoText2>Eg***</MainProUserInfoText2>
                  </MainProWebTitle>
                </MainProPreviewUserInfo>
                <MainProUserTagWrap>
                  <MainProUserTag>#브랜딩 전문가</MainProUserTag>
                  <MainProUserTag>#에이전시</MainProUserTag>
                </MainProUserTagWrap>
                <MainProPreviewProject>
                  <MainProPreviewProjectTitle>
                    작업한 포트폴리오
                  </MainProPreviewProjectTitle>
                  <MainProPreviewProjectLists>
                    삼성전자・교육부・제로페이・LS산전
                  </MainProPreviewProjectLists>
                </MainProPreviewProject>
              </MainPreivewCardMaster>
              <MainProPreviewCardReview>
                <MainClientReviewWrap>
                  <MainClientStarRatingWrap>
                    <div>⭐⭐⭐⭐⭐</div>
                    <MainClientStarPoints>5.0</MainClientStarPoints>
                  </MainClientStarRatingWrap>
                  <div>클라이언트 후기</div>
                </MainClientReviewWrap>
                <MainClientComment>
                  <span>2번째 의뢰인데 최고의 디자인 퀄리티와 빠른 속도,</span>
                  <br />
                  <span>그리고 기획까지 전문적으로 손봐주셔서</span>
                  <br />
                  <span>좋은 결과물이 나온거같습니다.</span>
                  <br />
                </MainClientComment>
              </MainProPreviewCardReview>
              {/* card end */}
            </MainPreviewCardPortfolio>
            <MainPreviewCardPortfolio>
              {/* card start */}
              <MainPreivewCardMaster>
                <MainProPreviewUserInfo>
                  <MainProMovieImage />
                  <MainProWebTitle>
                    <MainProUserInfoText1>
                      영상 제작 전문가
                    </MainProUserInfoText1>
                    <MainProUserInfoText2>공일***</MainProUserInfoText2>
                  </MainProWebTitle>
                </MainProPreviewUserInfo>
                <MainProUserTagWrap>
                  <MainProUserTag>#영상 기획</MainProUserTag>
                  <MainProUserTag>#다양한 포트폴리오</MainProUserTag>
                </MainProUserTagWrap>
                <MainProPreviewProject>
                  <MainProPreviewProjectTitle>
                    작업한 포트폴리오
                  </MainProPreviewProjectTitle>
                  <MainProPreviewProjectLists>
                    국립중앙박물관・오뚜기・로앤컴퍼니
                  </MainProPreviewProjectLists>
                </MainProPreviewProject>
              </MainPreivewCardMaster>
              <MainProPreviewCardReview>
                <MainClientReviewWrap>
                  <MainClientStarRatingWrap>
                    <div>⭐⭐⭐⭐⭐</div>
                    <MainClientStarPoints>5.0</MainClientStarPoints>
                  </MainClientStarRatingWrap>
                  <div>클라이언트 후기</div>
                </MainClientReviewWrap>
                <MainClientComment>
                  <span>소구 포인트부터 파악하시고</span>
                  <br />
                  <span>
                    저희의 고민을 해결해 주셔서 다른 업체들과 달랐습니다.
                  </span>
                  <br />
                  <span>별 5개가 아니라 10개 드리고 싶은 심정입니다.</span>
                  <br />
                </MainClientComment>
              </MainProPreviewCardReview>
              {/* card end */}
            </MainPreviewCardPortfolio>
          </MainProPreviewCardWrap>
        </MainProReviewContentWrap>
      </MainProReviewWrap>
    </>
  );
};

export default HomeReview;

const MainProReviewWrap = styled.div`
  padding: 80px 0px;
  height: 540px;
  background-color: #4b94fa; //rgb(75, 148, 250);
`;

const MainProReviewContentWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  & h1 {
    color: white;
  }
  & p {
    color: white;
    font-weight: 400;
  }
`;

const MainProPreviewCardWrap = styled.div`
  display: flex;
  margin-top: 40px;
  column-gap: 15px;
  /* background-color: gray; */
`;

const MainPreviewCardPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  gap: 15px;
`;

const MainPreivewCardMaster = styled.div`
  /* width: 100%; */
  height: 170px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
`;

const MainProWebImage = styled.div`
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fprofessional-section__web-dev%403x.png&w=320&q=100);
`;

const MainProMobileImage = styled.div`
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fprofessional-section__web-design%403x.png&w=320&q=100);
`;

const MainProMovieImage = styled.div`
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fprofessional-section__video%403x.png&w=320&q=100);
`;

const MainProWebTitle = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 2px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainProUserInfoText1 = styled.span`
  align-self: flex-start;
  font-weight: 600;
`;

const MainProUserInfoText2 = styled.span`
  align-self: flex-start;
  margin-top: 2px;
  font-size: 14px;
  color: #727585;
`;

const MainProUserTagWrap = styled.div`
  display: flex;
  margin: 20px 0;
  /* margin: 12px 14px 0; */
  column-gap: 4px;
`;

const MainProUserTag = styled.div`
  font-size: 12px;
  color: #727585;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #f2f3f7;
`;

const MainProPreviewCardReview = styled.div`
  /* width: 100%; */
  height: 100px;
  border-radius: 8px;
  padding: 20px;
  background-color: #6ab0ff;
`;

const MainProPreviewUserInfo = styled.div`
  display: flex;
`;

const MainProPreviewProject = styled.div`
  display: flex;
  padding: 12px;
  border-radius: 4px;
  background-color: #f7fbff;
  flex-direction: column;
`;

const MainProPreviewProjectTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #4b94fa;
  align-self: flex-start;
`;

const MainProPreviewProjectLists = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #303441;
  align-self: flex-start;
  margin-top: 5px;
`;

const MainClientReviewWrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const MainClientStarRatingWrap = styled.div`
  display: flex;
`;

const MainClientStarPoints = styled.div`
  margin-left: 5px;
`;

const MainClientComment = styled.p`
  font-size: 13px;
  color: white;
  margin-top: 20px;
  & span {
    float: left;
    font-weight: 600;
  }
`;
