import Header from "./commons/Header";
import styled from "@emotion/styled";
import EmblaCarousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const SLIDES = Array.from(Array(3).keys());
const OPTIONS: EmblaOptionsType = {};

function App() {
  return (
    <Wrapper>
      <Header />
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
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
