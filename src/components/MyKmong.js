import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyProjectList, deleteMyProjectList } from "../redux/modules/MyPageSlice";

const MyKmong = () => {
  // 지용 시작
  const MyList = useSelector((state) => state.MyPage.list);
  const token = localStorage.getItem("access_token");
  const MyListCnt = MyList.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log(MyList);
  // MyPage 뿌려주기
  useEffect(()=>{
    dispatch( getMyProjectList( token ) );
  },[]);

  // 금액 천단위로 넣어주기
  const ChangeMoney = ( money ) => {
    if( money ){
      return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
  }
  // 수정 버튼 클릭시 동작
  const EditProjectOnClick = ( id ) => {
    navigate(`/edit/${id}`);
  }

  // 삭제 버튼 클릭시 동작
  const DeleteProjectOnClick = ( id ) => {
    dispatch( deleteMyProjectList( { id, token } ) );
  }

  const [toggle, setToggle] = React.useState(true);

  return (
    <>
      <MyKmongWrap>
        <SideMenuWrap toggle={toggle}>
          <div className="user_info">
            <img
              src="https://kmong.com/img/tools/default_profile@2x.png"
              className="user_image"
              alt=""
            />
            <div className="user_nickname">항해중인선원77</div>
          </div>
          <div className="side_menu_title">마이크몽</div>

          <ul className="my_project">
            <div
              id="MyProject"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              내 프로젝트
            </div>
            <div className="li_box">
              <li>전체 ({MyListCnt})</li>
              <li>승인대기중</li>
              <li>요청중</li>
              <li>마감중</li>
              <li>비승인</li>
            </div>
          </ul>
        </SideMenuWrap>
        {MyList && MyList.map( ( item, index ) => {
          return (
            <ContentWrap project={item} key={index}>
          <div className="title_wrap">내 프로젝트</div>
          <div className="project_wrap">
            <div className="project_image"></div>
            <div className="project_content">
              <div className="title_category">
                <div className="category_wrap">
                  <span id="project_id">#{item.project_id}</span>
                  <span id="project_category">
                    {item.bigCategory} / {item.smallCategory}
                  </span>
                </div>
                <p id="project_title">{item.title}</p>
              </div>
              <div className="amount_wrap">
                <span>예산</span>
                <span id="amount">
                  <b>{ChangeMoney(item.budget)}</b>원
                </span>
              </div>
            </div>
            <div className="button_wrap">
              <button id="project_edit" onClick={ () => EditProjectOnClick( item.project_id ) }>수정</button>
              <button id="project_delete" onClick={ () => DeleteProjectOnClick( item.project_id ) }>삭제</button>
            </div>
          </div>
        </ContentWrap>
          )
        })}
        {/* <ContentWrap getProject={getProject}>
          <div className="title_wrap">내 프로젝트</div>
          <div className="project_wrap">
            <div className="project_image"></div>
            <div className="project_content">
              <div className="title_category">
                <div className="category_wrap">
                  <span id="project_id">#{getProject.project_id}</span>
                  <span id="project_category">
                    {getProject.bigCategory} / {getProject.smallCategory}
                  </span>
                </div>
                <p id="project_title">{getProject.title}</p>
              </div>
              <div className="amount_wrap">
                <span>예산</span>
                <span id="amount">
                  <b>{getProject.budget}</b>원
                </span>
              </div>
            </div>
            <div className="button_wrap">
              <button id="project_edit">수정</button>
              <button id="project_delete">삭제</button>
            </div>
          </div>
        </ContentWrap> */}
      </MyKmongWrap>
    </>
  );
};

let MyKmongWrap = styled.div`
  display: flex;
  width: 1170px;
  height: 800px;
  margin: 60px auto;
`;

let SideMenuWrap = styled.div`
  flex-basis: 300px;
  margin-right: 25px;
  text-align: center;

  .user_nickname {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 18px;
    color: 4d4d4d;
  }

  .side_menu_title {
    font-size: 19px;
    color: #333;
    box-sizing: border-box;
    padding-bottom: 18px;
    padding-left: 30px;
    text-align: left;
    border-bottom: 2px solid #000;
  }

  .my_project {
    list-style: none;
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
    display: ${(props) => (props.toggle ? "block" : "none")};
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
`;

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
    background-image: url(${(props) => props.project.imageUrl});
  }

  .project_content {
    flex-basis: 440px;
    margin-right: 40px;
    height: 100%;
    box-sizing: border-box;
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

  #project_id,
  #project_category {
    font-size: 12px;
    color: #727585;
  }

  #project_title {
    font-size: 14px;

    color: #303441;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-wrap: normal;
    width: 440px;
    overflow: hidden;
    margin-top: 12px;
  }

  #project_id {
    margin-right: 20px;
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
      width: 48%;
      color: #9a9ba7;
      background-color: #e4e5ed;
      border: none;
      cursor: pointer;
      :hover {
        background: rgb(255, 212, 0);
        transition: 0.5s ease;
        cursor: pointer;
      }
    }
  }
`;


export default MyKmong;
