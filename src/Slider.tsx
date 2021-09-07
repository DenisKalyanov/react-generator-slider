import React, { useEffect, useState } from "react";
import "./App.css";
import {
  SliderGeneratorInc,
  SliderGeneratorDec,
  SliderGeneratorClass,
} from "./sliderGenerator";

const Slider: React.FC<any> = ({ array }: any): JSX.Element => {
  const generatorObjInc = SliderGeneratorInc(array);
  const generatorObjDec = SliderGeneratorDec(array);
  const generatorObj = new SliderGeneratorClass(array);

  const prevSlide = generatorObj.prevButton();
  let a = prevSlide.next().value;

  const [isVisible, setVisible] = useState(array[0]);
  const onClickInc = () => {
    console.log(a);
    console.log(isVisible);

    setVisible(a);
  };
  const onClickDec = () => {
    setVisible(generatorObjDec.next().value);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    setVisible(a);
    setVisible(generatorObjDec.next().value);
  }, [isVisible]);

  return (
    <div className="Slider">
      {array.map((item: any) => (
        <div
          className={`${isVisible === item ? null : "not-visible"}`}
          key={item}
        >
          {item}
        </div>
      ))}

      <button type="button" onClick={onClickDec}>
        PREV
      </button>
      <button type="button" onClick={onClickInc}>
        NEXT
      </button>
    </div>
  );
};

export default Slider;
