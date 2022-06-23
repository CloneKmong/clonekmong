import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { getMainProjectList } from "../redux/modules/KmongSlice"

const HomeRegistedList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const projectList = useSelector( state => state.Kmong.list );
 
    React.useEffect(()=>{
      console.log("마운트 됨");
      dispatch( getMainProjectList() );
    },[]);

    const MainProjectList = () => {

      const MakeBudget = (budget) => {
        if(budget) {
          return (budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
      }

    const GoDtail = (item) => {
      const id = item.project_id
      navigate(`/detail/${id}`);
      window.scrollTo(0, 0);
    }

      return (
        <>
        {projectList.map((item, index) => (
          <MainRegistedList key={index}>
          <MainRegistedListImg />
          <MainRegistedListContentWrap>
            <MainRegistedListContentTitle onClick={()=>GoDtail(item)}>
              {item.title}
            </MainRegistedListContentTitle>
            <MainRegistedListContentBody>
              {item.discription}
            </MainRegistedListContentBody>

            <MainRegistedListContentBottom>
              <MainRegistedIconWrap>
                <MainRegistedOutWorkImg />
                <span>외주</span>
              </MainRegistedIconWrap>
              <MainRegistedBottonDiv />
              <MainRegstedMoneyWrap>
                <MainRegstedMoneyImg />
                <span>
                  {MakeBudget(item.budget)}
                  원
                </span>
              </MainRegstedMoneyWrap>
              <MainRegistedBottonDiv />
              <MainRegstedTimeWrap>
                <MainRegstedTimeImg />
                <span>{item.workingPeriod}일</span>
              </MainRegstedTimeWrap>
            </MainRegistedListContentBottom>
          </MainRegistedListContentWrap>
        </MainRegistedList>
        ))}
        </>
        
      )

      
    }

    return (<MainRegistedListWrap>
        <MainRegistedListTitle>등록된 프로젝트</MainRegistedListTitle>
        <MainRegistedListGridWrap>
          <MainRegistedSectionTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegistedSectionTitle>IT·프로그래밍</MainRegistedSectionTitle>
              <MainRegistedSectionUnderLine />
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>디자인</MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }} />
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>
                영상·사진·음향
              </MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>마케팅</MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>번역·통역</MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>문서·글쓰기</MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>
                비즈니스컨설팅
              </MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
            <MainRegistedTitleWrap>
              <MainRegisteedSectionTitleNohover>레슨·실무교육</MainRegisteedSectionTitleNohover>
              <MainRegistedSectionUnderLine style={{ visibility:"hidden" }}/>
            </MainRegistedTitleWrap>
          </MainRegistedSectionTitleWrap>
          <MainRegistedDivUnderLine />
          <MainRegistedListsWrap>
            <MainProjectList />
          </MainRegistedListsWrap>
        </MainRegistedListGridWrap>
        <MainRegistedShowListsBtn onClick={()=> {navigate(`/list`); window.scrollTo(0, 0);}}>
          등록된 프로젝트 전체보기
        </MainRegistedShowListsBtn>
      </MainRegistedListWrap>);
}

export default HomeRegistedList;

const MainRegistedListWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainRegistedListTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  padding: 20px 0;
  align-self: flex-start;
`;

const MainRegistedListGridWrap = styled.div``;

const MainRegistedSectionTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0 15px; */
`;

const MainRegistedTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainRegistedSectionTitle = styled.div`
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 3px;
`;

const MainRegisteedSectionTitleNohover = styled.div`
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 3px;
  &:hover{
    font-weight: 600;
  }
`;

const MainRegistedSectionUnderLine = styled.div`
  background-color: rgb(75, 148, 250);
  width: 138px;
  height: 4px;
  /* cursor: pointer; */
`;

const MainRegistedDivUnderLine = styled.div`
  background-color: rgb(242, 243, 247);
  width: 1100px;
  height: 1px;
`;

const MainRegistedListsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  gap: 20px;
`;

const MainRegistedList = styled.div`
  border: 1px solid rgb(228, 229, 237);
  border-radius: 8px;
  width: 490px;
  padding: 24px;
  height: 120px;
  display: flex;
  align-items: center;
  &:hover {
    border: 1px solid rgb(154, 155, 167);
  }
`;

const MainRegistedListImg = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://d2v80xjmx68n4w.cloudfront.net/assets/mobile/modules/custom-project/category-images/custom_project_category_46_1.jpg);
  /* background-image */
`;

const MainRegistedListContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 370px;
  padding: 15px 0;
`;

const MainRegistedListContentTitle = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

const MainRegistedListContentBody = styled.div`
  font-size: 14px;
  color: rgb(48, 52, 65);
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0px;
`;

const MainRegistedListContentBottom = styled.div`
  background-color: rgb(250, 250, 252);
  display: flex;
  border-radius: 4px;
  padding: 4px 12px;
  margin-top: 10px;
  align-items: center;
`;

const MainRegistedBottonDiv = styled.div`
  border-right: 1px solid rgb(228, 229, 237);
  height: 15px;
  margin: 0px 12px;
`;

const MainRegistedIconWrap = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-size: 14px;
    font-weight: 600;
    color: rgb(48, 52, 65);
  }
`;

const MainRegistedOutWorkImg = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Ficon%2Fic-work-outline%402x.png&w=320&q=75);
`;

const MainRegstedMoneyWrap = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-size: 14px;
    font-weight: 500;
    color: rgb(48, 52, 65);
  }
`;

const MainRegstedMoneyImg = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Ficon%2Fic_cost-won%402x.png&w=320&q=75);
`;

const MainRegstedTimeWrap = styled.div`
  display: flex;
  align-items: center;
  & span {
    font-size: 14px;
    font-weight: 600;
    color: rgb(48, 52, 65);
  }
`;

const MainRegstedTimeImg = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Ficon%2Fic_period-won%402x.png&w=320&q=75);
`;

const MainRegistedShowListsBtn = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 270px;
  font-size: 16px;
  font-weight: 500;
  background-color: rgb(255, 212, 0);
  border-radius: 5px;
  &:hover {
    background-color: rgb(245, 193, 38);
  }
  cursor: pointer;
  transition: background-color 0.3s ease 0s, border-color 0.3s ease 0s;
`;

const MainProReviewWrap = styled.div`
  padding: 80px 0px;
  height: 640px;
  background-color: rgb(75, 148, 250);
`;

const MainProReviewContentWrap = styled.div`
  width: 1100px;
  margin: 0 auto;
  text-align: center;
  & h1{
    color: white;
  }
  & p{
    color: white;
    font-weight: 400;
  }
`;