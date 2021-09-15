import "./App.css";
import Slider from "./Slider";
import FirstImg from "./assets/1.jpeg";
import SecondImg from "./assets/2.jpeg";
import ThirdImg from "./assets/3.jpeg";
import FourthImg from "./assets/4.jpeg";
import FifthImg from "./assets/5.jpeg";
import SixthImg from "./assets/6.jpeg";
import SeventhImg from "./assets/7.jpeg";
import { useState } from "react";

const arrayImage = [
  FirstImg,
  SecondImg,
  ThirdImg,
  FourthImg,
  FifthImg,
  SixthImg,
  SeventhImg,
];

const Settings = (props: any) => {
  const [slideCount, setSlideCount] = useState(false);

  const setValueScroll = (e: any) => {
    setSlideCount(false);
    if (e.target.value <= arrayImage.length && e.target.value >= 0) {
      props.foo({
        ...props.options,
        slideToScroll: Number(e.target.value),
      });
    } else {
      setSlideCount(true);
    }
  };

  const setValuePosition = (e: any) => {
    setSlideCount(false);
    if (e.target.value <= arrayImage.length && e.target.value >= 0) {
      props.foo({
        ...props.options,
        startPosition:
          Number(e.target.value) === 0
            ? Number(e.target.value)
            : Number(e.target.value) - 1,
      });
    } else {
      setSlideCount(true);
    }
  };

  return (
    <div className="settings">
      {slideCount && (
        <span className="settings-alert">
          Slider has only {arrayImage.length} elements and must be a positive
          number
        </span>
      )}
      <label className="settings-label__scroll">
        Set count slide to scroll
        <br />
        <input
          type="text"
          placeholder="default 1"
          onChange={(e) => setValueScroll(e)}
        />
      </label>
      <label className="settings-label__position">
        Set a start position
        <br />
        <input
          type="text"
          placeholder="default 1"
          onChange={(e) => setValuePosition(e)}
        />
      </label>
    </div>
  );
};

const Header = () => (
  <>
    <h1>React slider on generators</h1>
    <p>
      This slider is written using the class and its functionality will be
      expanded in the near future. <br /> (now you can set the number of slides
      to scroll, and start position)
    </p>
  </>
);

const App = () => {
  const [options, setCount] = useState<{
    slideToScroll: number;
    startPosition: number;
  }>({
    slideToScroll: 1,
    startPosition: 0,
  });

  return (
    <div className="App">
      <Header />
      <Settings foo={setCount} options={options} />
      <Slider array={arrayImage} options={options} />
    </div>
  );
};

export default App;
