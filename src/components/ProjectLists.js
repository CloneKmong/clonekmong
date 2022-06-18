import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProjectListsCopy = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const mainCategory = [
    ["IT·프로그래밍"],
    ["디자인"],
    ["영상·사진·음향"],
    ["마케팅"],
    ["번역·통역"],
    ["문서·글쓰기"],
    ["비즈니스컨설팅"],
    ["레슨·실무교육"],
  ];
  const category = [
    [
      ["웹사이트・모바일앱 신규 제작"],
      ["웹사이트 신규 제작"],
      ["모바일앱 신규 제작"],
      ["웹사이트 개선·버그수정"],
      ["모바일앱 개선·버그수정"],
      ["프로그램 개발"],
      ["임베디드 시스템"],
      ["게임"],
      ["기획"],
      ["데이터 사이언스"],
    ],
    [
      ["로고디자인"],
      ["패키지 (라벨·라벨스티커)"],
      ["캘리그라피"],
      ["북커버·앨범커버"],
      ["공간디자인·도면"],
      ["제품설계·디자인·3D프린팅"],
      ["포토샵 편집"],
      ["SNS 디자인(카드뉴스·채널아트 등)"],
      ["블로그·카페"],
      ["3D 캐릭터·게임용 원화"],
      ["일러스트(삽화·캐릭터·웹툰·캐리커쳐·인물)"],
      ["패키지 (상품박스·외부포장)"],
      ["로고+명함디자인"],
      ["스마트스토어·템플릿형 홈페이지"],
      ["앱 디자인"],
      ["웹·모바일 디자인"],
      ["PPT·인포그래픽"],
      ["현수막·X배너"],
      ["명함 디자인"],
      ["리플렛·소책자·카달로그"],
      ["전단·포스터·초대장·봉투"],
      ["상세페이지·배너"],
      ["로고+간판디자인"],
      ["의류 디자인"],
    ],
    [
      ["영상제작"],
      ["사진촬영"],
      ["더빙·녹음"],
      ["음악·사운드"],
      ["엔터테이너"],
    ],
    [
      ["종합광고대행사"],
      ["체험단마케팅"],
      ["포털마케팅"],
      ["SNS마케팅"],
      ["앱마케팅"],
      ["온라인배너광고"],
      ["오프라인광고"],
    ],
    [["번역"], ["통역"]],
    [["카피라이팅"], ["문서 교정"], ["글작성"], ["문서서식·폼"], ["타이핑"]],
    [
      ["세무회계"],
      ["리서치·서베이"],
      ["법률·법무"],
      ["해외사업"],
      ["HR·인사"],
      ["사업계획·IR"],
      ["창업컨설팅"],
      ["자산관리·재테크"],
      ["업무지원·CS"],
      ["유튜브 컨설팅"],
      ["퍼스널 브랜딩"],
    ],
    [
      ["외국어"],
      ["악기·디제잉"],
      ["게임"],
      ["요가·필라테스"],
      ["미술·드로잉"],
      ["댄스"],
      ["헬스·PT"],
      ["뷰티·미용"],
      ["공예·취미"],
      ["미디·작곡·편곡"],
      ["보컬·랩"],
      ["스포츠"],
      ["사진촬영·편집"],
      ["영상촬영·편집"],
      ["발표·발성"],
      ["마케팅"],
      ["빅데이터·엑셀"],
      ["디자인툴·PPT"],
      ["글쓰기"],
    ],
  ];

  return (
    <>
      <Container>
        <ListBanner src="https://d2v80xjmx68n4w.cloudfront.net/assets/project-request/project-list-banner.png" />
        <ListTitle>프로젝트 리스트</ListTitle>
        <ListContainer>
          <Menu>
            <Category>카테고리</Category>
            {mainCategory.map((list, idx) => {
              return (
                <>
                  <CheckItem>
                    <CheckBox
                      type="checkbox"
                      onClick={() => {
                        let copy = [...menu];
                        copy[idx] = true;
                        setMenu(copy);
                      }}
                    />
                    <CheckLabel>{list}</CheckLabel>
                    <BtnToggle
                      onClick={() => {
                        setToggle(!toggle);
                        let copy = [...menu];
                        copy[idx] = !copy[idx];
                        setMenu(copy);
                      }}
                    >
                      {toggle === false ? (
                        <FontAwesomeIcon icon={faAngleDown} className="fa-xs" />
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} className="fa-xs" />
                      )}
                    </BtnToggle>
                  </CheckItem>
                  {menu[idx] === false ? null : (
                    <SubContainer>
                      {category[idx].map((list, idx) => {
                        return (
                          <CheckSubBox key={category.idx}>
                            <CheckSubItem>
                              <CheckBox type="checkbox" />
                              <CheckSubLabel>{list}</CheckSubLabel>
                            </CheckSubItem>
                          </CheckSubBox>
                        );
                      })}
                    </SubContainer>
                  )}
                </>
              );
            })}
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
  margin-bottom: 10px;
`;
const CheckItem = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
const SubContainer = styled.div`
  background-color: #fafafc;
  padding: 6px 8px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 168px;
`;
const CheckSubItem = styled.label`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  width: 168px;
`;
const CheckSubBox = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 168px;
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
const BtnToggle = styled.button`
  flex: 0 1 auto;
  height: 24px;
  cursor: default;
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #c8cad2;
  font-size: 16px;
  background-color: #ffffff;
  padding: 0 0 0 16px;
  position: absolute;
  right: 10px;
  :hover {
    color: #222;
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
export default ProjectListsCopy;
