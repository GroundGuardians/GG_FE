import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./embladot";
import { CAROUSEL_DATA } from "./DATA";
import styled from "@emotion/styled";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <CarouselLayout>
                  <Title>{CAROUSEL_DATA[index].title}</Title>
                  <Description>{CAROUSEL_DATA[index].description}</Description>
                  <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                      <DotButton
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={"embla__dot".concat(
                          index === selectedIndex ? " embla__dot--selected" : ""
                        )}
                      />
                    ))}
                  </div>
                </CarouselLayout>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;

const CarouselLayout = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 350px;
  height: 480px;
  padding-right: 26px;
  padding-left: 26px;

  background: #fff;
  border-radius: 25px;
`;

const Title = styled.div`
  height: 34px;
  margin-top: 35px;

  color: #000;
  font-size: 20px;

  -webkit-text-stroke-width: 0.5pt;
  -webkit-text-stroke-color: #000;
`;

const Description = styled.div`
  height: 340px;
  overflow-y: scroll;

  font-size: 16px;
  line-height: normal;
`;
