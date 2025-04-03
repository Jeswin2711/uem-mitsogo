import React, { useEffect, useState } from "react";

const Slider = ({ slides, autoSlide = false, autoSlideInterval = 2500 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative border w-3/4">
      <div
        className="flex transition-transform ease-out duration-500 w-2/3 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide) => (
          <img src={slide} alt="Slide Image" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className="absolute top-36 z-20 max-xl:top-24 max-xl:left-[-8px] left-5 rounded-xl p-4 px-6 bg-grey-background cursor-pointer flex items-center justify-center w-fit max-lg:hidden"
          onClick={prev}
        >
          <i className="text-2xl fi fi-rs-angle-small-left flex items-center justify-center"></i>
        </button>
        <button
          className="absolute top-36 z-20 max-xl:top-24 right-5 max-xl:right-[-8px] rounded-xl p-4 px-6 bg-grey-background flex cursor-pointer items-center justify-center w-fit max-lg:hidden"
          onClick={next}
        >
          <i className="text-2xl fi fi-rs-angle-small-right flex items-center justify-center"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
