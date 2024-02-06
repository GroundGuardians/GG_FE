import EmblaCarousel from "../Carousel";
import { EmblaOptionsType } from "embla-carousel";
import "./embla.css";

const SLIDES = Array.from(Array(3).keys());
const OPTIONS: EmblaOptionsType = {};

const Info = () => {
  return (
    <div>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
  );
};

export default Info;
