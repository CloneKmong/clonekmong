import React from "react";
import styled from "styled-components";

const SignUp = () => {


  const jobList = ["프리랜서", "직장인", "소상공인", "스타트업 창업자", "대학(원)생", "취업준비생"]
  const businessList = ["쇼핑몰", "마케팅/광고 에이전시", "음식·주점", "IT 개발", "콘텐츠", "예술·스포츠·여가", "제조업", "미용·뷰티", "병의원·제약", "금융·보험", "학원·교육", "여행·숙박", "부동산·분양", "기타"]
  const interestList = ["디자인", "IT·프로그래밍", "영상·사진·음향", "마케팅", "번역·통역", "문서·글쓰기", "비즈니스 컨설팅", "취업·입시", "투잡·노하우", "운세", "직무역량", "주문제작", "세무·법무·노무", "취미", "생활서비스", "심리상담", "VOD", "전자책"]


 
    return (
      <>
      <h2>Kmong</h2>
      <SignUpWrap>
      <h1>딱 이것만 체크하면 가입 완료!</h1>

      {/***** 이메일 *****/}

      <label>
        <div>이메일*</div>
        <div><input type="email" placeholder="이메일을 입력해 주세요."></input></div>
      </label>

      {/***** 비밀번호 *****/}

      <label>
        <div>비밀번호*</div>
        <div><input type="password" placeholder="비밀번호를 입력해 주세요. (6자리 이상)"></input></div>
        <div><input type="password" placeholder="비밀번호를 한번 더 입력해 주세요."></input></div>
      </label>

      {/***** 직업 *****/}

      <label>
        <div>직업*</div>
        <div><select name="job">
        <option value="직업을 선택해 주세요." disabled selected>직업을 선택해 주세요.</option>
        {jobList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div>
      </label>

      {/***** 비즈니스 *****/}

      <label>
        <div>비즈니스 분야*</div>
        <div><select name="job">
        <option value="비즈니스 분야를 선택해 주세요." disabled selected>비즈니스 분야를 선택해 주세요.</option>
        {businessList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div>
      </label>

      {/***** 관심사 *****/}

      <label>
        <div>관심사 선택(중복 선택 가능)*</div>
        <div><select name="job">
        <option value="관심사를 선택해 주세요." disabled selected>관심사를 선택해 주세요.</option>
        {interestList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select></div>
      </label>

      {/***** 동의 *****/}

      <div>
        <div>모두 동의합니다.</div>
        <div><u>서비스 이용약관</u>에 동의합니다.</div>
        <div><u>개인정보 수집/이용</u>에 동의합니다.</div>
        <div>이벤트 할인 혜택 알림 수신에 동의합니다. (선택)</div>
        <div>장기 미접속 시 계정 활성 상태 유지합니다. (선택)</div>
      </div>

      {/***** 완료 버튼 *****/}

      <button>버튼만 누르면 가입완료!</button>

      </SignUpWrap>

      <p>크몽은 회원님의 원활한 서비스 이용에 필요한 정보를<br /> 적절한 전자적 수단을 통해 제공하고 있습니다.</p>
      
      </>
    )
}

let SignUpWrap = styled.div`
width:560px;
height:1030px;
padding:56px 80px;
margin: 0 auto;
`

export default SignUp;