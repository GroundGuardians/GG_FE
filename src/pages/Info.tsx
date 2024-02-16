import EmblaCarousel from "../Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "../embla.css";
import styled from "@emotion/styled";

const SLIDES = Array.from(Array(3).keys());
const OPTIONS: EmblaOptionsType = {};

const Info = () => {
  return (
    <InfoWrapper>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </InfoWrapper>
  );
};

export default Info;

const InfoWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  transform: translate(-50%, -50%);
`;
