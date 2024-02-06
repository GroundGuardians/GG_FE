import Header from "./commons/Header";
import styled from "@emotion/styled";
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const SLIDES = Array.from(Array(3).keys());
const OPTIONS: EmblaOptionsType = {};

import { Outlet } from "react-router-dom";
import { Global } from "@emotion/react";
import { reset } from "./reset";
function App() {
  return (
    <Wrapper>
      <Global styles={reset} />
      <Header />
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
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
