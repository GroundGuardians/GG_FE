import styled from "@emotion/styled";
import { CommonButton } from "../commons/Button";
import HintIcon from "../assets/hintIcon.svg";
import { QUIZ_DATA } from "../constants/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleCompareAnswer = () => {
    answer == QUIZ_DATA.answer ? console.log("correct") : console.log("false");
  };

  return (
    <>
      <Title>pop quiz!</Title>
      <QuizQuestion>{QUIZ_DATA.question}</QuizQuestion>
      <QuizAnswerWrapper>
        <QuizAnswerMark>A.</QuizAnswerMark>
        <QuizAnswerInputBorder>
          <QuizAnswerInput
            type="text"
            placeholder="Please enter your answer"
            value={answer}
            onChange={handleInputChange}
          />
        </QuizAnswerInputBorder>
      </QuizAnswerWrapper>
      <ButtonWrapper>
        <CommonButton isGreen={true} isSurvey={false}>
          <a href={QUIZ_DATA.url}>
            <img src={HintIcon} /> Hint
          </a>
        </CommonButton>

        <CommonButton
          isGreen={false}
          isSurvey={false}
          onClick={() => console.log("hi")}
        >
          Submit
        </CommonButton>
      </ButtonWrapper>
    </>
  );
};

export default Quiz;

const Title = styled.div`
  margin-top: 20px;

  font-size: 40px;
  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #000;
`;

const QuizQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 392px;
  height: 239px;
  margin-top: 20px;
  padding: 29px 40px;

  background: #eaf7ef;
`;

const QuizAnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  height: 37px;
  margin-top: 20px;

  text-align: center;
`;

const QuizAnswerMark = styled.div`
  width: 21px;
  height: 37px;

  font-size: 32px;
  line-height: 32px;
`;

const QuizAnswerInput = styled.input`
  width: 201px;
  height: 27px;
  margin-top: 3px;
  padding: 0;

  font-size: 24px;
  font-family: GangwonEduSaeeum;

  border: 0;

  ::placeholder {
    color: #898989;
    font-size: 24px;
    font-family: GangwonEduSaeeum;
  }

  :focus {
    outline: none;
  }
`;

const QuizAnswerInputBorder = styled.div`
  height: 37px;

  border-bottom: 2px solid #c9c9c9;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 29px;

  /* 임의로 잡은 값 */
`;
