import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
      <>
      <LoginWrap>
        <LoginModal>
          <Imgbox>
          <img src="https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fdesktop%2Flogin-img-great-park-3-v2.jpg&w=1200&q=75" />
         <p>현재 2,130,221명의 회원이 크몽에서 활동하고 있습니다. <br/>
            2,130,221번째 크몽회원이 되어보세요 : ) </p>
          
          </Imgbox>
      
         <LoginBox>
          <div className="login_wrap">
          <h1>로그인</h1>
          <div className="input_wrap">
            <input type="email" placeholder="이메일을 입력해 주세요." 
            className="login_input"/></div>
          <div className="input_wrap">
            <input type="password" placeholder="비밀번호를 입력해 주세요."
            className="login_input" /></div>

            <button>로그인</button>
        
              <div className="under_box">
                <label>
                  <input type="checkbox" className="remember_check"></input>
                  <span>로그인 유지</span>
                </label>
                <div className="search">
                아이디•비밀번호 찾기
                  </div>
              </div>
              </div>
              <h3>SNS계정으로 간편하게 로그인하세요.</h3>

              <SocialBox>
              <div className="social_circle naver"><img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/naver_logo.png" width="32" height="32" alt="소셜 로고" /></div>

              <div className="social_circle kakao"><img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/kakao_logo.png" width="32" height="32" alt="소셜 로고"/></div>

              <div className="social_circle facebook"><img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/facebook_logo_white.png" width="32" height="32" alt="소셜 로고"/></div>

              <div className="social_circle google"><img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/google_logo.png" width="32" height="32" alt="소셜 로고" /></div>

              <div className="social_circle apple"><img src="https://d2v80xjmx68n4w.cloudfront.net/assets/icon/apple_logo.png" width="20" height="24" alt="소셜 로고" /></div>
                
              </SocialBox>

              <hr/>

              <SignUpBox>
                <p className="signup_text">크몽의 회원이 되시면
                  <br/>
                  <b>10만원 할인혜택</b>
                  을 드립니다.
                </p>
                <button className="signup_button">
                  크몽 회원가입 하기
                </button>
              </SignUpBox>
        

         </LoginBox>

        </LoginModal>
      </LoginWrap>
      </>
    )
}

let LoginWrap = styled.div`
  position: fixed;
   width: 100%;
   height: 100%;
   z-index: 11;
   overflow-y: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.5);
    div {
      box-sizing: border-box;
    }
`

let LoginModal = styled.div`
  /* width:1024px;
  max-width: 1024px;
  height: 656px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box; */

  width: 100%;
    position: relative;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 12%) 0px 3px 6px -4px, rgb(0 0 0 / 8%) 0px 6px 16px 0px, rgb(0 0 0 / 5%) 0px 9px 28px 8px;
    display: flex;
    flex-direction: row;
    padding: 0px;
    text-align: left;
    height: 656px;
    margin: 64px;
    max-width: 1024px;
    overflow: hidden;

    h3 {
    margin: 0px;
    font-size: 14px;
    color: rgb(48, 52, 65);
    text-align: center;
 }
   hr {
    height: 1px;
    margin: 0;
    border: none;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    background-color: rgba(0, 0, 0, 0.12);
   }

`

let Imgbox = styled.div`
width: 600px;
height: 656px;
background-color:red;
display: flex;
flex: 0 0 600px;
overflow: hidden;
position: relative;
flex-direction: column;

  
img { 
  position: absolute; 
  inset: 0px; 
  box-sizing: border-box; 
  padding: 0px; 
  border: none;
  margin: auto; 
  display: block;  
  width: 100%;
  height: 100%;
 
  }

  p {
    font-size: 18px;
    z-index: 1;
    color: #fff;
    position: absolute;
    bottom: 40px;
    left: 40px;
    line-height: 30px;
    margin: 0px;
  }
`

let LoginBox = styled.div`
    padding: 40px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);

    .login_wrap {
      flex: 1 1 auto;
    }

    .input_wrap {
      width: 100%;
      padding: 0 0 16px;
      
    }

    .login_input {
    width: 100%;
    border: 1px solid rgb(228, 229, 237);
    border-radius: 4px;
    transition: background-color 0.2s ease 0s, border-color 0.2s ease 0s;
    display: inline-flex;
    flex-direction: row;
    overflow: hidden;
    cursor: text;
    background-color: rgb(255, 255, 255);
    color: rgb(48, 52, 65);
    height: 52px;
    font-size: 16px;
    padding: 0px 16px;
    min-width: 80px;
    box-sizing: border-box;
    outline: none;
    }

    .login_input:hover {
      border-color: rgb(154, 155, 167)
    }

    button {
      outline: none;
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 4px;
    line-height: 1;
    font-weight: 500;
    transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    max-width: 100%;
    height: 52px;
    font-size: 16px;
    padding: 0px 24px;
    min-width: 80px;
    background-color: rgb(255, 212, 0);
    border-color: rgb(255, 212, 0);
    color: rgb(48, 52, 65);
    }

    button:hover {
      background-color: rgb(245, 193, 38);
    border-color: rgb(245, 193, 38);
    }

    .under_box {
      margin-top: 12px;
      display: flex;
    }

    label {
      font-size: 14px;
      color: rgb(48, 52, 65);
    }

    .remember_check {
      width: 14px;
      height: 14px;
    }

    .remember_check:checked {
      background-color: rgb(255, 212, 0);;
        border-color: rgb(255, 212, 0);
        color: white;
    }

    .search {
      margin-left: auto;
      font-size: 14px;
    }


`

let SocialBox = styled.div`

display: flex;
flex: 1 1 auto;
-webkit-box-pack: justify;
justify-content: space-between;
width: 100%;
margin-top: 16px;

 
 .social_circle {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
    text-decoration: none;
 }

 .naver {
  background-color: rgb(30, 200, 0);
 }

 .kakao {
  background-color: rgb(249, 224, 0);
 }

 .facebook {
  background-color: rgb(24, 119, 242);
 }

 .google {
  background-color: rgb(248, 249, 253);
 }

 .apple {
  background-color: rgb(0, 0, 0);
 }
`

let SignUpBox = styled.div`

 .signup_text {
  margin: 24px 0px;
    color: rgb(48, 52, 65);
    font-weight: 400;
 }

 .signup_button {
  background-color: transparent;
    border-color: rgb(17, 106, 212);
    color: rgb(17, 106, 212);
 } 

 .signup_button:hover {
  border-color: rgb(17, 106, 212);
  background-color: rgba(17, 106, 212, 0.1);
 }
`

export default Login;