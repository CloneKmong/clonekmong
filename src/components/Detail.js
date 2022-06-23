import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProjectDetail } from "../redux/modules/KmongSlice";
const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const projectDetail = useSelector((state) => state.Kmong.object);
  const projectDetailUrl = useSelector((state) => state.Kmong.fileUrl);
  const projectDetailName = useSelector((state) => state.Kmong.fileName);
  useEffect(() => {
    console.log(projectDetailName.includes(".pdf"));
    const projectId = params.projectId;
    dispatch(getProjectDetail(projectId));
  }, [projectDetailName]);
  return (
    <>
      <Container>
        <LeftBox>
          <Category>
            <span>{projectDetail?.bigCategory}</span> /{" "}
            <span>{projectDetail?.smallCategory}</span>
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
            <SubTitle>개발 요청 기능</SubTitle>
            <SubText>{projectDetail?.requiredFunction}</SubText>
            <SubText>{projectDetail?.userRelatedFunction}</SubText>
            <SubText>{projectDetail?.commerceRelatedFunction}</SubText>
            <SubText>{projectDetail?.siteEnvironment}</SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>솔루션 / 반응형</SubTitle>
            <SubText>
              {projectDetail?.solutionInUse} / {projectDetail?.reactable}
            </SubText>
          </TextWrapper>
          <TextWrapper>
            <SubTitle>구체적인 내용 설명</SubTitle>
            <SubText>{projectDetail?.description}</SubText>
            {projectDetailUrl == "" ? null : (
              <FileBox>
                {projectDetailName.includes(".jpg") ||
                projectDetailName.includes(".jpeg") ||
                projectDetailName.includes(".png") ? (
                  <FileThumbnail src={projectDetailUrl} />
                ) : (
                  <FileThumbnail src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-vector-files-icon-png-image_323843.jpg" />
                )}
                <FileTitle href={projectDetailUrl}>
                  {projectDetailName}
                </FileTitle>
              </FileBox>
            )}
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
            <SubText>{projectDetail?.workingPeriod}</SubText>
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
            <BtnPropose
              onClick={() => {
                alert("서비스 준비중입니다!");
              }}
            >
              제안하기
            </BtnPropose>
            <Msg>
              마감일까지&nbsp;<span>10일</span>&nbsp;남았습니다.
            </Msg>
          </ProfileWrapper>
          <ContentWrapper>
            <ContentTitle>비슷한 프로젝트 의뢰하기</ContentTitle>
            <ContentText>
              프로젝트 의뢰하고, 딱 맞는 전문가를 만나보세요.
            </ContentText>
            <BtnSubmit
              onClick={() => {
                navigate("/create");
              }}
            >
              비슷한 프로젝트 의뢰하기
            </BtnSubmit>
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
const FileBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const FileThumbnail = styled.img`
  margin-top: 15px;
  width: 94px;
  height: 94px;
  object-fit: cover;
`;
const FileTitle = styled.a`
  margin-top: 6px;
  color: #555969;
  font-size: 15px;
  :hover {
    color: #333;
    cursor: pointer;
    text-decoration: underline;
  }
`;
const RightBox = styled.div`
  width: 440px;
  margin-left: 60px;
`;
const ProfileWrapper = styled.div`
  padding: 24px 40px;
  width: 358px;
  height: 320px;
  border: 1px solid #E4E5ED;
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
  background: #FFD400;
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
    color: #F5C126;
    font-weight: 900;
  }
`;
const ContentWrapper = styled.div`
  padding: 24px 40px;
  width: 358px;
  height: 151px;
  border: 1px solid #E4E5ED;
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