import React from "react";
import styled from "styled-components";
//
const ProjectLists = () => {
  return (
    <>
      <Container>
        <ListBanner src="https://d2v80xjmx68n4w.cloudfront.net/assets/project-request/project-list-banner.png" />
        <ListTitle>프로젝트 리스트</ListTitle>
        <ListContainer>
          <Menu>
            <Category>카테고리</Category>
            <Checkbox type="checkbox" />
            <Label />
            <CheckLabel>IT 프로그래밍</CheckLabel>
          </Menu>
          <CardContainer>
            <SearchBar></SearchBar>
            <Card></Card>
          </CardContainer>
        </ListContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  width: 1170px;
  /* background: green; */
  margin: 0 auto;
`;
const ListBanner = styled.img`
  width: 1170px;
  height: 90px;
  padding: 28px 0 0;
  cursor: pointer;
`;
const ListTitle = styled.div`
  width: 1170px;
  margin-top: 43px;
  font: 700 25px MetroSans;
  color: #4d4d4d;
`;
const ListContainer = styled.div`
  width: 1170px;
  display: flex;
  margin-top: 25px;
`;
const Menu = styled.div`
  width: 184px;
`;
const Category = styled.div`
  border-top: 2.3px solid #ffd400;
  border-bottom: 1px solid #e4e5ed;
  font: 800 16px MetroSans;
  color: #303441;
  display: flex;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 15px;
`;
const Checkbox = styled.input`
  display: none;
`;
const Label = styled.label`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #c8cad2;
  border-radius: 4px;
  position: relative;
`;
const CheckLabel = styled.div`
  font: 14px MetroSans;
  font-weight: 500;
`;
const CardContainer = styled.div`
  width: 962px;
  margin-left: 24px;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 55.5px;
  border: 1px solid #e4e5ed;
`;
const Card = styled.div``;
export default ProjectLists;
