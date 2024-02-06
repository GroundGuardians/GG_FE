import Header from "./commons/Header";
import Layout from "./commons/Layout";
import styled from "@emotion/styled";
import Question1 from "../src/assets/question1.svg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Header />
      {/* <Layout
        questionText="Q1. I woke up and I have transformed 
into an animal."
        questionImage={Question1}
        buttonGreenText="I wake up on a bright sunny day."
        buttonWhiteText="I wake up on a moonlit night."
      /> */}
      <Outlet />
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
