import React from "react";
import styled from "styled-components";

const HomeAdBottom = () => {
    return (
        <HomeAdBottomWrap>
            <HomeAdBottomContentWrap>
                <HomeAdBottomContentTitle>크몽 엔터프라이즈와 함께한 클라이언트</HomeAdBottomContentTitle>
                <HomeAdBottomContentSmallTitle>이미 많은 클라이언트들이 성공사례를 만들었습니다.</HomeAdBottomContentSmallTitle>
            </HomeAdBottomContentWrap>
        </HomeAdBottomWrap>
    )
};

const HomeAdBottomWrap = styled.div`
    background-color: #f2f3f7;
    height: 463px;
    padding: 40px 0;
`;

const HomeAdBottomContentWrap = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    text-align: center;
`;

const HomeAdBottomContentTitle = styled.h3`
    font-size: 32px;
    color: #303441;
    font-weight: bold;
    margin: 0;
`;

const HomeAdBottomContentSmallTitle = styled.p`
    font-size: 16px;
    color: #303441;
    font-weight: 400;
    line-height: normal;
    margin: 8px 0 0 0;
`;
export default HomeAdBottom;