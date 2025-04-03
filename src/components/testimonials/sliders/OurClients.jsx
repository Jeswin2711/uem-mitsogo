import { lazy, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { client1, client2, client3 } from "@/assets";
const Card = lazy(() => import("../Card"));

let reviews = [
  {
    review: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    role: "East Troy Community School District",
    image: client1,
  },
  {
    review:
      "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
    image: client2,
  },
  {
    review: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    role: "Executive Account Manager, NCS",
    image: client3,
  },
];

export const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? reviews.length - 1 : currentSlide - 1
    );
  const nextSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === reviews.length - 1 ? 0 : currentSlide + 1
    );

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 2500);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="w-full relative rounded-xl">
      <div className="overflow-hidden relative w-3/4 m-auto rounded-2xl max-xl:w-full">
        <div
          className="flex transition-transform ease-out duration-500 w-full h-full rounded-2xl"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {reviews.map((client) => (
            <Card
              client={client}
              className={"rounded-2xl overflow-hidden h-full"}
            />
          ))}
        </div>
      </div>
      <div
        className="absolute top-36 z-20 max-xl:top-24 max-xl:left-[-8px] left-20 rounded-xl p-4 px-4 bg-grey-background cursor-pointer flex items-center justify-center w-fit max-lg:hidden"
        onClick={prevSlide}
      >
        <i className="text-2xl fi fi-rs-angle-small-left flex items-center justify-center"></i>
      </div>
      <div
        className="absolute top-36 z-20 max-xl:top-24 right-20 max-xl:right-[-8px] rounded-xl p-4 px-4 bg-grey-background flex cursor-pointer items-center justify-center w-fit max-lg:hidden"
        onClick={nextSlide}
      >
        <i className="text-2xl fi fi-rs-angle-small-right flex items-center justify-center"></i>
      </div>
      <div className=" hidden gap-8 items-center w-full justify-center mt-4 max-lg:flex">
        <div
          className="absolute top-36 z-20 left-5 rounded-2xl p-4 px-6 bg-grey-background cursor-pointer flex items-center justify-center w-fit max-lg:relative max-lg:top-0 max-lg:left-0"
          onClick={prevSlide}
        >
          <i className="text-2xl fi fi-rs-angle-small-left flex items-center justify-center"></i>
        </div>
        <div
          className="absolute top-36 z-20 right-5 rounded-2xl p-4 px-6 bg-grey-background flex cursor-pointer items-center justify-centertext-lg w-fit max-lg:relative max-lg:top-0 max-lg:right-0"
          onClick={nextSlide}
        >
          <i className="text-2xl fi fi-rs-angle-small-right flex items-center justify-center"></i>
        </div>
      </div>
    </section>
  );
};
