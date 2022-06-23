import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("access_token")

  const ClickLogOut = () => {
    localStorage.removeItem("access_token");
    window.location.replace('/');
 };

  return (
    <HeaderContainer>
      <HeaderFirstWrap>
        <HeaderFirstLeftWrap onClick={() => navigate(`/`)}>
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
              fillRule="evenodd"
            ></path>
          </svg>
          <HeaderFirstLeftVline />
          <HeaderFirstLeftText
            onClick={() => {
              navigate("/");
            }}
          >
            엔터프라이즈
          </HeaderFirstLeftText>
        </HeaderFirstLeftWrap>
        <HeaderFirstRightWrap>
          {/* 로그인 시 */}

          { token ? (<>
          <HeaderLogOut onClick={ClickLogOut}>로그아웃</HeaderLogOut>
          <HeaderMyKmong onClick={() => navigate(`/mypage`)}>마이크몽</HeaderMyKmong>
          <HeaderIcon src="https://kmong.com/img/tools/main_user_gray.png"/>
          </>)
        
        :
        (<>
        <HeaderLogin onClick={() => navigate(`/login`)}>로그인</HeaderLogin>
          <HeaderSignUp onClick={() => navigate(`/signup`)}>
            무료 회원가입
          </HeaderSignUp>
          </>)
        
        }
          

          {/* 로그 아웃시 */}
          
        </HeaderFirstRightWrap>
      </HeaderFirstWrap>
      <HeaderSecondWrap>
        <HeaderSecondLeftWrap>
          <HeaderHomeWrap>
            <HeaderHome underBar={props.underBar} onClick={() => navigate(`/`)}>
              홈
            </HeaderHome>
            <HeaderHomeUnderLine underBar={props.underBar} />
          </HeaderHomeWrap>
          <HeaderListsWrap>
            <HeaderLists
              underBar={props.underBar}
              onClick={() => navigate(`/list`)}
            >
              프로젝트 리스트
            </HeaderLists>
            <HeaderListsUnderLine underBar={props.underBar} />
          </HeaderListsWrap>
        </HeaderSecondLeftWrap>
        {/* <HeaderHiddenMessage>지금 가입하면 <span style={{ fontWeight:"bold" }}>10만원</span> 혜택</HeaderHiddenMessage> */}
      </HeaderSecondWrap>
    </HeaderContainer>
  );
};
// header 전체 div
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: auto;
`;
const HeaderFirstWrap = styled.div`
  width: 1200px;
  height: 74px;
  display: flex;
  justify-content: space-between;
`;

const HeaderFirstLeftWrap = styled.div`
  display: flex;
  height: 74px;
  align-items: center;
  margin-left: 15px;
`;

const HeaderFirstLeftVline = styled.div`
  border-left: thin solid rgb(228, 229, 237);
  margin-left: 10px;
  height: 25px;
`;

const HeaderFirstLeftText = styled.div`
  margin-left: 10px;
  font-weight: 500;
  cursor: pointer;
`;

const HeaderFirstRightWrap = styled.div`
  display: flex;
  height: 74px;
  align-items: center;
  margin-right: 15px;
`;

const HeaderLogOut = styled.div`
  padding: 0 22px;
  font-weight: 500;
  cursor: pointer;
`;

const HeaderMyKmong = styled.div`
  padding: 0 22px;
  font-weight: 500;
  margin-right: 18px;
  cursor: pointer;
`;

const HeaderIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const HeaderLogin = styled.div`
  margin-right: 40px;
  padding: 10px 20px;
  /* border: 1px solid purple; */
  border-radius: 5px;
  background-color: transparent;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: rgba(48, 52, 65, 0.1);
  }
`;

const HeaderSignUp = styled.div`
  padding: 10px 20px;
  /* border: 1px solid purple; */
  border-radius: 5px;
  background-color: rgb(255, 212, 0);
  font-weight: 500;
  &:hover {
    background-color: rgb(245, 193, 38);
  }
  cursor: pointer;
`;

const HeaderSecondWrap = styled.div`
  width: 1100px;
  height: 40px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
`;

const HeaderSecondLeftWrap = styled.div`
  display: flex;
  height: 40px;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

const HeaderHome = styled.div`
  font-weight: ${(props) => (props.underBar ? "700" : "500")};
  padding: 8px 0;
  cursor: pointer;
`;

const HeaderHomeUnderLine = styled.div`
  background-color: rgb(255, 212, 0);
  width: 30px;
  height: 3px;
  cursor: pointer;
  visibility: ${(props) => (props.underBar ? "visible" : "hidden")};
`;

const HeaderHomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover ${HeaderHome} {
    font-weight: 700;
  }

  &:hover ${HeaderHomeUnderLine} {
    visibility: visible;
  }
`;

const HeaderLists = styled.div`
  padding: 8px 0;
  font-weight: ${(props) => (props.underBar ? "500" : "700")};
  cursor: pointer;
  &:hover {
    /* font-weight: 700; */
  }
`;

const HeaderListsUnderLine = styled.div`
  background-color: rgb(255, 212, 0);
  width: 117px;
  height: 3px;
  visibility: ${(props) => (props.underBar ? "hidden" : "visible")};

  cursor: pointer;
`;

const HeaderListsWrap = styled.div`
  margin-left: 30px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover ${HeaderLists} {
    font-weight: 700;
  }

  &:hover ${HeaderListsUnderLine} {
    visibility: visible;
  }
`;

const HeaderHiddenMessage = styled.div`
  margin-right: 0px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 3px gray;
`;

export default Header;
