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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 392px;
  height: 239px;
  margin-top: 20px;

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
