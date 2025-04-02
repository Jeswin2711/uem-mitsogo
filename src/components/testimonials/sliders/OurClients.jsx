import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Card from "../Card";

export const OurClients = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <section className="relative w-full">
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        //   autoplay={{
        //     delay: 1500,
        //     disableOnInteraction: false,
        //   }}
        centeredSlidesBounds={true}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay]}
        className="w-4/5 max-xl:w-5/6 max-lg:w-full"
      >
        {Array.from({ length: 5 }).map((client, index) => {
          return (
            <SwiperSlide key={`client_${index}`}>
              <Card />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="absolute top-36 z-20 max-xl:top-24 max-xl:left-[-8px] left-5 rounded-xl p-4 px-6 bg-grey-background cursor-pointer flex items-center justify-center w-fit max-lg:hidden"
        onClick={handlePrev}
      >
        <i className="text-2xl fi fi-rs-angle-small-left flex items-center justify-center"></i>
      </div>
      <div
        className="absolute top-36 z-20 max-xl:top-24 right-5 max-xl:right-[-8px] rounded-xl p-4 px-6 bg-grey-background flex cursor-pointer items-center justify-center w-fit max-lg:hidden"
        onClick={handleNext}
      >
        <i className="text-2xl fi fi-rs-angle-small-right flex items-center justify-center"></i>
      </div>
      <div className=" hidden gap-8 items-center w-full justify-center mt-4 max-lg:flex">
        <div
          className="absolute top-36 z-20 left-5 rounded-2xl p-4 px-6 bg-grey-background cursor-pointer flex items-center justify-center w-fit max-lg:relative max-lg:top-0 max-lg:left-0"
          onClick={handlePrev}
        >
          <i className="text-2xl fi fi-rs-angle-small-left flex items-center justify-center"></i>
        </div>
        <div
          className="absolute top-36 z-20 right-5 rounded-2xl p-4 px-6 bg-grey-background flex cursor-pointer items-center justify-centertext-lg w-fit max-lg:relative max-lg:top-0 max-lg:right-0"
          onClick={handleNext}
        >
          <i className="text-2xl fi fi-rs-angle-small-right flex items-center justify-center"></i>
        </div>
      </div>
    </section>
  );
};
