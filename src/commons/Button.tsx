import { ReactNode } from "react";

import styled from "@emotion/styled";

interface commonButtonPropTypes {
  children: ReactNode;
  isGreen: boolean;
}

export const CommonButton = (props: commonButtonPropTypes) => {
  return (
    <CommonButtonContainer isGreen={props.isGreen}>
      {props.children}
    </CommonButtonContainer>
  );
};

const CommonButtonContainer = styled.button<{ isGreen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 294px;
  height: 68px;
  border-radius: 20px;
  color: ${({ isGreen }) => (isGreen ? "#fff" : "#000")};
  background-color: ${({ isGreen }) => (isGreen ? "#25c35c" : "#fff")};
  font-size: 22px;
  border: 2px solid #25c35c;
  padding: 22px 31px;
  cursor: pointer;
  margin-bottom: 20px;
`;
