import React from "react";
import styled from "styled-components";

const HomeAd = () => {
  return (
    <HomeAdWrap>
      <HomeAdContenttWrap>
        <HomeAdImg>
          <HomeAdTextWrap>
            <HomeAdTextTitle>
              아래에 해당된다면, 지금 프로젝트 의뢰하세요!
            </HomeAdTextTitle>
            <HomeAdTextP>
              엔터프라이즈가 여러분들의 고민을 해결해드릴게요
            </HomeAdTextP>
            <HomeAdContentTextWrap>
              <HomeAdLeftWrap>
                <HomeAdLeftFirst>
                  신사업 진행을 위해
                  <br />
                  개발자・디자이너가 필요한 스타트업
                </HomeAdLeftFirst>
                <HomeAdLeftSecond>
                  특정 기간 동안 함께 할 상주 전문자를 찾는 분
                </HomeAdLeftSecond>
                <HomeAdLeftSecond>
                  정부지원사업 자금으로
                  <br />
                  뭐부터 해야 할지 막막한 예비 창업자
                </HomeAdLeftSecond>
              </HomeAdLeftWrap>
              <HomeAdRightWrap>
                <HomeAdLeftFirst>
                    중・장기 프로젝트를 맡길
                  <br />
                  믿을만한 외주 업체를 찾고 있는 사장님
                </HomeAdLeftFirst>
                <HomeAdLeftFirst>
                    특정 분야 전문가를 찾고 계신분
                </HomeAdLeftFirst>
                <HomeAdLeftFirst>
                    <br/>
                </HomeAdLeftFirst>
              </HomeAdRightWrap>
            </HomeAdContentTextWrap>
          </HomeAdTextWrap>
        </HomeAdImg>
      </HomeAdContenttWrap>
    </HomeAdWrap>
  );
};

const HomeAdWrap = styled.div`
  height: 670px;
  background-color: #071e36;
`;

const HomeAdImg = styled.div`
  height: 100%;
  background-image: url(https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/enterprise/project-request__section-bg@2x.png);
  background-size: 1168px 670px;
  background-repeat: no-repeat;
`;

const HomeAdContenttWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  text-align: center;
  padding: 0 16px;
`;

const HomeAdTextWrap = styled.div`
  padding: 80px 0;
`;

const HomeAdTextTitle = styled.h3`
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  margin: 0;
  line-height: normal;
`;

const HomeAdTextP = styled.p`
  font-size: 16px;
  color: #ffffff;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 0 0;
`;

const HomeAdContentTextWrap = styled.div`
    display: flex;
`;

const HomeAdLeftWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 200px;
  flex-direction: column;
  row-gap: 20px;
`;

const HomeAdLeftFirst = styled.div`
  width: 349px;
  text-align: left;
  display: flex;
  background-color: rgba(10, 51, 95, 0.3);
  color: rgb(240, 243, 247);
  font-size: 15px;
  border-radius: 8px;
  padding: 20px;
`;

const HomeAdLeftSecond = styled.div`
  width: 349px;
  text-align: left;
  display: flex;
  background-color: rgba(10, 51, 95, 0.3);
  color: rgb(240, 243, 247);
  font-size: 15px;
  border-radius: 8px;
  padding: 20px;
`;

const HomeAdRightWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 0 20px;
  flex-direction: column;
  row-gap: 20px;
`;
export default HomeAd;
