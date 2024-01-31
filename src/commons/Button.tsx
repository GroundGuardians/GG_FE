import React from "react";
import styled from "@emotion/styled";

export const WhiteButton = ({ children }) => {
  return <WhiteButtonContainer>{children}</WhiteButtonContainer>;
};

export const GreenButton = ({ children }) => {
  return <GreenButtonContainer>{children}</GreenButtonContainer>;
};

const WhiteButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 294px;
  height: 68px;
  border-radius: 20px;
  color: #000;
  font-weight: 400;
  font-size: 20px;
  border: 2px solid #25c35c;
  padding: 22px 31px;
`;

const GreenButtonContainer = styled.button`
  width: 294px;
  height: 68px;
  border-radius: 20px;
  background: #25c35c;
  color: #fff;
  font-size: 22px;
`;
