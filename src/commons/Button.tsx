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
  align-items: center;
  justify-content: center;
  width: 294px;
  height: 68px;
  margin-bottom: 20px;
  padding: 22px 31px;

  color: ${({ isGreen }) => (isGreen ? "#fff" : "#000")};
  font-size: 22px;

  background-color: ${({ isGreen }) => (isGreen ? "#25c35c" : "#fff")};
  cursor: pointer;
  border: 2px solid #25c35c;
  border-radius: 20px;
`;
