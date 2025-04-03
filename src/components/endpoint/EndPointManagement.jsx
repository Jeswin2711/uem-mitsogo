import { useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  iOS as ios,
  macOS as macos,
  windows,
  fireOS as fireos,
  tvOS as tvos,
  android,
} from "@/assets";
import "swiper/css";

const platforms = [
  {
    title: "Android",
    description:
      "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
    image: android,
  },
  {
    title: "iOS",
    description:
      "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
    image: ios,
  },
  {
    title: "macOS",
    description:
      "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
    image: macos,
  },
  {
    title: "Windows",
    description:
      "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
    image: windows,
  },
  {
    title: "tvOS",
    description:
      "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
    image: tvos,
  },
  {
    title: "FireOS",
    description:
      "Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single console.",
    image: fireos,
  },
];

const EndPointManagement = () => {
  const swiperRef = useRef(null);
  const [selectedKey, setSelectedKey] = useState("android");

  // Optimized onClick function using useCallback
  const handlePlatformClick = useCallback((platform, index) => {
    setSelectedKey(platform.title.toLowerCase());
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  }, []);

  return (
    <section className="bg-grey-background py-20">
      <div className="w-container flex flex-col gap-4 justify-center items-center m-auto max-lg:relative">
        <h2 className="text-primary text-5xl font-bold max-lg:w-3/4 max-lg:text-4xl max-sm:w-full max-sm:text-3xl max-lg:text-center max-sm:font-bold">
          Multi-platform Endpoint Management
        </h2>
        <p className="text-secondary-text text-lg max-sm:hidden">
          Devices of varying platforms? Hexnode thrives in a diverse environment.
        </p>
        <div className="flex w-container mt-10 justify-between gap-10 relative max-xl:w-full">
          <Swiper
            direction="vertical"
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={1}
            className="h-[500px] w-2/4 max-sm:!hidden max-xl:h-[300px] !sticky top-20 rounded-xl shadow-2xl"
          >
            {platforms.map(({ image, title }) => (
              <SwiperSlide key={title}>
                <img src={image} className="contain" loading="lazy" alt={`${title} platform`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col w-2/4 max-sm:w-full">
            {platforms.map((platform, index) => {
              const isSelected = selectedKey === platform.title.toLowerCase();
              const isNextToSelected =
                index === platforms.findIndex((p) => p.title.toLowerCase() === selectedKey) + 1;

              return (
                <div
                  key={platform.title}
                  className={`${
                    isSelected
                      ? "border border-grey-400 rounded-xl flex flex-col gap-4 shadow-md px-8 py-4 bg-white transition-all duration-500 ease-in-out move-linear"
                      : "px-8 py-4 text-primary rounded-none font-semibold text-2xl text-left border-t border-gray-300 first:border-none"
                  } ${isNextToSelected ? "border-t-0" : ""} max-sm:w-full`}
                >
                  <h3
                    className={`font-semibold text-2xl ${
                      isSelected ? "text-primary" : "cursor-pointer"
                    }`}
                    onClick={() => handlePlatformClick(platform, index)}
                  >
                    {platform.title}
                  </h3>
                  {isSelected && (
                    <div className="flex flex-col justify-between gap-2">
                      <p className="text-secondary-text text-lg">{platform.description}</p>
                      <a href="#" className="text-action font-semibold text-lg">
                        Try Hexnode on your endpoints
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndPointManagement;
