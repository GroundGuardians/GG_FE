import { ReactNode } from "react";

import styled from "@emotion/styled";

interface commonButtonPropTypes {
  children: ReactNode;
  isGreen: boolean;
  isSurvey: boolean;
  onClick?: () => void;
}

export const CommonButton = (props: commonButtonPropTypes) => {
  return (
    <CommonButtonContainer
      isGreen={props.isGreen}
      isSurvey={props.isSurvey}
      onClick={props.onClick}
    >
      {props.children}
    </CommonButtonContainer>
  );
};

const CommonButtonContainer = styled.button<{
  isGreen: boolean;
  isSurvey: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isSurvey }) => (isSurvey ? "294px" : "auto")};
  height: ${({ isSurvey }) => (isSurvey ? "68px" : "auto")};
  margin-bottom: 20px;
  padding: 10px 15px;

  color: ${({ isGreen }) => (isGreen ? "#fff" : "#25c35c")};
  font-size: 22px;

  background-color: ${({ isGreen }) => (isGreen ? "#25c35c" : "#fff")};
  cursor: pointer;
  border: 2px solid #25c35c;
  border-radius: 20px;
`;

export const ButtonColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
