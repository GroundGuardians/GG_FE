import styled from "@emotion/styled";
import { CommonButton } from "./Button";
import { useOutletContext } from "react-router-dom";

interface LayoutPropTypes {
  questionText: string;
  questionImage: string;
  buttonGreenText: string;
  buttonWhiteText: string;
}

const Layout = (props: LayoutPropTypes) => {
  const { surveyResult, setSurveyResult } = useOutletContext();

  const handleAddSurveyResultO = () => {
    setSurveyResult([...surveyResult, "O"]);
    console.log(surveyResult, "d");
  };
  const handleAddSurveyResultX = () => {
    setSurveyResult([...surveyResult, "X"]);
    console.log(surveyResult, "x");
  };
  return (
    <LayoutWrapper>
      <QuestionText>{props.questionText}</QuestionText>
      <QuestionImage src={props.questionImage} />
      <CommonButton
        isGreen={true}
        isSurvey={true}
        onClick={handleAddSurveyResultO}
      >
        {props.buttonGreenText}
      </CommonButton>
      <CommonButton
        isGreen={false}
        isSurvey={true}
        onClick={handleAddSurveyResultX}
      >
        {props.buttonWhiteText}
      </CommonButton>
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 102px;
  margin-top: 20px;

  /* border: 1px solid black; */
  font-size: 24px;
  text-align: center;
`;

const QuestionImage = styled.img`
  width: 390px;
  height: 200px;

  /* border: 1px solid yellow; */
  margin-bottom: 27px;
`;
