import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editMyProjectList } from "../redux/modules/MyPageSlice";

const EditProject = () => {
  const { project_id } = useParams();
  const dispatch = useDispatch();
  console.log(project_id);

  // input 박스 리셋 버튼
  const [text, setText] = useState("");
  const [btn, setBtn] = useState(false);

  // 프로젝트 준비 상황 선택
  const [currentStatus, setCurrentStatus] = useState("");
  const handleCurrentStatus = (e) => {
    setCurrentStatus(e.target.value);
  };

  // 기본 기능
  const [requiredFunction, setRequiredFunction] = useState("");
  const handleRequiredFunction = (e) => {
    setRequiredFunction(e.target.value);
  };
  // 회원 관련 기능
  const [userRelatedFunction, setUserRelatedFunction] = useState("");
  const handleUserRelatedFunction = (e) => {
    setUserRelatedFunction(e.target.value);
  };
  // 커머스 관련 기능
  const [commerceRelatedFunction, setCommerceRelatedFunction] = useState("");
  const handleCommerceRelatedFunction = (e) => {
    setCommerceRelatedFunction(e.target.value);
  };
  // 사이트 환경
  const [siteEnvironment, setSiteEnvironment] = useState("");
  const handleSiteEnvironment = (e) => {
    setSiteEnvironment(e.target.value);
  };

  // 솔루션 이용 여부
  const [solutionInUse, setSolutionInUse] = useState("");
  const handleSolutionInUse = (e) => {
    setSolutionInUse(e.target.value);
  };
  // 반응형 적용 여부
  const [reactable, setReactable] = useState("");
  const handleReactable = (e) => {
    setReactable(e.target.value);
  };
  // 의뢰 사항
  const description = React.useRef();

  // 파일 첨부
  const [file, setFile] = useState("");
  const handleUpload = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    console.log(file);
  };
  
  // 프로젝트의 예산
  const budget = React.useRef();
  // 예산 입력 버튼 함수
  function submitBudget() {
    if (budget.current.value < 9999) {
      alert("최소 10,000원 이상 입력해주세요.");
    } else {
      alert(
        `예산 ${
          Math.floor(parseInt(budget.current.value) / 1000) * 1000
        }원이 입력되었습니다.`
      );
      budget.current.value =
        Math.floor(parseInt(budget.current.value) / 1000) * 1000;
    }
  }
  // 세금계산서
  const [checkTax, setCheckTax] = useState(true);
  function changeTax() {
    setCheckTax(!checkTax);
    console.log(checkTax);
  }
  // 마감 일자
  const volunteerDate = React.useRef();
  const dueDate = React.useRef();
  const workingPeriod = React.useRef();
  const onChange = (e) => {
    setText(e.target.value);
    if (e.target.value !== "") {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  function submit() {
    const newList = {
      progressMethod: "외주",
      projectScope: "500만원 미만",
      bigCategory: "IT·프로그래밍",
      smallCategory: "웹사이트 신규 제작",
      title: text,
      currentStatus: currentStatus,
      requiredFunction: requiredFunction,
      userRelatedFunction: userRelatedFunction,
      commerceRelatedFunction: commerceRelatedFunction,
      siteEnvironment: siteEnvironment,
      solutionInUse: solutionInUse,
      reactable: reactable,
      description: description.current.value,
      budget: Math.floor(parseInt(budget.current.value) / 1000) * 1000,
      taxInvoice: checkTax,
      volunteerValidDate: volunteerDate.current.value
        .toString()
        .replaceAll("-", "."),
      dueDateForApplication: dueDate.current.value
        .toString()
        .replaceAll("-", "."),
      workingPeriod: parseInt(workingPeriod.current.value),
    };
    // dispatch(addProjectList(newList));
    console.log(newList);
    // const formData = new FormData();
    // formData.append("progressMethod", "외주");
    // formData.append("projectScope", "500만원 미만");
    // formData.append("bigCategory", "IT·프로그래밍");
    // formData.append("smallCategory", "웹사이트 신규 제작");
    // formData.append("title", text);
    // formData.append("currentStatus", currentStatus);
    // formData.append("requiredFunction", requiredFunction);
    // formData.append("userRelatedFunction", userRelatedFunction);
    // formData.append("commerceRelatedFunction", commerceRelatedFunction);
    // formData.append("siteEnvironment", siteEnvironment);
    // formData.append("solutionInUse", solutionInUse);
    // formData.append("reactable", reactable);
    // formData.append("description", description.current.value);
    // // formData.append("files", file);
    // formData.append(
    //   "budget",
    //   Math.floor(parseInt(budget.current.value) / 1000) * 1000
    // );
    // formData.append("taxInvoice", checkTax);
    // formData.append(
    //   "volunteerValidDate",
    //   volunteerDate.current.value.toString().replaceAll("-", ".")
    // );
    // formData.append(
    //   "dueDateForApplication",
    //   dueDate.current.value.toString().replaceAll("-", ".")
    // );
    // formData.append("workingPeriod", parseInt(workingPeriod.current.value));
    // dispatch(addProjectList(formData));
    // console.log(formData);
  }

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
              <Input
                type="radio"
                name="progressMethod"
                value="외주"
                defaultChecked
              />
              <span>외주 : 외부 프리랜서 & 사업자와 프로젝트 진행</span>
            </Select>
            <Select>
              <Input type="radio" name="progressMethod" value="상주" disabled />
              <span>
                상주 : 기간과 장소를 정하고, 상주하여 작업할 인력을 구인
                (준비중)
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
              <Input type="radio" name="budget" value="미만" defaultChecked />
              <span>500만원 미만</span>
            </Select>
            <Select>
              <Input type="radio" name="budget" value="이상" disabled />
              <span>500만원 이상 (준비중)</span>
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
                defaultChecked
              />
              <span>웹사이트 신규 제작</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="smallCategory"
                value="모바일앱 신규 제작"
                disabled
              />
              <span>모바일앱 신규 제작 (준비중)</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="smallCategory"
                value="웹사이트 개선·버그수정"
                disabled
              />
              <span>웹사이트 개선·버그수정 (준비중)</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>필요한 서비스의 제목을 작성해주세요.</FormTitle>
            <br />
            <InputBox>
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
            </InputBox>
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
                onChange={handleCurrentStatus}
              />
              <span>아이디어만 있음</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="currentStatus"
                value="기획서 보유"
                onChange={handleCurrentStatus}
              />
              <span>기획서 보유</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="currentStatus"
                value="디자인 보유"
                onChange={handleCurrentStatus}
              />
              <span>디자인 보유</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="currentStatus"
                value="개발환경 보유"
                onChange={handleCurrentStatus}
              />
              <span>개발환경 보유</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>
              개발을 요청하실 기능을 모두 선택해주세요.
              <span>기능별 하나씩 선택 가능</span>
            </FormTitle>
            <br />
            <SubTitle>기본 기능</SubTitle>
            <Select>
              <Input
                type="radio"
                name="requiredFunction"
                value="갤러리"
                onChange={handleRequiredFunction}
              />
              <span>갤러리</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="requiredFunction"
                value="게시판"
                onChange={handleRequiredFunction}
              />
              <span>게시판</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="requiredFunction"
                value="일정 관리"
                onChange={handleRequiredFunction}
              />
              <span>일정 관리</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="requiredFunction"
                value="SNS 연동"
                onChange={handleRequiredFunction}
              />
              <span>SNS 연동</span>
            </Select>
            <br />
            <SubTitle>회원 관련 기능</SubTitle>
            <Select>
              <Input
                type="radio"
                name="userRelatedFunction"
                value="회원가입 및 정보관리"
                onChange={handleUserRelatedFunction}
              />
              <span>회원가입 및 정보관리</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="userRelatedFunction"
                value="SNS 간편 로그인"
                onChange={handleUserRelatedFunction}
              />
              <span>SNS 간편 로그인</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="userRelatedFunction"
                value="즐겨찾기"
                onChange={handleUserRelatedFunction}
              />
              <span>즐겨찾기(찜하기/스크랩)</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="userRelatedFunction"
                value="메시지"
                onChange={handleUserRelatedFunction}
              />
              <span>메시지</span>
            </Select>
            <br />
            <SubTitle>커머스 관련 기능</SubTitle>
            <Select>
              <Input
                type="radio"
                name="commerceRelatedFunction"
                value="장바구니"
                onChange={handleCommerceRelatedFunction}
              />
              <span>장바구니</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="commerceRelatedFunction"
                value="배송 관리"
                onChange={handleCommerceRelatedFunction}
              />
              <span>배송 관리</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="commerceRelatedFunction"
                value="PG사 연동"
                onChange={handleCommerceRelatedFunction}
              />
              <span>PG사 연동</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="commerceRelatedFunction"
                value="해외결제"
                onChange={handleCommerceRelatedFunction}
              />
              <span>해외결제(페이팔)</span>
            </Select>
            <br />
            <SubTitle>사이트 환경</SubTitle>
            <Select>
              <Input
                type="radio"
                name="siteEnvironment"
                value="다국어 지원"
                onChange={handleSiteEnvironment}
              />
              <span>다국어 지원</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="siteEnvironment"
                value="관리자 페이지"
                onChange={handleSiteEnvironment}
              />
              <span>관리자 페이지</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="siteEnvironment"
                value="보안"
                onChange={handleSiteEnvironment}
              />
              <span>보안(SSL 인증)</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="siteEnvironment"
                value="GA 설치"
                onChange={handleSiteEnvironment}
              />
              <span>GA 설치</span>
            </Select>
          </Box>
          <Box>
            <FormTitle>솔루션 이용 여부를 체크해주세요.</FormTitle>
            <br />
            <Select>
              <Input
                type="radio"
                name="solutionInUse"
                value="솔루션 이용"
                onChange={handleSolutionInUse}
              />
              <span>솔루션 이용</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="solutionInUse"
                value="솔루션 이용하지 않고 자체 개발"
                onChange={handleSolutionInUse}
              />
              <span>솔루션 이용하지 않고 자체 개발</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="solutionInUse"
                value="상관 없음(모름)"
                onChange={handleSolutionInUse}
              />
              <span>상관 없음(모름)</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>반응형 적용 여부를 체크해주세요.</FormTitle>
            <br />
            <Select>
              <Input
                type="radio"
                name="reactable"
                value="반응형"
                onChange={handleReactable}
              />
              <span>반응형</span>
            </Select>
            <Select>
              <Input
                type="radio"
                name="reactable"
                value="비반응형"
                onChange={handleReactable}
              />
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
            <TextArea ref={description} />
            <div>
              <input
                type="file"
                accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv"
                onChange={handleUpload}
              />
            </div>
            <br />
            <hr />
            <br />
            <FormTitle>프로젝트의 예산을 기재해주세요.</FormTitle>
            <br />
            <BudgetWrapper>
              <InputBudget>
                <Input
                  type="number"
                  min="0"
                  placeholder="최소 10,000 원"
                  ref={budget}
                />
              </InputBudget>
              <BtnBudget onClick={submitBudget}>입력</BtnBudget>
            </BudgetWrapper>
            <Select>
              <Input
                type="checkbox"
                name="taxInvoice"
                value="true"
                onClick={changeTax}
              />
              <span>세금계산서 발행 필요시, 체크해주세요</span>
            </Select>
            <br />
            <hr />
            <br />
            <FormTitle>지원자 모집 마감 일자를 선택해주세요.</FormTitle>
            <br />
            <Input type="date" ref={volunteerDate} />
            <br />
            <br />
            <FormTitle>프로젝트의 작업 마감 일자를 선택해주세요.</FormTitle>
            <br />
            <Input type="date" ref={dueDate} />
            <br />
            <br />
            <FormTitle>작업 기간을 입력해주세요. (일 단위)</FormTitle>
            <br />
            <Input type="number" min="1" ref={workingPeriod} />
            <br />
            <hr />
            <br />
            <SubmitTitle>
              아래의 완료버튼을 눌러서 프로젝트를 등록해주세요!
            </SubmitTitle>
            <br />
            <br />
            <BtnSubmit onClick={submit}>프로젝트 등록 완료하기</BtnSubmit>
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
const InputBox = styled.div`
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
    right: 0px;
    cursor: pointer;
  }
`;
const BudgetWrapper = styled.div`
  display: flex;
`;
const InputBudget = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid #e4e5ed;
  display: flex;
  align-items: center;
  padding-left: 20px;
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
    right: 0px;
    cursor: pointer;
  }
`;
const BtnBudget = styled.div`
  width: 100px;
  height: 40px;
  margin-left: 10px;
  background: #e4e5ed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  :hover {
    background: #cdced3;
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
  width: 430px;
  height: 250px;
  resize: none;
  border: 1px solid #e4e5ed;
  color: #4d4d4d;
  font-weight: 500;
  font-size: 15px;
  padding: 10px;
  :focus {
    outline-style: none;
  }
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
  accent-color: #ffd400;
`;

export default EditProject;
