import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProjectDetail } from "../redux/modules/KmongSlice"

const Detail = () => {

  const dispatch = useDispatch();
  const params = useParams();

  const projectDetail = useSelector( state => state.Kmong.object );
  const [getDetail, setGetDetail] = React.useState(null);


  React.useEffect (() => {
   const projectId = params.projectId;
     dispatch( getProjectDetail(projectId));  
  },[]);


  console.log("projectDetail===> ", projectDetail);

  

  return (
    <>
      <Container>
        <LeftBox>
          <Category>
            <span>{projectDetail?.bigCategory}</span> / <span>{projectDetail?.smallCategory}</span>
          </Category>
          <Title>{projectDetail?.title}</Title>
          <TextWrapper>
            <SubTitle>프로젝트 진행 방식</SubTitle>
            <SubText>{projectDetail?.progressMethod}</SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>개인 / 기업 여부</SubTitle>
            <SubText>기업 (법인/개인사업자/예비창업자)</SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>구체적인 내용 설명</SubTitle>
            <SubText>
            {projectDetail?.description}
              {/* ※프로젝트의 현재 상황
              <br />
              - 프로젝트 소개 : 기존 현수막과 도로교통시설물 대신 자사 제품인
              LED 미디어 글라스를 이용하여 민간 및 지자체에 메시지와 다양한
              정보를 제공 할 수 있는 LED 전자 배너 개발하여 양산하는
              프로젝트입니다.
              <br />
              <br />
              유무선 통신 (LTE, Wi-Fi, Ethernet)을 이용하여 설치 장소의 날씨,
              미세먼지, 시간, 교통 등 다양한 정보를 PC 또는 스마트폰으로 제어
              하여 전자 배너에 출력 할 수 있는 컨트롤러를 개발하는 것이
              목표입니다.
              <br />
              <br />
              - 기획 및 준비사항 : <br />
              현재 자사 제품 설계는 완료되었고, 시제품 생산 될 예정 입니다.
              <br />
              <br />
              ※상세한 업무내용
              <br />
              <br />
              -서버 및 UX/UI 개발 요청
              <br /> -컨트롤러 하드웨어 개발 요청 <br />
              -어플리케이션 개발 요청
              <br />
              <br />
              LED 전자 배너 컨트롤러 주요 기능
              <br />
              <br />
              [제어 방법] PC : 웹 앱(Web App) / 스마트폰 : 앱 (Android / IOS)
              <br />
              <br />
              1. 사용자가 간단한 텍스트 및 이모티콘 입력 기능 (텍스트 폰트 및
              크기 조절 가능) <br />
              2. LED 밝기 자동 /수동 조절 기능 (주간, 야간에 따른 자동 밝기
              조절) <br />
              3. 스쿨존과 같이 속도 제한 구간에서 자동차 현재 속도를 전자 배너에
              표시
              <br /> 4. Open API를 사용하여 설치 장소 위치의 정보 표출 -실시간
              대기 기상 정보 (날씨/ 온도/ 습도/ 미세먼지/ 오존 등) -현재 시간 및
              날짜, 요일 -실시간 도로 교통 정보(도로 정체/우회/사고/긴급 상황
              등)
              <br />
              <br />
              시제품 하드웨어 최소 수량 협의 가능
              <br />
              <br />
              <br />
              ※참고사항
              <br />
              <br />
              컨트롤러 개발이 완료 후, 양산을 위해서 회로도 / PCB 설계 / BOM /
              코딩 소스 / Gerber file / PCB 생산파일 등 모든 자료 받기를
              원합니다.
              <br />
              <br />
              자사 제품 참고 영상 :
              https://www.youtube.com/channel/UCMog3n6toGL2IyTKT3VaTfw */}
            </SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>프로젝트 작업 마감 일자</SubTitle>
            <SubText>
            {projectDetail?.dueDateForApplication}
              {/* 2022.10.01 */}

            </SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>작업 기간 (일)</SubTitle>
            <SubText>
            {projectDetail?.workingPeriod}
              </SubText>
          </TextWrapper>
        </LeftBox>
        <RightBox>
          <ProfileWrapper>
            <ProfileBox>
              <ProfileImg src="https://kmong.com/img/tools/main_user_gray.png"></ProfileImg>
              <Nickname>프로필닉네임</Nickname>
            </ProfileBox>
            <TaxBox>
              <ProfileTitle>세금계산서</ProfileTitle>
              <Need>필요</Need>
            </TaxBox>
            <BudgetBox>
              <ProfileTitle>예산</ProfileTitle>
              <Budget>{projectDetail?.budget}원</Budget>
            </BudgetBox>
            <BtnPropose>제안하기</BtnPropose>
            <Msg>
              마감일까지&nbsp;<span>10일</span>&nbsp;남았습니다.
            </Msg>
          </ProfileWrapper>
          <ContentWrapper>
            <ContentTitle>비슷한 프로젝트 의뢰하기</ContentTitle>
            <ContentText>
              프로젝트 의뢰하고, 딱 맞는 전문가를 만나보세요.
            </ContentText>
            <BtnSubmit>비슷한 프로젝트 의뢰하기 ></BtnSubmit>
          </ContentWrapper>
        </RightBox>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 1200px;
  margin: 50px auto;
  display: flex;
`;
const LeftBox = styled.div`
  width: 670px;
  margin-left: 18px;
  padding-bottom: 90px;
`;
const Category = styled.div`
  font-size: 14px;
  color: #303441;
  font-weight: 700;
`;
const Title = styled.div`
  font-size: 30px;
  color: #303441;
  font-weight: 700;
  margin-top: 15px;
`;
const TextWrapper = styled.div`
  margin-top: 60px;
  font-size: 20px;
  font-weight: 500;
`;
const SubTitle = styled.div`
  color: #303441;
  font-size: 20px;
`;
const SubText = styled.div`
  color: #555969;
  margin-top: 20px;
  font-size: 15px;
`;
const RightBox = styled.div`
  width: 440px;
  margin-left: 60px;
`;
const ProfileWrapper = styled.div`
  padding: 24px 40px;
  width: 358px;
  height: 320px;
  border: 1px solid #e4e5ed;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
`;
const Nickname = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #727585;
  margin-top: 15px;
`;
const TaxBox = styled.div`
  width: 358px;
  position: relative;
  margin-top: 30px;
`;
const ProfileTitle = styled.div`
  position: absolute;
  left: 0;
  font-size: 15px;
  font-weight: 500;
  color: #303441;
`;

const Need = styled.div`
  position: absolute;
  right: 0;
  font-size: 15px;
  font-weight: 900;
  color: #303441;
`;
const BudgetBox = styled.div`
  width: 358px;
  margin-top: 60px;
  position: relative;
`;

const Budget = styled.div`
  position: absolute;
  right: 0;
  color: #303441;
  font-size: 28px;
  font-weight: 700;
`;

const BtnPropose = styled.div`
  width: 358px;
  background: #ffd400;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  color: #303441;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 60px;
`;
const Msg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 358px;
  margin-top: 125px;
  font-size: 15px;
  color: #727585;
  font-weight: 500;
  span {
    color: #f5c126;
    font-weight: 900;
  }
`;
const ContentWrapper = styled.div`
  padding: 24px 40px;
  width: 358px;
  height: 151px;
  border: 1px solid #e4e5ed;
  margin-top: 15px;
`;

const ContentTitle = styled.div`
  font-size: 17px;
  font-weight: 900;
  color: #303441;
`;
const ContentText = styled.div`
  font-size: 17px;
  color: #303441;
  margin-top: 30px;
`;
const BtnSubmit = styled.div`
  width: 358px;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  border: 1px solid #303441;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #303441;
  :hover {
    background: rgba(48, 52, 65, 0.1);
    transition: 0.5s ease;
  }
`;
export default Detail;
