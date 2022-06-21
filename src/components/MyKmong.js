import React from "react";
import styled from "styled-components";

const MyKmong = () => {

  const [toggle, setToggle] = React.useState(true);

   return (
    <>
    <MyKmongWrap>
   
      <SideMenuWrap toggle={toggle}>
        <div className="user_info">
          <img src="https://kmong.com/img/tools/default_profile@2x.png" className="user_image"/>
          <div className="user_nickname">
          항해중인선원77
          </div>
        </div>
        <div className="side_menu_title">마이크몽</div>

        <ul className="my_project"><div id="MyProject" onClick={() => {setToggle(!toggle)}}>내 프로젝트</div>
        <div className="li_box">
          <li>전체</li>
          <li>승인대기중</li>
          <li>요청중</li>
          <li>마감중</li>
          <li>비승인</li>
          </div>
        </ul>

      </SideMenuWrap>
      <ContentWrap>
      <div className="title_wrap">
                내 프로젝트
            </div>
        <div className="project_wrap">
        <div className="project_image"></div>
        <div className="project_content">
          <div className="title_category">
            <div className="category_wrap">
            <span id="project_id">#777777</span>
            <span id="project_category">IT·프로그래밍 / 웹사이트 신규 제작</span></div>
            <p id="project_title">크몽 사이트 클론 중입니다</p>
          </div>
          <div className="amount_wrap">
            <span>예산</span>
            <span id="amount"><b>20,000,000</b>원</span>
          </div>
        </div>
        <div className="button_wrap">
            <button id="project_edit">수정</button>
            <button id="project_delete">삭제</button>
          </div>
        </div>

      </ContentWrap>

    </MyKmongWrap>
    </>
   )
}

let MyKmongWrap = styled.div`
display: flex;
width:1170px;
height: 800px;
margin:60px auto;
`

let SideMenuWrap = styled.div`
flex-basis: 300px;
margin-right: 25px;
text-align: center;


 .user_nickname {
  margin-top: 20px;
  margin-bottom: 30px;
  font-size:18px;
  color: 4d4d4d;
 }

 .side_menu_title {
  font-size:19px;
  color:#333;
  box-sizing: border-box;
  padding-bottom:18px;
  padding-left:30px;
  text-align:left;
  border-bottom:2px solid #000;
 }

 .my_project {
  list-style:none;
  text-align: left;
  padding-left: 30px;
 }

 #my_project {
  line-height: 36px;
  font-size: 14px;
  color: #222;
  font-weight: bold;
  cursor: pointer;
 }

 .li_box {
  margin-top: 10px;
  display: ${(props) => props.toggle ? "block" : "none"};
 }


 .my_project li {
  font-size: 13px;
  line-height: 30px;
  margin-left: 10px;
  color: #999;
  display: block;
 }

 .my_project li:nth-of-type(1) {
  font-size: 13px;
  line-height: 30px;
  margin-left: 10px;
  color: #222;
  font-weight: bold;
 }

 .my_project li:hover {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
 }
`


let ContentWrap = styled.div`
flex: 1;


.title_wrap {
  font-size: 18px;
    font-weight: 700;
    color: #303441;
    margin-bottom: 16px;
}



.project_wrap {
  height: 160px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid #e4e5ed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;


}
  

.project_image {
    flex: 1;
    margin-right: 20px;
    height: 100px;
    overflow: hidden;
    border-radius: 4px;
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  background-image: url(https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/custom-project/category-images/custom_project_category_42_4.jpg);
  
}

.project_content {
    flex-basis: 440px;
    margin-right: 40px;
    height: 100%;
    box-sizing:border-box;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.title_category {

  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
}
.category_wrap {
    width: 440px;
    overflow: hidden;
    margin-top: 12px;
}

#project_id, #project_category {
  font-size:12px;
  color:#727585;
  
}

#project_title {
  font-size:14px;

  color: #303441;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-wrap: normal;
  width: 440px;
  overflow: hidden;
  margin-top: 12px;
}

#project_id {
  margin-right:20px;
}

#project_title {
  font-size: 14px;
}

.amount_wrap {
  text-align: right;
  font-size: 14px;

}

#amount {
  font-size: 18px;
  margin-left: 5px;
}

.button_wrap {
  flex-basis: 180px;
  position: relative;

  button {
    padding: 13px 15px;
    font-size: 16px;
    margin-top: 44px;
    margin-right: 1.5%;
    width:48%;
    color: #9a9ba7 ;
    background-color: #e4e5ed ;
    border:none;
    cursor: pointer;
    
  }
}


`

export default MyKmong;