import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CreateProjectModal = () => {
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
  return (
    <>
      <Container>
        <Title>프로젝트 의뢰</Title>
        <BoxWrapper>
          <Box>
            <FormTitle>프로젝트 진행 방식을 선택해주세요.</FormTitle>
            <br />
            <Select>
              <Input type="radio" name="progressMethod" value="외주" />

              <span>외주 : 외부 프리랜서 & 사업자와 프로젝트 진행</span>
            </Select>
            <Select>
              <Input type="radio" name="progressMethod" value="상주" />
              <span>
                상주 : 기간과 장소를 정하고, 상주하여 작업할 인력을 구인
              </span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>
              사용 가능한 예산의 범위를 알려주세요.
              <p>정부지원금 사용 시, 지원받은 총 사업비를 선택해주세요.</p>
            </FormTitle>
            <br />
            <Select>
              <Input type="radio" name="budget" value="미만" />
              <span>500만원 미만</span>
            </Select>
            <Select>
              <Input type="radio" name="budget" value="이상" />
              <span>500만원 이상</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>관련 분야를 선택해주세요.</FormTitle>
            <br />
            <Select>
              <Input
                type="radio"
                name="smallCategory"
                value="웹사이트 신규 제작"
              />
              <span>웹사이트 신규 제작</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="smallCategory"
                value="모바일앱 신규 제작"
              />
              <span>모바일앱 신규 제작</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="smallCategory"
                value="웹사이트 개선·버그수정"
              />
              <span>웹사이트 개선·버그수정</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>필요한 서비스의 제목을 작성해주세요.</FormTitle>
            <br />
            <SearchBar>
              <Input
                type="text"
                placeholder="예) OOO분야의 솔루션 요청드립니다."
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
            <br />
            <hr />
            <br />
            <FormTitle>프로젝트의 준비 상황을 선택해주세요.</FormTitle>
            <br />
            <Select>
              <Input
                type="radio"
                name="currentStatus"
                value="아이디어만 있음"
              />
              <span>아이디어만 있음</span>
            </Select>
            <Select>
              <Input type="radio" name="currentStatus" value="기획서 보유" />
              <span>기획서 보유</span>
            </Select>
            <Select>
              <Input type="radio" name="currentStatus" value="디자인 보유" />
              <span>디자인 보유</span>
            </Select>
            <Select>
              <Input type="radio" name="currentStatus" value="개발환경 보유" />
              <span>개발환경 보유</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>
              개발을 요청하실 기능을 모두 선택해주세요. <span>중복가능</span>
            </FormTitle>
            <br />
            <SubTitle>기본 기능</SubTitle>
            <Select>
              <Input type="checkbox" name="requiredFunction" value="갤러리" />
              <span>갤러리</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="requiredFunction"
                value="게시판(게시글/댓글)"
              />
              <span>게시판(게시글/댓글)</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="requiredFunction"
                value="일정 관리"
              />
              <span>일정 관리</span>
            </Select>
            <Select>
              <Input type="checkbox" name="requiredFunction" value="SNS 연동" />
              <span>SNS 연동</span>
            </Select>
            <br />
            <SubTitle>회원 관련 기능</SubTitle>
            <Select>
              <Input
                type="checkbox"
                name="userRelatedFunction"
                value="회원가입 및 정보관리"
              />
              <span>회원가입 및 정보관리</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="userRelatedFunction"
                value="SNS 간편 로그인"
              />
              <span>SNS 간편 로그인</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="userRelatedFunction"
                value="즐겨찾기"
              />
              <span>즐겨찾기(찜하기/스크랩)</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="userRelatedFunction"
                value="메시지"
              />
              <span>메시지</span>
            </Select>
            <br />
            <SubTitle>커머스 관련 기능</SubTitle>
            <Select>
              <Input
                type="checkbox"
                name="commerceRelatedFunction"
                value="장바구니"
              />
              <span>장바구니</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="commerceRelatedFunction"
                value="배송 관리"
              />
              <span>배송 관리</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="commerceRelatedFunction"
                value="PG사 연동"
              />
              <span>PG사 연동</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="commerceRelatedFunction"
                value="해외결제"
              />
              <span>해외결제(페이팔)</span>
            </Select>
            <br />
            <SubTitle>사이트 환경</SubTitle>
            <Select>
              <Input
                type="checkbox"
                name="siteEnvironment"
                value="다국어 지원"
              />
              <span>다국어 지원</span>
            </Select>
            <Select>
              <Input
                type="checkbox"
                name="siteEnvironment"
                value="관리자 페이지"
              />
              <span>관리자 페이지</span>
            </Select>
            <Select>
              <Input type="checkbox" name="siteEnvironment" value="보안" />
              <span>보안(SSL 인증)</span>
            </Select>
            <Select>
              <Input type="checkbox" name="siteEnvironment" value="GA 설치" />
              <span>GA 설치</span>
            </Select>
          </Box>
          <Box>
            <FormTitle>솔루션 이용 여부를 체크해주세요.</FormTitle>
            <br />
            <Select>
              <Input type="radio" name="solutionInUse" value="솔루션 이용" />
              <span>솔루션 이용</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="solutionInUse"
                value="솔루션 이용하지 않고 자체 개발"
              />
              <span>솔루션 이용하지 않고 자체 개발</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="solutionInUse"
                value="상관 없음(모름)"
              />
              <span>상관 없음(모름)</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>반응형 적용 여부를 체크해주세요.</FormTitle>
            <br />
            <Select>
              <Input type="radio" name="reactable" value="반응형" />
              <span>반응형</span>
            </Select>
            <Select>
              <Input type="radio" name="reactable" value="비반응형" />
              <span>비반응형</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>
              의뢰 사항을 구체적으로 설명해주세요.
              <p>외부 연락처 공개 등 운영정책 위반 시 이용이 제한 됩니다.</p>
            </FormTitle>
            <br />
            <TextArea />
            <div>
              <input type="file" />
            </div>
            <br />
            <hr />
            <br />
            <FormTitle>프로젝트의 예산을 기재해주세요.</FormTitle>
            <br />
            <SearchBar>
              <Input type="text" placeholder="최소 10,000 원" />

              <img src="img/ic_search.png" />
            </SearchBar>
            <Select>
              <Input type="checkbox" name="taxInvoice" />
              <span>세금계산서 발행 필요시, 체크해주세요</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>지원자 모집 마감 일자를 선택해주세요.</FormTitle>
            <br />
            <Input type="date" />
            <br />
            <br />
            <FormTitle>프로젝트의 작업 마감 일자를 선택해주세요.</FormTitle>
            <br />
            <Input type="date" />
            <br />
            <br />
            <FormTitle>작업 기간을 입력해주세요. (일 단위)</FormTitle>
            <br />
            <SearchBar>
              <Input type="text" placeholder="최소 10,000 원" />

              <img src="img/ic_search.png" />
            </SearchBar>
            <br />
            <hr />
            <br />
            <SubmitTitle>
              아래의 완료버튼을 눌러서 프로젝트를 등록해주세요!
            </SubmitTitle>
            <br />

            <br />
            <BtnSubmit>프로젝트 등록 완료하기</BtnSubmit>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
`;
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Title = styled.div`
  width: 1170px;
  font-size: 25px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-top: 40px;
`;
const Box = styled.div`
  width: 450px;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 40px;
  margin: 30px 10px;
`;
const FormTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-top: 10px;
  p,
  span {
    font-size: 14px;
    font-weight: 500;
    color: #116ad4;
    margin-top: 5px;
  }
`;
const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #333;
`;
const Select = styled.div`
  margin-top: 10px;
  span {
    font-size: 15px;
  }
`;
const SearchBar = styled.div`
  width: 450px;
  height: 40px;
  border: 1px solid #e4e5ed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  input {
    font-family: MetroSans;
    width: 400px;
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
const TextArea = styled.textarea`
  width: 450px;
  resize: none;
`;

const SubmitTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
const BtnSubmit = styled.div`
  width: 450px;
  height: 50px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 700;
  :hover {
    background: rgb(255, 212, 0);
    transition: 0.5s ease;
    cursor: pointer;
  }
`;
const Input = styled.input`
  /* accent-color: #ea580c; */
  /* accent-color: #a16207; */

  accent-color: #ffd400;
`;

export default CreateProjectModal;
