import React from "react";
import "../App.css";
import styled from "styled-components";

const CreateProjectModal = () => {
  const [ isBudget, setIsBudget ] = React.useState( false );

  const onChangeOutWork = ( event ) => {
    if( event.target.checked ){
      setIsBudget( true );
    }
  }

  return (
    <CreateContainer>
      <CreateProjectTitle>프로젝트 의뢰</CreateProjectTitle>
      <TitleFromWrapper>
        <TitleFromTitle>프로젝트 진행 방식을 선택해주세요.</TitleFromTitle>
      </TitleFromWrapper>
      <BodyWrap>
        <ProjectCheckForm>
          <ProjectRadioWrap>
            <label htmlFor="OutWork">외주 : 외부 프리랜서 & 사업자와 프로젝트 진행</label>
            <RadioInput id="OutWork" type="radio" value="OutWork" onChange={onChangeOutWork}/>
          </ProjectRadioWrap>
          { 
          isBudget && <ProjectRadioWrap>
            <label htmlFor="budget">500만원 미만</label>
            <RadioInput id="budget" type="radio" value="budget"/>
          </ProjectRadioWrap>
          }
          
        </ProjectCheckForm>
        <ProjectCheckList></ProjectCheckList>
      </BodyWrap>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const CreateProjectTitle = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #303441;
  padding: 40px 0;
`;

const TitleFromWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
`;

const TitleFromTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #303441;
  width: 100%;
  margin-bottom: 15px;
`;

const BodyWrap = styled.div`
  width: 1200px;
  display: flex;
  column-gap: 20px;
`;

const ProjectCheckForm = styled.div`
  width: 590px;
  margin: 0 auto;
  border: 1px solid black;
`;

const ProjectRadioWrap = styled.div`
  border: 1px solid #e4e5ed;
  border-radius: 8px;
  height: 40px;
  align-items: center;
  padding-left: 10px;
  padding-right:10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const RadioInput = styled.input`
  appearance: none;
  width:20px;
  height:20px;
  border:1px solid darkgray;
  border-radius:50%;
  outline:none;
  &::before{
    content:'';
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;    
    border-radius:50%;  
  }

  &:checked::before{
    background:#fae57c;
  }
`;



const ProjectCheckList = styled.div`
  width: 590px;
  margin: 0 auto;
  border: 1px solid red;
`;

export default CreateProjectModal;
