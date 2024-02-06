import styled from "@emotion/styled";
const Quiz = () => {
  return (
    <>
      <Title>pop quiz!</Title>
      <QuizQuestion>something</QuizQuestion>
      <QuizAnswerWrapper>
        <QuizAnswerMark>A.</QuizAnswerMark>
        <QuizAnswerInputBorder>
          <QuizAnswerInput
            type="text"
            placeholder="Please enter your answer"
          ></QuizAnswerInput>
        </QuizAnswerInputBorder>
      </QuizAnswerWrapper>
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 392px;
  height: 239px;
  background: #eaf7ef;
`;

const QuizAnswerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 230px;
  height: 37px;
  border: 1px solid yellow;
  margin-top: 20px;
`;

const QuizAnswerMark = styled.div`
  font-size: 32px;
  border: 1px solid black;
  width: 21px;
  height: 37px;
  line-height: 32px;
`;

const QuizAnswerInput = styled.input`
  width: 201px;

  ::placeholder {
    color: #898989;
    font-size: 24px;
    font-family: "GangwonEduSaeeum";
  }
`;

const QuizAnswerInputBorder = styled.div`
  height: 37px;
  border-bottom: 2px solid #c9c9c9;
`;
