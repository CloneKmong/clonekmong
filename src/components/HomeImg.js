import React from "react";
import styled from "styled-components";

import { useNavigate } from 'react-router-dom';

const HomeImg = () => {

  const navigate = useNavigate();
  
    return (<MainContentWrap>
        <MainContentImage>
          <MainContentInfoWrap>
            <MainContentTitle1>기업 외주・상주・정부지원사업</MainContentTitle1>
            <MainContentTitle2>
              <b>크몽 엔터프라이즈</b>에 맡기세요!
            </MainContentTitle2>
            <MainContentBtn1 onClick={()=> navigate(`/create`)}>프로젝트 의뢰하기</MainContentBtn1>
            <MainContentBtn2>
              <span style={{ marginRight: "10px" }}>
                서비스 소개서 다운로드
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                className="css-7kp13n e181xm9y0"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M19,12.25 C19.3796958,12.25 19.693491,12.5321539 19.7431534,12.8982294 L19.75,13 L19.75,18 C19.75,18.3796958 19.4678461,18.693491 19.1017706,18.7431534 L19,18.75 L6,18.75 C5.62030423,18.75 5.30650904,18.4678461 5.25684662,18.1017706 L5.25,18 L5.25,13 C5.25,12.5857864 5.58578644,12.25 6,12.25 C6.37969577,12.25 6.69349096,12.5321539 6.74315338,12.8982294 L6.75,13 L6.75,17.2495729 L18.25,17.2495729 L18.25,13 C18.25,12.6203042 18.5321539,12.306509 18.8982294,12.2568466 L19,12.25 Z M12.5,4.42157288 C12.9142136,4.42157288 13.25,4.75735931 13.25,5.17157288 L13.25,5.17157288 L13.25,12.5175729 L14.6265242,11.1412428 L14.7033281,11.0741214 C14.9972993,10.8503836 15.4186989,10.8727573 15.6871843,11.1412428 C15.9800776,11.434136 15.9800776,11.9090097 15.6871843,12.201903 L15.6871843,12.201903 L12.8587572,15.0303301 L12.7819533,15.0974514 C12.4879821,15.3211893 12.0665825,15.2988155 11.798097,15.0303301 L11.798097,15.0303301 L8.96966991,12.201903 L8.90254855,12.125099 C8.67881068,11.8311279 8.70118446,11.4097282 8.96966991,11.1412428 L8.96966991,11.1412428 L9.04647385,11.0741214 C9.340445,10.8503836 9.76184464,10.8727573 10.0303301,11.1412428 L10.0303301,11.1412428 L11.75,12.8615729 L11.75,5.17157288 L11.7568466,5.06980232 C11.806509,4.70372676 12.1203042,4.42157288 12.5,4.42157288 Z"
                ></path>
              </svg>
            </MainContentBtn2>
          </MainContentInfoWrap>
        </MainContentImage>
      </MainContentWrap>);
}

export default HomeImg;

const MainContentWrap = styled.div`
  height: 400px;
  background-color: rgb(7, 30, 54);
`;
// 사진 그리기
const MainContentImage = styled.div`
  /* display: flex; */
  width: 1100px;
  height: 400px;
  background-image: url(https://d2v80xjmx68n4w.cloudfront.net/assets/desktop/modules/enterprise/hero-section__bg-image@2x.png);
  background-repeat: no-repeat;
  background-size: 602px 400px;
  background-position: right;
  margin: auto;
  position: relative;
  /* object-fit: fill; */
`;
// 사진 내 Text 묶기
const MainContentInfoWrap = styled.div`
  position: absolute;
  margin-top: 100px;
  margin-left: 25px;
`;

// 사진 내 1번 text
const MainContentTitle1 = styled.h1`
  font-size: 15px;
  color: rgb(255, 255, 255);
  margin: 0px 0px 12px;
  font-weight: 500;
`;
// 사진 내 2번 text
const MainContentTitle2 = styled.h2`
  font-size: 25px;
  color: rgb(255, 255, 255);
  font-weight: 400;
  line-height: 1.5;
  margin: 0px 0px 32px;
`;
// 사진 내 프로젝트 의뢰하기
const MainContentBtn1 = styled.div`
  width: 1100px;
  font-size: 15px;
  background-color: rgb(255, 212, 0);
  font-weight: 500;
  width: 200px;
  height: 45px;
  padding: 0px 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  &:hover {
    background-color: rgb(245, 193, 38);
  }
  cursor: pointer;
  transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
`;

// 사진 내 서비서 소개서 다운로드
const MainContentBtn2 = styled.div`
  /* background-color: rgb(245, 193, 38); */
  background-color: transparent;
  font-size: 15px;
  color: rgb(255, 212, 0);
  font-weight: 500;
  width: 200px;
  height: 45px;
  padding: 0px 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;

  &:hover {
    background-color: rgba(255, 212, 0, 0.1);
  }
`;