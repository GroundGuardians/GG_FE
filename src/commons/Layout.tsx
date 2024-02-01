import styled from "@emotion/styled";
import { CommonButton } from "./Button";

const Layout = () => {
  return (
    <LayoutWrapper>
      <QuestionText>질문</QuestionText>
      <QuestionImage>이미지</QuestionImage>
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
