import React from "react";
import styled from "styled-components";

const HomeAd2 = () => {
  return (
    <HomeAd2Wrap>
      <HomeAd2ContentWrap>
        <HomeAd2ContentTitle>프로젝트 의뢰 진행 프로세스</HomeAd2ContentTitle>
        <HomeAd2ContentP>
          의뢰에서 계약, 결제까지 평균 6일이면 해결 가능합니다
        </HomeAd2ContentP>
        <HomeAd2CradWrap>
          <HomeAd2ContentCardWrap>
            <HomeAd2ContentCard>
              <HomeAd2ContentCardTitleWrap>
                <HomeAd2ContentCardTitle>
                  <HomeAd2ContentCardNumber>01</HomeAd2ContentCardNumber>
                  <HomeAd2ContentCardName>프로젝트 요청</HomeAd2ContentCardName>
                </HomeAd2ContentCardTitle>
                <HomeAd2Content2>
                  위뢰 내용을 상세하게 입력해주세요!
                </HomeAd2Content2>
                <HomeAd2ContentCardImg1 />
              </HomeAd2ContentCardTitleWrap>
            </HomeAd2ContentCard>
          </HomeAd2ContentCardWrap>
          <HomeAd2ContentCardWrap>
            <HomeAd2ContentCard>
              <HomeAd2ContentCardTitleWrap>
                <HomeAd2ContentCardTitle>
                  <HomeAd2ContentCardNumber>02</HomeAd2ContentCardNumber>
                  <HomeAd2ContentCardName>
                    전담 매니저 배정
                  </HomeAd2ContentCardName>
                </HomeAd2ContentCardTitle>
                <HomeAd2Content2>
                  프로젝트 유형・규모 기준 검토 후<br />
                  전담 매니저를 배정 → 유선 상담을
                  <br />
                  진행합니다.
                </HomeAd2Content2>
                <HomeAd2Content3>
                프로젝트 유형에 따라 전담 매니저 배정 없이,
                <br/>
                크몽 전문가의 제안으로만 거래가 진행될 수 있습니다.
                </HomeAd2Content3>
                <HomeAd2ContentCardImg2 />
              </HomeAd2ContentCardTitleWrap>
            </HomeAd2ContentCard>
          </HomeAd2ContentCardWrap>
          <HomeAd2ContentCardWrap>
            <HomeAd2ContentCard>
              <HomeAd2ContentCardTitleWrap>
                <HomeAd2ContentCardTitle>
                  <HomeAd2ContentCardNumber>03</HomeAd2ContentCardNumber>
                  <HomeAd2ContentCardName>전문가 매칭</HomeAd2ContentCardName>
                </HomeAd2ContentCardTitle>
                <HomeAd2Content2>
                  전담 매니저가 전문자를 추천해드리고
                  <br/>
                  미팅을 조율해드려요!
                </HomeAd2Content2>
                <HomeAd2ContentCardImg3 />
              </HomeAd2ContentCardTitleWrap>
            </HomeAd2ContentCard>
          </HomeAd2ContentCardWrap>
          <HomeAd2ContentCardWrap>
            <HomeAd2ContentCard>
              <HomeAd2ContentCardTitleWrap>
                <HomeAd2ContentCardTitle>
                  <HomeAd2ContentCardNumber>04</HomeAd2ContentCardNumber>
                  <HomeAd2ContentCardName>계약 및 결제</HomeAd2ContentCardName>
                </HomeAd2ContentCardTitle>
                <HomeAd2Content2>
                전담 매니저가 계약 방식 제안부터
                  <br/>
                  프로젝트 진행 및 관리까지 도와드려요!
                </HomeAd2Content2>
                <HomeAd2ContentCardImg4 />
              </HomeAd2ContentCardTitleWrap>
            </HomeAd2ContentCard>
          </HomeAd2ContentCardWrap>
        </HomeAd2CradWrap>
      </HomeAd2ContentWrap>
      {/* <FooterLine/> */}
    </HomeAd2Wrap>
  );
};

const HomeAd2Wrap = styled.div`
  height: 659px;
  padding-top: 80px;
  /* padding-bottom: 0px; */
`;

const HomeAd2ContentWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 16px;
  margin-bottom: 15px;
`;

const HomeAd2ContentTitle = styled.h3`
  font-size: 32px;
  color: #303441;
  font-weight: bold;
  margin: 0;
`;

const HomeAd2ContentP = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
`;

const HomeAd2CradWrap = styled.div`
  display: flex;
  column-gap: 20px;
`;

const HomeAd2ContentCardWrap = styled.div`
  display: flex;
  column-gap: 20px;
  margin: 40px 0 0 0;
`;

const HomeAd2ContentCard = styled.div`
  width: 277px;
  height: 430px;
  background-color: rgb(242, 243, 247);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
`;

const HomeAd2ContentCardTitleWrap = styled.div`
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
`;

const HomeAd2ContentCardTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 15px 15px;
`;

const HomeAd2ContentCardNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background-color: #4b94fa;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0 12px 0 0;
  line-height: normal;
  padding: 0 0 2px 0;
  align-items: center;
`;

const HomeAd2ContentCardName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #303441;
  margin: 0;
`;

const HomeAd2ContentCardImg1 = styled.div`
  margin-top: 79px;
  /* border-radius: 8px;
 */
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px 8px;
  width: 277px;
  height: 222px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fproject-request-section__process-01-img%403x.png&w=320&q=100);
  background-size: cover;
  background-repeat: no-repeat;
`;

const HomeAd2Content2 = styled.p`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  color: #303441;
  text-align: left;
  margin-left: 15px;
`;

const HomeAd2Content3 = styled.p`
    font-size: 8px;
    text-align: left;
    margin: 0px 0 0 15px;
    color: #555969;
`;

const HomeAd2ContentCardImg2 = styled.div`
  margin-top: 10px;
  /* border-radius: 8px;
 */
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px 8px;
  width: 277px;
  height: 222px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fproject-request-section__process-02-img%403x.png&w=320&q=100);
  background-size: cover;
  background-repeat: no-repeat;
`;

const HomeAd2ContentCardImg3 = styled.div`
  margin-top: 60px;
  /* border-radius: 8px;
 */
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px 8px;
  width: 277px;
  height: 222px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fproject-request-section__process-03-img%403x.png&w=320&q=100);
  background-size: cover;
  background-repeat: no-repeat;
`;

//https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fproject-request-section__process-04-img%403x.png&w=320&q=100
const HomeAd2ContentCardImg4 = styled.div`
  margin-top: 60px;
  border-bottom-left-radius: 8px 8px;
  border-bottom-right-radius: 8px 8px;
  width: 277px;
  height: 222px;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fdesktop%2Fmodules%2Fenterprise%2Fproject-request-section__process-04-img%403x.png&w=320&q=100);
  background-size: cover;
  background-repeat: no-repeat;
`;

const FooterLine = styled.hr`

    height: 1px;
    margin: 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.12);
`;
export default HomeAd2;
