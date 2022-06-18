import React from "react";
import styled from "styled-components";

const ProjectLists = ({ className, checked, ...props }) => {
  return (
    <>
      <Container>
        <ListBanner src="https://d2v80xjmx68n4w.cloudfront.net/assets/project-request/project-list-banner.png" />
        <ListTitle>프로젝트 리스트</ListTitle>
        <ListContainer>
          <Menu>
            <Category>카테고리</Category>
            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>IT·프로그래밍</CheckLabel>
            </CheckItem>
            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>웹사이트・모바일앱 신규 제작</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>웹사이트 신규 제작</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>모바일앱 신규 제작</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>웹사이트 개선·버그수정</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>모바일앱 개선·버그수정</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>프로그램 개발</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>임베디드 시스템</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>게임</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>기획</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>데이터 사이언스</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>
            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>디자인</CheckLabel>
            </CheckItem>

            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>로고디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>패키지 (라벨·라벨스티커)</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>캘리그라피</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>북커버·앨범커버</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>공간디자인·도면</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>제품설계·디자인·3D프린팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>포토샵 편집</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>SNS 디자인(카드뉴스·채널아트 등)</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>블로그·카페</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>3D 캐릭터·게임용 원화</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>
                  일러스트(삽화·캐릭터·웹툰·캐리커쳐·인물)
                </CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>패키지 (상품박스·외부포장)</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>로고+명함디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>스마트스토어·템플릿형 홈페이지</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>앱 디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>3D 캐릭터·게임용 원화</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>웹·모바일 디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>PPT·인포그래픽</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>현수막·X배너</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>명함 디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>리플렛·소책자·카달로그</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>전단·포스터·초대장·봉투</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>상세페이지·배너</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>로고+간판디자인</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>의류 디자인</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>영상·사진·음향</CheckLabel>
            </CheckItem>
            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>영상제작</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>사진촬영</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>더빙·녹음</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>음악·사운드</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>엔터테이너</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>마케팅</CheckLabel>
            </CheckItem>
            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>종합광고대행사</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>체험단마케팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>포털마케팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>SNS마케팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>앱마케팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>온라인배너광고</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>오프라인광고</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>번역·통역</CheckLabel>
            </CheckItem>

            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>번역</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>통역</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>문서·글쓰기</CheckLabel>
            </CheckItem>

            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>카피라이팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>문서 교정</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>글작성</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>문서서식·폼</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>타이핑</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>비즈니스컨설팅</CheckLabel>
            </CheckItem>

            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>세무회계</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>리서치·서베이</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>법률·법무</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>해외사업</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>HR·인사</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>사업계획·IR</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>창업컨설팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>자산관리·재테크</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>업무지원·CS</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>유튜브 컨설팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>퍼스널 브랜딩</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>

            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>레슨·실무교육</CheckLabel>
            </CheckItem>

            <CheckSubBox>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>외국어</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>악기·디제잉</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>게임</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>요가·필라테스</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>미술·드로잉</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>댄스</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>헬스·PT</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>뷰티·미용</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>공예·취미</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>미디·작곡·편곡</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>프로그래밍</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>보컬·랩</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>스포츠</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>사진촬영·편집</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>영상촬영·편집</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>발표·발성</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>마케팅</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>빅데이터·엑셀</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>디자인툴·PPT</CheckSubLabel>
              </CheckSubItem>
              <CheckSubItem>
                <CheckBox type="checkbox" />
                <CheckSubLabel>글쓰기</CheckSubLabel>
              </CheckSubItem>
            </CheckSubBox>
          </Menu>
          <CardContainer>
            <SearchBar></SearchBar>
            <Card></Card>
          </CardContainer>
        </ListContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 1170px;
  /* background: green; */
  margin: 0 auto;
`;
const ListBanner = styled.img`
  width: 1170px;
  height: 90px;
  padding: 28px 0 0;
  cursor: pointer;
`;
const ListTitle = styled.div`
  width: 1170px;
  margin-top: 43px;
  font: 700 25px MetroSans;
  color: #4d4d4d;
`;
const ListContainer = styled.div`
  width: 1170px;
  display: flex;
  margin-top: 25px;
`;
const Menu = styled.div`
  width: 184px;
`;
const Category = styled.div`
  border-top: 2.3px solid #ffd400;
  border-bottom: 1px solid #e4e5ed;
  font: 800 16px MetroSans;
  color: #303441;
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 15px;
`;
const CheckItem = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CheckSubBox = styled.div`
  background: #fafafc;
  padding-top: 13px;
  padding-left: 8px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CheckSubItem = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: -5px;
`;
const CheckBox = styled.input`
  appearance: none;
  border: 1px solid #c8cad2;
  border-radius: 4px;
  position: relative;
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  ${CheckItem},${CheckSubItem}:hover & {
    border-color: #ffd400;
  }

  &:checked {
    border-color: #ffd400;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ffd400;
  }
`;
const CheckLabel = styled.p`
  padding-left: 6px;
  font: 500 14px MetroSans;
  color: #212224;
  ${CheckItem}:hover & {
    font: 700 14px MetroSans;
  }
`;
const CheckSubLabel = styled.p`
  font: 500 13px MetroSans;
  color: #555969;
  margin-top: 4px;
  padding-left: 8px;
  ${CheckSubItem}:hover & {
    font: 700 13px MetroSans;
  }
`;
const CardContainer = styled.div`
  width: 962px;
  margin-left: 24px;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 55.5px;
  border: 1px solid #e4e5ed;
`;
const Card = styled.div``;
export default ProjectLists;
