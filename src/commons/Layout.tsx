import styled from "@emotion/styled";
import { CommonButton } from "./Button";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface LayoutPropTypes {
  questionText: string;
  questionImage: string;
  buttonGreenText: string;
  buttonWhiteText: string;
  id: number | undefined;
  parsedSurveyId1: number | undefined;
  setParsedSurveyId1: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Layout = (props: LayoutPropTypes) => {
  const { surveyResult, setSurveyResult } = useOutletContext();
  const navigate = useNavigate();
  const {
    questionText,
    questionImage,
    buttonGreenText,
    buttonWhiteText,
    id,
    parsedSurveyId1,
    setParsedSurveyId1,
  } = props;

  const handleAddSurveyResultO = () => {
    setSurveyResult(surveyResult + "O");
    console.log(surveyResult, "d");

    if (parsedSurveyId1 !== undefined) {
      const nextSurveyId = parsedSurveyId1 + 1;
      setParsedSurveyId1(nextSurveyId);
      if (nextSurveyId === 5) navigate(`../card/unknown`);
      else navigate(`/survey/${nextSurveyId}`);
    }
  };
  const handleAddSurveyResultX = () => {
    setSurveyResult(surveyResult + "X");
    console.log(surveyResult, "x");

    if (parsedSurveyId1 !== undefined) {
      const nextSurveyId = parsedSurveyId1 + 1;
      setParsedSurveyId1(nextSurveyId);
      if (nextSurveyId === 5) navigate(`../card/unknown`);
      else navigate(`/survey/${nextSurveyId}`);
    }
  };
  return (
    <LayoutWrapper>
      <QuestionText>{questionText}</QuestionText>
      <QuestionImage src={questionImage} />
      <CommonButton
        isGreen={true}
        isSurvey={true}
        onClick={handleAddSurveyResultO}
      >
        {buttonGreenText}
      </CommonButton>
      <CommonButton
        isGreen={false}
        isSurvey={true}
        onClick={handleAddSurveyResultX}
      >
        {buttonWhiteText}
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
