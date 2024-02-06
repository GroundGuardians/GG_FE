import Layout from "../commons/Layout";
import { SURVEY_DATA } from "../constants/data";
import { useParams } from "react-router-dom";

const Survey = () => {
  const { surveyId } = useParams();
  const parsedSurveyId = surveyId ? parseInt(surveyId) : undefined;
  const survey = SURVEY_DATA.find((item) => item.id === parsedSurveyId);

  if (!survey) {
    return <div>Survey not found!</div>;
  }

  const { id, question, image, button1, button2 } = survey;

  return (
    <Layout
      questionText={`Q${id}.${question}`}
      questionImage={image}
      buttonGreenText={button1}
      buttonWhiteText={button2}
    />
  );
};

export default Survey;
