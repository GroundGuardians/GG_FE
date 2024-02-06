import Layout from "../commons/Layout";
import { SURVEY_DATA } from "../constants/data";
import { useParams } from "react-router-dom";

const Survey = () => {
  const { surveyId } = useParams();
  const survey = SURVEY_DATA.find((item) => item.id === parseInt(surveyId));

  if (!survey) {
    return <div>Survey not found!</div>;
  }
  return (
    <div>
      <Layout
        questionText={`Q${survey.id}.${survey.question}`}
        questionImage={survey.image}
        buttonGreenText={survey.button1}
        buttonWhiteText={survey.button2}
      />
    </div>
  );
};

export default Survey;
