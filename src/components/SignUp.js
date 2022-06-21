import React from "react";
import styled from "styled-components";


const SignUp = () => {


  const jobList = ["프리랜서", "직장인", "소상공인", "스타트업 창업자", "대학(원)생", "취업준비생"]
  const businessList = ["쇼핑몰", "마케팅/광고 에이전시", "음식·주점", "IT 개발", "콘텐츠", "예술·스포츠·여가", "제조업", "미용·뷰티", "병의원·제약", "금융·보험", "학원·교육", "여행·숙박", "부동산·분양", "기타"]
  const interestList = ["디자인", "IT·프로그래밍", "영상·사진·음향", "마케팅", "번역·통역", "문서·글쓰기", "비즈니스 컨설팅", "취업·입시", "투잡·노하우", "운세", "직무역량", "주문제작", "세무·법무·노무", "취미", "생활서비스", "심리상담", "VOD", "전자책"]

  const agrreeList =  [`<u>서비스 이용약관</u>에 동의합니다.`, `<u>개인정보 수집/이용</u>에 동의합니다.`, `이벤트 할인 혜택 알림 수신에 동의합니다. (선택)`, `장기 미접속 시 계정 활성 상태 유지합니다. (선택)`]

  const agreePath = "M7.13322158,10.821143 C6.77457526,10.3822153 6.17602724,10.3624856 5.79632715,10.7770754 C5.41662707,11.1916652 5.39955962,11.8835778 5.75820594,12.3225054 L9.30027691,16.6574524 C9.66714471,17.1064419 10.2826916,17.1152317 10.6590418,16.6768551 L18.2255456,7.86331213 C18.5934618,7.43475954 18.5911847,6.74257073 18.2204597,6.31726515 C17.8497347,5.89195957 17.2509477,5.89459179 16.8830316,6.32314438 L10.004578,14.3352391 L7.13322158,10.821143 Z"

  let [jobState, setJobState] = React.useState(false);
  let [businessState, setBusinessState] = React.useState(false);
  let [interestState, setInterestState] = React.useState(false);

  let [selectJob, setSelectJob] = React.useState("직업을 선택해 주세요.");
  let [selectBusiness, setSelectBusiness] = React.useState("비즈니스 분야를 선택해 주세요.");
  let [selectInterest, setSelectInterest] = React.useState("관심사를 선택해 주세요.");

  const jobopenClose = () => {
    setJobState(!jobState)
    setBusinessState(false)
    setInterestState(false)
  }

  const businessopenClose = () => {
    setBusinessState(!businessState)
    setJobState(false)
    setInterestState(false)
  }
  const interestopenClose = () => {
    setInterestState(!interestState)
    setJobState(false)
    setBusinessState(false)
  }

  


  const JobSelect = () => {
    return (
      <>
      <div className="options-container">
      {jobList.map((item) => (
         <div className="option">
        <input 
        type= "radio" 
        className= "radio" 
        id= {item} 
        name= {item}></input>
        <label for={item} className="select-option" onClick={(item) => (setSelectJob(item.target.innerText), setJobState(!jobState))}>{item}</label>
       </div>
      ))
      }
  </div>
  </>
    )
  }

  const BusinessSelect = () => {

    return (
      <div className="options-container business-container">
      {businessList.map((item) => (
         <div className="option">
        <input 
        type= "radio" 
        className= "radio" 
        id= {item} 
        name= {item}></input>
        <label for={item} className="select-option" onClick={(item) => (setSelectBusiness(item.target.innerText), setBusinessState(!businessState))}>{item}</label>
       </div>
      ))
      }
  </div>
    )
  }

  const InterestGet = (get) => {
    // 시간이 되면 중복까지 구현 도전 
    setSelectInterest(get);
    setInterestState(!interestState);

  }

  const InterestSelect = () => {

    return (
      <div className="options-container business-container">
      {interestList.map((item, index) => (
         <div className="option">
        <input 
        type= "radio" 
        className= "radio" 
        id= {item} 
        name= {item}></input>
        <label for={item} className="select-option" onClick={()=>{InterestGet(item)}}>{item}</label>
       </div>
      ))
      }
  </div>
    )
  }

  const [agreeAllState, setAgreeAllState] = React.useState(false);

  const AgreeAll = () => {
    
    setAgreeAllState(!agreeAllState);
    console.log("지금 상태 => ", agreeAllState);
    

  }

  // 회원가입 유효성 검사

  const email_ref = React.useRef(null);
  const password_ref = React.useRef(null);
  const confirmPassword_ref = React.useRef(null);
  const name_ref = React.useRef(null);

  const [email_msg, set_email_msg] = React.useState(null);
  const [email_check, set_email_check] = React.useState(false);
  const [pw_msg, set_pw_msg] = React.useState(null);
  const [check_pw, set_check_pw] = React.useState(null);
  const [confirm_pw_msg, set_confirm_pw_msg] = React.useState(null);

  const isEmail = (asValue) => {
    var regExp = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return regExp.test(asValue); 
  }

  const checkEmailState = (e) => {
    let id = e.target.value

    if (id === "") {
      set_email_msg("");
    } else if (!isEmail(id)) {
      set_email_msg("이메일 형식이 아닙니다.");
    } else {
      set_email_msg("");
    }
  }

  const checkPwState = (e) => {
    let pw = e.target.value
    if (pw === "" || pw.length >= 6) {
      set_pw_msg("");
      set_check_pw(pw);
    } else if (pw.length < 6) {
      set_pw_msg("6자 이상이어야 합니다.");
    } 
  }

  const confirmPwState = (e) => {
    let confirm_pw = e.target.value
    let get_pw = check_pw
    if (get_pw !== confirm_pw) {
      set_confirm_pw_msg("비밀번호를 확인해 주세요.")
    } else if (get_pw === confirm_pw || confirm_pw === "") {
      set_confirm_pw_msg("")
    } 
  }




 
    return (
      <>
      <KmongTitle><svg width="85" height="100%" viewBox="0 0 85 26" xmlns="http://www.w3.org/2000/svg"><path d="M77.69 4.86c3.975 0 7.197 3.215 7.197 7.18l-.002.055h.002c.073 3.477.074 5.769.003 6.874-.108 1.659-.724 3.372-1.947 4.693A7.21 7.21 0 0 1 77.593 26c-2.724 0-4.998-.984-6.653-2.921l-.05-.059 3.226-2.684c.837.997 1.938 1.48 3.478 1.48.9 0 1.67-.358 2.259-.992.515-.556.817-1.263.832-1.813v-.443a7.186 7.186 0 0 1-2.995.65c-3.975 0-7.197-3.214-7.197-7.179 0-3.964 3.222-7.178 7.197-7.178zm-32.13-.225c4.131 0 7.48 3.34 7.48 7.46 0 4.121-3.349 7.462-7.48 7.462s-7.48-3.34-7.48-7.461c0-4.12 3.349-7.461 7.48-7.461zM4.533 0v10.354L8.623 5.2h5.309l-5.337 6.726 5.572 7.065h-4.98L4.534 13.42v5.572H0V0h4.533zM29.92 4.86a6.233 6.233 0 0 1 6.233 6.234v7.897H31.96v-7.908a2.04 2.04 0 0 0-4.074-.152l-.006.152v7.908h-4.193v-7.908a2.04 2.04 0 0 0-4.075-.152l-.005.152v7.908h-4.194v-7.897a6.233 6.233 0 0 1 10.371-4.662 6.201 6.201 0 0 1 4.136-1.571zm31.847 0a6.8 6.8 0 0 1 6.8 6.8v7.331h-4.194v-7.34a2.607 2.607 0 0 0-2.441-2.602l-.165-.006a2.607 2.607 0 0 0-2.602 2.442l-.005.165v7.34l-4.193.001v-7.33a6.8 6.8 0 0 1 6.8-6.8zM45.56 8.818a3.282 3.282 0 0 0-3.287 3.279 3.282 3.282 0 0 0 3.287 3.278 3.282 3.282 0 0 0 3.287-3.278 3.282 3.282 0 0 0-3.287-3.279zm32.13.226a3 3 0 0 0-3.003 2.996 3 3 0 0 0 3.003 2.996 3 3 0 0 0 3.003-2.996 3 3 0 0 0-3.003-2.996z" fill="#212224" fill-rule="evenodd"></path></svg></KmongTitle>
      <SignUpWrap>
      <h1>딱 이것만 체크하면 가입 완료!</h1>

      {/***** 이메일 *****/}

      <div className="label_wrap">
      <label>
        <div className="signup_label">이메일</div>
        <div><input type="email" placeholder="이메일을 입력해 주세요." ref={email_ref} onChange={checkEmailState}></input></div>
      </label>
      </div>
      <CheckMsg>{email_msg}</CheckMsg>

      {/***** 비밀번호 *****/}

      <div className="label_wrap">
      <label>
        <div className="signup_label">비밀번호</div>
        <div><input type="password" placeholder="비밀번호를 입력해 주세요. (6자리 이상)" ref={password_ref} onChange={checkPwState}></input></div></label></div>
        <CheckMsg>{pw_msg}</CheckMsg>
        
        <div className="label_wrap">
        <label>
        <div><input type="password" placeholder="비밀번호를 한번 더 입력해 주세요." ref={confirmPassword_ref} onChange={confirmPwState}></input></div>
      </label>
      
      </div>
      <CheckMsg>{confirm_pw_msg}</CheckMsg>

      {/***** 직업 *****/}

      

      <div className="label_wrap">
      <label>
        <div className="signup_label">직업</div>
        
        <div className="select-box">
        <div className="selected"
              onClick={jobopenClose}>{selectJob}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="down-svg">
          <path xmlns="http://www.w3.org/2000/svg" d="M16.2207159,6.10870583 C16.5916812,5.74209279 16.5932964,5.14609072 16.2243236,4.77749794 C15.8553508,4.40890516 15.2555125,4.40730026 14.8845472,4.77391329 L7.77928409,11.9296701 C7.40827322,12.2963282 7.40670988,12.7039529 7.7757925,13.0725272 L14.8810556,20.2226181 C15.2500929,20.5911471 15.8499315,20.5926484 16.2208326,20.2259713 C16.5917338,19.8592942 16.5932448,19.2632919 16.2242075,18.8947628 L9.75,12.5010986 L16.2207159,6.10870583 Z" transform="translate(12.000000, 12.500000) scale(1, -1) rotate(-270.000000) translate(-12.000000, -12.500000) "></path>
          </svg>
        </div>
       
         { jobState ? <JobSelect /> : null}
          
        </div>


        {/* <div><select name="job">
        <option className="option" value="직업을 선택해 주세요." disabled selected>직업을 선택해 주세요.</option>
        {jobList.map((item) => (
            <option className="option" value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div> */}
      </label>
      </div>

      {/***** 비즈니스 *****/}

      <div className="label_wrap">
      <label>
        <div className="signup_label">비즈니스 분야</div>
        <div className="select-box">
        <div className="selected"
              onClick={businessopenClose}>{selectBusiness}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="down-svg">
          <path xmlns="http://www.w3.org/2000/svg" d="M16.2207159,6.10870583 C16.5916812,5.74209279 16.5932964,5.14609072 16.2243236,4.77749794 C15.8553508,4.40890516 15.2555125,4.40730026 14.8845472,4.77391329 L7.77928409,11.9296701 C7.40827322,12.2963282 7.40670988,12.7039529 7.7757925,13.0725272 L14.8810556,20.2226181 C15.2500929,20.5911471 15.8499315,20.5926484 16.2208326,20.2259713 C16.5917338,19.8592942 16.5932448,19.2632919 16.2242075,18.8947628 L9.75,12.5010986 L16.2207159,6.10870583 Z" transform="translate(12.000000, 12.500000) scale(1, -1) rotate(-270.000000) translate(-12.000000, -12.500000) "></path>
          </svg>
        </div>
       
         { businessState ? <BusinessSelect /> : null}
          
        </div>



        {/* <div><select name="job">
        <option className="option" value="비즈니스 분야를 선택해 주세요." disabled selected>비즈니스 분야를 선택해 주세요.</option>
        {businessList.map((item) => (
            <option className="option" value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div> */}
      </label>
      </div>

      {/***** 관심사 *****/}

      <div className="label_wrap">
      <label>
        <div className="signup_label">관심사 선택(중복 선택 가능)</div>

        <div className="select-box">
        <div className="selected"
              onClick={interestopenClose}>{selectInterest}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="down-svg">
          <path xmlns="http://www.w3.org/2000/svg" d="M16.2207159,6.10870583 C16.5916812,5.74209279 16.5932964,5.14609072 16.2243236,4.77749794 C15.8553508,4.40890516 15.2555125,4.40730026 14.8845472,4.77391329 L7.77928409,11.9296701 C7.40827322,12.2963282 7.40670988,12.7039529 7.7757925,13.0725272 L14.8810556,20.2226181 C15.2500929,20.5911471 15.8499315,20.5926484 16.2208326,20.2259713 C16.5917338,19.8592942 16.5932448,19.2632919 16.2242075,18.8947628 L9.75,12.5010986 L16.2207159,6.10870583 Z" transform="translate(12.000000, 12.500000) scale(1, -1) rotate(-270.000000) translate(-12.000000, -12.500000) "></path>
          </svg>
        </div>
       
         { interestState ? <InterestSelect /> : null}
          
        </div>

        {/* <div><select name="job">
        <option className="option" value="관심사를 선택해 주세요." disabled selected>관심사를 선택해 주세요.</option>
        {interestList.map((item) => (
            <option className="option" value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div> */}
      </label>
      </div>

      {/***** 동의 *****/}

      <div className="agree_wrap">
        <div className="agree_all"><label onClick={AgreeAll}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg><input type="checkbox" className="all_checkbox"/><span>모두 동의합니다.</span></label></div>
          <div><label id="red_star">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg>
        
        <input type="checkbox" checked={agreeAllState} className="checkBox"/><span>만 14세 이상입니다.</span></label></div>

        <div><label id="red_star">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg>
        
        <input type="checkbox" checked={agreeAllState} className="checkBox"/><span><u>서비스 이용약관</u>에 동의합니다.</span></label></div>
        <div><label id="red_star">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg>
        <input type="checkbox" checked={agreeAllState} className="checkBox"/><span><u>개인정보 수집/이용</u>에 동의합니다.</span></label></div>
        <div><label>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg>
        <input type="checkbox" checked={agreeAllState} className="checkBox"/><span>이벤트 할인 혜택 알림 수신에 동의합니다. (선택)</span></label></div>
        <div><label><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" className="agree_check"><path d="M0 0h24v24H0V0z" fill="none"></path><path d={agreePath}></path></svg>
        <input type="checkbox" checked={agreeAllState} className="checkBox"/><span>장기 미접속 시 계정 활성 상태 유지합니다. (선택)</span></label></div>
      </div>

    

      {/***** 완료 버튼 *****/}

      <button className="signup_button">버튼만 누르면 가입완료!</button>

      </SignUpWrap>



      <KmongInfo>크몽은 회원님의 원활한 서비스 이용에 필요한 정보를<br /> 적절한 전자적 수단을 통해 제공하고 있습니다.</KmongInfo>
      
      </>
    )
}

let KmongInfo = styled.p`
    margin: 24px 0px;
    font-size: 13px;
    color: rgb(154, 155, 167);
    text-align: center;
    line-height: normal;

`

let KmongTitle = styled.div`
margin:0 auto;
position:relative;
display:flex;
width:85px;
`
let CheckMsg = styled.div`
color:red;
height:30px;
position:relative;
box-sizing:border-box;
font-size:13px;
margin-top:-10px;
`

let SignUpWrap = styled.div`
position:relative;
width: 560px;
height: 1080px;
padding: 56px 80px;
margin: 0 auto;
border: 1px solid #e4e5ed;
box-sizing: border-box;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;


 h1 {
  font-size: 30px;
 }

 .label_wrap {
  position:relative;
  padding: 0 0 16px;
 }

 .signup_label {
  font-size:16px;
  color: rgb(85, 89, 105);
  margin-bottom: 8px;
 }

 .signup_label::after {
  content: "*";
  color: rgb(255, 114, 98);
 }

  input[type="email"],input[type="password"] {
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 1px;
    border-style:solid;
    border-color: rgb(228, 229, 237);
    transition: background-color 0.2s ease 0s, border-color 0.2s ease 0s;
    display: inline-flex;
    cursor: text;
    font-size:16px;
    padding: 0 16px;
    min-width: 80px;
    color: rgb(48, 52, 65);
    outline:none;
    box-sizing: border-box;
  }

  input:focus {
    border-color:rgb(154, 155, 167);
  }


  select {
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 1px solid rgb(200, 202, 210);
    transition: background-color 0.2s ease 0s, border-color 0.2s ease 0s;
    display: inline-flex;
    font-size:16px;
    padding: 0 16px;
    min-height: 38px;
    color: rgb(48, 52, 65);
    outline:none;
    box-sizing: border-box;
  }

  select:hover {
    border-color: rgb(154, 155, 167);
  }

 .radio {
  display:none;
 }

 .options-container {
  position:absolute;
  border:1px solid rgb(200, 202, 210);
  border-top:none;
  background-color:#fff;
  width:100%;
  border-radius: 4px;
  max-height: 400px;
  overflow: hidden;
  z-index:1;
  box-shadow : 0 5px 10px -3px grey ;
 }

 .business-container {
  max-height: 300px;
  overflow-y: scroll;
 }


 .selected {
    position: relative;
    width: 100%;
    height: 52px;
    border-radius: 4px;
    border: 1px solid rgb(200, 202, 210);
    line-height:52px;
    display: inline-flex;
    cursor: pointer;
    font-size:16px;
    padding: 0 16px;
    min-width: 80px;
    color: rgb(48, 52, 65);
    outline:none;
    box-sizing: border-box;

 }

 .down-svg {
    fill: #c8cad2;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 12px;
    top: 12px;
 }

 .select-option {
    width: 100%;
    height: 52px;
    line-height:52px;
    display: inline-flex;
    cursor: pointer;
    font-size:16px;
    padding: 0 16px;
    min-width: 80px;
    color: rgb(48, 52, 65);
    outline:none;
    box-sizing: border-box;
  }


  .agree_wrap {
    padding: 16px;
    border: 1px solid #e4e5ed;
    border-radius: 4px;
    margin-bottom: 20px;
     input {
      display:inline-block;
      width: 16px;
      height: 16px;
      margin: 0;
     }

     label {
      font-size: 14px;
     }

     span {
      margin-left: 5px;
     }
  }

  #red_star::after {
  content: " (필수)";
  color: rgb(255, 114, 98);
 }

  .agree_all {
    font-size: 15px;
    padding-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e4e5ed;
    cursor: pointer;
    
  }

  .agree_check {
    margin-right: 8px;
    display: inline-block;
    background-color: rgb(255, 212, 0);
    
    border-radius: 50%;
    padding: 2px;
    line-height: 1.15;
    color:#fff;
    display:none;
  }

  

 

  .signup_button {
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
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
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


`

export default SignUp;