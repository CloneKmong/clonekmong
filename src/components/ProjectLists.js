import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProjectLists = () => {
  // checkbox
  // const [check, setCheck] = useState(false);

  // if (check === true) {
  //   console.log("check!");
  //   document.getElementsByName("checkthis1").checked;
  // }
  // toggle menu
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

  // input erase button
  const [text, setText] = useState("");
  const [btn, setBtn] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
    if (e.target.value !== "") {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };
  const onReset = () => {
    setText("");
    setBtn(!btn);
  };

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
                      id={`check${idx}`}
                      onClick={() => {
                        let copy = [...menu];
                        copy[idx] = true;
                        setMenu(copy);
                        // setCheck(!check);
                        document
                          .getElementsByName(`checkthis${idx}`)
                          .forEach((checkbox) => {
                            checkbox.checked = document.getElementById(
                              `check${idx}`
                            ).checked;
                          });
                      }}
                    />
                    <CheckLabel>{list}</CheckLabel>
                    <BtnToggle
                      onClick={() => {
                        let copy = [...menu];
                        copy[idx] = !copy[idx];
                        setMenu(copy);
                      }}
                    >
                      {menu[idx] === false ? (
                        <FontAwesomeIcon icon={faAngleDown} className="fa-xs" />
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} className="fa-xs" />
                      )}
                    </BtnToggle>
                  </CheckItem>
                  {menu[idx] === false ? null : (
                    <SubContainer>
                      {category[idx].map((list, index) => {
                        return (
                          <CheckSubBox key={category.index}>
                            <CheckSubItem>
                              <CheckBox
                                type="checkbox"
                                name={`checkthis${idx}`}
                              />
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
            <Method>프로젝트 진행 방식</Method>
            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>상주</CheckLabel>
            </CheckItem>
            <CheckItem>
              <CheckBox type="checkbox" />
              <CheckLabel>외주</CheckLabel>
            </CheckItem>
          </Menu>
          <CardContainer>
            <BarWrapper>
              <SearchBar>
                <input
                  type="text"
                  placeholder="키워드를 검색하세요."
                  onChange={onChange}
                  value={text}
                />
                {btn === true ? (
                  <Erase
                    src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/ic_round_delete.png"
                    onClick={onReset}
                  />
                ) : null}

                <img src="img/ic_search.png" />
              </SearchBar>
              <SortBar>
                <BtnBox>
                  <SortNew>최신등록순</SortNew>
                  <Sort>마감임박순</Sort>
                  <Sort>고가순</Sort>
                </BtnBox>
              </SortBar>
            </BarWrapper>
            {Array.from({ length: 10 }, (item, idx) => {
              return (
                <Card kkey={idx}>
                  <ImgBox>
                    <div />
                  </ImgBox>
                  <TextBox>
                    <TitleWrapper>
                      <CardTitle>
                        <Dday>D-12</Dday>
                        <Title>LED제어 IOT컨트롤러</Title>
                      </CardTitle>
                      <SubTitle>
                        <span>IT·프로그래밍</span> /<span>임베디드 시스템</span>
                      </SubTitle>
                      {/* <IconBox>
                        <img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/ic-location-on@2x.png" />
                      </IconBox> */}
                    </TitleWrapper>

                    <Comment>
                      ※프로젝트의 현재 상황 - 프로젝트 소개 : 기존 현수막과
                      도로교통시설물 대신 자사 제품인 LED 미디어 글라스를
                      이용하여 민간 및 지자체에 메시지와 다양한 정보를 제공 할
                      수 있는 LED 전자 배너 개발하여 양산하는 프로젝트입니다.
                      유무선 통신 (LTE, Wi-Fi, Ethernet)을 이용하여 설치 장소의
                      날씨, 미세먼지, 시간, 교통 등 다양한 정보를 PC 또는
                      스마트폰으로 제어 하여 전자 배너에 출력 할 수 있는
                      컨트롤러를 개발하는 것이 목표입니다.
                    </Comment>
                    <InfoWrapper>
                      <InfoBox>
                        <InfoTitle>예산</InfoTitle>
                        <Info>50,000,000원</Info>
                      </InfoBox>
                      <Divider />
                      <InfoBox>
                        <InfoTitle>작업 기간</InfoTitle>
                        <Info>90일</Info>
                      </InfoBox>
                      <Divider />
                      <InfoBox>
                        <InfoTitle>받은 제안</InfoTitle>
                        <Info>1개</Info>
                      </InfoBox>
                    </InfoWrapper>
                  </TextBox>
                </Card>
              );
            })}

            <Pagination>
              <ul>
                <li class="page-item">
                  <a class="page-link" href="#">
                    &lt;
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/list/1">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/list/2">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/list/3">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    &gt;
                  </a>
                </li>
              </ul>
            </Pagination>
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
const Method = styled.div`
  border-bottom: 1px solid #e4e5ed;
  font: 800 16px MetroSans;
  color: #303441;
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 15px;
  margin-bottom: 10px;
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
  right: 0px;
  :hover {
    color: #222;
  }
`;
const CheckSubLabel = styled.p`
  font: 500 13px "MetroSans";
  color: #555969;
  margin-top: 4px;
  padding-left: 8px;
  ${CheckSubItem}:hover & {
    font: 700 13px "MetroSans";
  }
`;
const CardContainer = styled.div`
  width: 962px;
  margin-left: 24px;
`;
const BarWrapper = styled.div`
  width: 962px;
  display: flex;
`;
const SearchBar = styled.div`
  width: 675px;
  height: 55.5px;
  border: 1px solid #e4e5ed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input {
    font-family: MetroSans;
    width: 625px;
    height: 20px;
    border: none;
    caret-color: #ffd400;
    color: #4d4d4d;
    font: 500 15px MetroSans;
  }
  input:focus {
    outline: none;
  }
  input::-ms-input-placeholder {
    color: #ccc;
    font: 600 15px MetroSans;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
    font: 600 15px MetroSans;
  }
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 25px;
    cursor: pointer;
  }
`;
const Erase = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  padding-right: 30px;
  cursor: pointer;
`;
const SortBar = styled.div`
  width: 287px;
  height: 55.5px;
  border: 1px solid #e4e5ed;
  border-left: 0px;
`;
const BtnBox = styled.div`
  height: 55.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    padding: 10px;
  }
`;
const Sort = styled.div`
  font: 500 15px "MetroSans";
  color: #4d4d4d;
`;
const SortNew = styled.div`
  font: 900 15px "MetroSans";
  color: #4d4d4d;
`;
const Card = styled.div`
  width: 962px;
  height: 160px;
  padding: 34px 0;
  border-bottom: 1px solid #f2f3f7;
  display: flex;
`;
const ImgBox = styled.div`
  width: 130px;
  height: 160px;
  div {
    background-image: url(https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/custom-project/category-images/custom_project_category_47_3.jpg);
    width: 130px;
    height: 130px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    border-radius: 4px;
  }
`;
const TextBox = styled.div`
  width: 807px;
  height: 160px;
  margin-left: 25px;
`;
const TitleWrapper = styled.div``;
const CardTitle = styled.div`
  display: flex;
  align-items: center;
`;
const Dday = styled.div`
  font-family: "MetroSans";
  font-style: normal;
  width: 32.5px;
  height: 20.5px;
  padding: 1px 5px;
  color: white;
  background-color: #9bb3ca;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin-left: 8px;
  font-weight: 700;
`;
// const IconBox = styled.div`
//   img {
//     width: 24px;
//     height: 24px;
//   }
// `;
const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #9a9ba7;
`;
const Comment = styled.div`
  margin: 20px 0 16px 0;
  color: #555969;
  line-height: 18px;
  height: 36px;
  font-size: 14px;
  font-weight: 500;
  word-break: break-all;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const InfoWrapper = styled.div`
  width: 767px;
  height: 18px;
  display: flex;
  background-color: #fafafc;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
`;
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 219.66px;
  height: 18px;
`;
const InfoTitle = styled.div`
  color: #727585;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  position: absolute;
  left: 0;
`;
const Info = styled.div`
  color: #303441;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  font-weight: 700;
  position: absolute;
  right: 0;
`;
const Divider = styled.div`
  width: 2px;
  height: 18px;
  border-right: 2px solid #e4e5ed;
  margin: 0 20px 0 32px;
`;
const Pagination = styled.div`
  margin-top: 47px;
  width: 962px;
  height: 76.5px;
  display: flex;
  justify-content: center;
  li {
    font-size: 14px;
    color: #9a9ba7;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    float: left;
    margin-left: 20px;
  }
  a {
    color: #9a9ba7;
    text-decoration: none;
    :link {
      text-decoration: none;
    }
  }
`;
export default ProjectLists;
