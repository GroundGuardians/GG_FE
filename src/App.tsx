import Header from "./commons/Header";
import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";
import { Global } from "@emotion/react";
import { reset } from "./reset";
import { useState } from "react";

function App() {
  const [surveyResult, setSurveyResult] = useState("");
  return (
    <Wrapper>
      <Global styles={reset} />
      <Header />
      <Outlet context={{ surveyResult, setSurveyResult }} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
