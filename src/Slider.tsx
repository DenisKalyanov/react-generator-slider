import React, { useEffect, useState } from "react";
import "./App.css";
import { SliderGeneratorClass } from "./service/sliderGenerator";

const SliderComponent = (props: any) => {
  const [item, setItem] = useState("");

  useEffect(() => {
    setItem(props.prevSlide.next().value);
    setItem(props.nextSlide.next().value);
  }, []);

  useEffect(() => {
    setItem(props.prevSlide.next().value);
    setItem(props.nextSlide.next().value);
  }, [props.options]);

  const onPrevSlide = () => {
    setItem(props.prevSlide.next().value);
  };

  const onNextSlide = () => {
    setItem(props.nextSlide.next().value);
  };

  return (
    <div className="slider">
      <img src={item} alt="" className="slider-image" />
      <div className="slider-buttons">
        <button
          type="button"
          className="slider-button slider-button__prev"
          onClick={onPrevSlide}
        >
          PREV
        </button>
        <button
          type="button"
          className="slider-button slider-button__next"
          onClick={onNextSlide}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

const Slider = (props: any) => {
  const generator = new SliderGeneratorClass(props.array, props.options);
  const prevSlide = generator.prevButton();
  const nextSlide = generator.nextButton();

  return (
    <SliderComponent
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      options={props.options}
    />
  );
};

export default Slider;
