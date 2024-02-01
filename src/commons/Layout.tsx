import React from "react";
import styled from "@emotion/styled";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Question>질문</Question>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
`;

const Question = styled.div`
  width: 390px;
  height: 102px;
  border: 1px solid black;
`;
