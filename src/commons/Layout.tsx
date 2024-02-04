import styled from "@emotion/styled";
import { CommonButton } from "./Button";

interface LayoutPropTypes {
  questionText: string;
  imageText: string;
  commonButtonGreen: string;
  commonButtonWhite: string;
}

const Layout = (props: LayoutPropTypes) => {
  return (
    <LayoutWrapper>
      <QuestionText>{props.questionText}</QuestionText>
      <QuestionImage>{props.imageText}</QuestionImage>
      <CommonButton isGreen={true}>
        I wake up on a bright sunny day.
      </CommonButton>
      <CommonButton isGreen={false}>I wake up on a moonlit night.</CommonButton>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionText = styled.div`
  width: 390px;
  height: 102px;
  border: 1px solid black;
`;

const QuestionImage = styled.div`
  width: 390px;
  height: 200px;
  border: 1px solid yellow;
  margin-bottom: 27px;
`;
