import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <HeaderLeftWrap>
          <svg
            cursor="pointer"
            width="85"
            height="100%"
            viewBox="0 0 85 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M77.69 4.86c3.975 0 7.197 3.215 7.197 7.18l-.002.055h.002c.073 3.477.074 5.769.003 6.874-.108 1.659-.724 3.372-1.947 4.693A7.21 7.21 0 0 1 77.593 26c-2.724 0-4.998-.984-6.653-2.921l-.05-.059 3.226-2.684c.837.997 1.938 1.48 3.478 1.48.9 0 1.67-.358 2.259-.992.515-.556.817-1.263.832-1.813v-.443a7.186 7.186 0 0 1-2.995.65c-3.975 0-7.197-3.214-7.197-7.179 0-3.964 3.222-7.178 7.197-7.178zm-32.13-.225c4.131 0 7.48 3.34 7.48 7.46 0 4.121-3.349 7.462-7.48 7.462s-7.48-3.34-7.48-7.461c0-4.12 3.349-7.461 7.48-7.461zM4.533 0v10.354L8.623 5.2h5.309l-5.337 6.726 5.572 7.065h-4.98L4.534 13.42v5.572H0V0h4.533zM29.92 4.86a6.233 6.233 0 0 1 6.233 6.234v7.897H31.96v-7.908a2.04 2.04 0 0 0-4.074-.152l-.006.152v7.908h-4.193v-7.908a2.04 2.04 0 0 0-4.075-.152l-.005.152v7.908h-4.194v-7.897a6.233 6.233 0 0 1 10.371-4.662 6.201 6.201 0 0 1 4.136-1.571zm31.847 0a6.8 6.8 0 0 1 6.8 6.8v7.331h-4.194v-7.34a2.607 2.607 0 0 0-2.441-2.602l-.165-.006a2.607 2.607 0 0 0-2.602 2.442l-.005.165v7.34l-4.193.001v-7.33a6.8 6.8 0 0 1 6.8-6.8zM45.56 8.818a3.282 3.282 0 0 0-3.287 3.279 3.282 3.282 0 0 0 3.287 3.278 3.282 3.282 0 0 0 3.287-3.278 3.282 3.282 0 0 0-3.287-3.279zm32.13.226a3 3 0 0 0-3.003 2.996 3 3 0 0 0 3.003 2.996 3 3 0 0 0 3.003-2.996 3 3 0 0 0-3.003-2.996z"
              fill="#212224"
              fill-rule="evenodd"
            ></path>
          </svg>
          <HeaderVerticalLine />
          <HeaderText>엔터프라이즈</HeaderText>
        </HeaderLeftWrap>
        {/* 로그인 시 */}
        {/* <HeaderLoginRightWrap>
          <HeaderBtns>메세지</HeaderBtns>
          <HeaderBtns>마이크몽</HeaderBtns>
          <HeaderIcon />
        </HeaderLoginRightWrap> */}
        {/* 로그 아웃시 */}
        <HeaderLoginOutRightWrap>
          <HeaderBtns>로그인</HeaderBtns>
          <HeaderSignupBtns>무료 회원 가입</HeaderSignupBtns>
        </HeaderLoginOutRightWrap>
      </HeaderWrap>
      <HeaderLinkWrap>

      </HeaderLinkWrap>
    </>
  );
};
// 최상한 div
const HeaderWrap = styled.div`
  /* width: 100%; */
  width: 800px;
  height: 70px;
  border: 1px solid green;
  margin: 0px auto;
  align-items: center;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
`;
// 최상단 div 내 왼쪽 로그와 엔터프라이즈 글
const HeaderLeftWrap = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  height: 100%;
  margin-left: 15px;
  /* border: 1px solid red; */
`;
// Logo와 엔터프라이즈 나누는 구분선
const HeaderVerticalLine = styled.div`
  border-left: thin solid #e4e5ed;
  margin-left: 10px;
  margin-right: 10px;
  height: 20px;
`;

// 엔터프라이즈
const HeaderText = styled.span`
  cursor: pointer;
  color: #303441;
`;

// 최상단 div 우측
const HeaderLoginRightWrap = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  height: 100%;
`;

// 최상단 div 버튼
const HeaderBtns = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: #303441;
`;

// 로그인 시 아이콘
const HeaderIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;

// 로그아웃 우측 div
const HeaderLoginOutRightWrap = styled.div`
    display: flex;
    align-items: center;
`;

// 회원가입 버튼
const HeaderSignupBtns = styled.div`
    background-color: #ffd400;
    outline: none;
    cursor: pointer;
    margin-right: 15px;
    margin-left: 50px;
    padding: 10px;
    border-radius: 5px;
`;

// 최상단 아래 div
const HeaderLinkWrap = styled.div`
  width: 800px;
  display: flex;
  padding: 0 16px;
  border : 1px solid black;
`;
// 링크 버튼
const HeaderLinkHomeBtn = styled.div`
width: 50px;

`;

const HeaderLinkHomeBtnBr = styled.br``;

const HeaderLinkListBtn = styled.div`
`;
const HeaderLinkListBtnBr = styled.br``;

const HeaderLink = styled.div``;
export default Header;
