import Header from "./commons/Header";
import Layout from "./commons/Layout";
import styled from "@emotion/styled";
import TestImage from "../src/assets/info.svg";

function App() {
  return (
    <Wrapper>
      <Header />
      <Layout
        questionText="Q1. I woke up and I have transformed 
into an animal."
        questionImage={TestImage}
        buttonGreenText="I wake up on a bright sunny day."
        buttonWhiteText="I wake up on a moonlit night."
      />
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
