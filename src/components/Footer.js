import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer
      style={{ height: "200px", display: "flex", flexDirection: "column" }}
    >
      <FooterLine />
      <FooterCompanyInfoWrap>
        <FooterCompanyInfo>
          (주)크몽
          <FooterVLine />
          서울시 서초구 사임당로 157, 3층
          <FooterVLine />
          대표 : 박현호
          <FooterVLine />
          개인정보관리책임자 : 송준이
          <FooterVLine />
          사업자등록번호 : 613-81-65278
          <br />
          통신판매업신고: 2018-서울서초-2134
          <FooterVLine />
          유료직업소개사업등록번호 : 제2021-3210195-14-5-00035호
          <FooterVLine />
          고객센터 : 1544-6254
          <FooterVLine />
          help@kmong.com
        </FooterCompanyInfo>
        <FooterDesc>
          <FooterDesc1>
            (주)크몽은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            상품,상품정보, 거래에 관한 의무와 책임은 판매회원에게 있습니다.
          </FooterDesc1>
          <FooterDesc1>
            (주)크몽 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI
            등에 대한 무단복제, 전송 배포, 스크래핑 등의 행위는 저작권법,
            콘텐츠산업 진흥법 등 관련법령에 의하여 업격히 금지됩니다.
          </FooterDesc1>
          <FooterCopyLight>Copyright © 2022 kmong Inc. All rights reserved.</FooterCopyLight>
        </FooterDesc>
      </FooterCompanyInfoWrap>
    </footer>
  );
};

export default Footer;

const FooterLine = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
`;

const FooterCompanyInfoWrap = styled.div`
  max-width: 1200px;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin: 16px auto 0 auto;
`;

const FooterCompanyInfo = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.15;
  margin: 0;
  color: #303441;
  text-align: inherit;
  font-size: 13px;
`;

const FooterVLine = styled.span`
  border-left: thin solid #303441;
  margin-left: 5px;
  margin-right: 5px;
  height: 10px;
`;

const FooterDesc = styled.div`
  padding: 16px;
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`;

const FooterDesc1 = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.4;
  margin: 0;
  color: #212224;
  text-align: inherit;
  color: #9a9ba7;
`;

const FooterCopyLight = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.66;
  letter-spacing: 0.4;
  margin: 0;
  color: #212224;
  text-align: inherit;
  color: #c8cad2;
`;
