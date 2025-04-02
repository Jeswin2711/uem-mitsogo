import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import android from "../../assets/android.webp";
import ios from "../../assets/iOS.webp";
import macos from "../../assets/macOS.webp";
import windows from "../../assets/windows.webp";
import fireos from "../../assets/fireOs.webp";
import tvos from "../../assets/tvOS.webp";

// Import Swiper styles
import "swiper/css";

let platforms = [
  {
    title: "Android",
    description:
      "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.",
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
      "Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.",
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
      "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
    image: fireos,
  },
];

const EndPointManagement = () => {
  const swiperRef = useRef();
  const [selectedKey, setSelectedKey] = useState("android");

  return (
    <section className="bg-grey-background py-20">
      <div className="w-container flex flex-col gap-4 justify-center items-center m-auto max-lg:relative">
        <h2 className="text-primary text-5xl font-bold max-lg:w-3/4 max-lg:text-4xl max-sm:w-full max-sm:text-3xl max-lg:text-center max-sm:font-bold">
          Multi-platform Endpoint Management
        </h2>
        <p className="text-secondary-text text-lg max-sm:hidden">
          Devices of varying platforms? Hexnode thrives in a diverse
          environment.
        </p>
        <div className="flex w-container mt-10 justify-between gap-10 max-lg:sticky max-lg:top-36 max-lg:w-full max-lg:gap-4">
          <Swiper
            direction={"vertical"}
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-[500px] w-2/4 max-sm:!hidden"
          >
            <SwiperSlide>
              <img src={android} className="contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ios} className="contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={macos} className="contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={windows} className="contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={tvos} className="contain" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={fireos} className="contain" />
            </SwiperSlide>
          </Swiper>
          <div className="flex flex-col w-2/4 max-sm:w-full">
            {platforms.map((platform, index) => {
              const isSelected = selectedKey === platform.title?.toLowerCase();
              const isNextToSelected =
                index ===
                platforms.findIndex(
                  (p) => p.title.toLowerCase() === selectedKey
                ) +
                  1;
              return (
                <>
                  {isSelected &&  <img src={platform.image} className="hidden mb-6 max-sm:flex"/>}
                  <div
                    className={`${
                      isSelected
                        ? "border border-grey-400 rounded-xl flex flex-col gap-4 shadow-md px-8 py-4 bg-white transition-all duration-500 ease-in-out move-linear"
                        : "px-8 py-4 text-primary rounded-none font-semibold text-2xl text-left border-t border-gray-300 first:border-none"
                    } ${isNextToSelected ? "border-t-0" : ""} max-sm:w-full`}
                    key={platform.title}
                  >
                    <h3
                      className={
                        isSelected
                          ? "text-primary rounded-none font-semibold text-2xl text-left"
                          : "font-semibold text-2xl cursor-pointer"
                      }
                      onClick={() => {
                        setSelectedKey(platform.title.toLowerCase());
                        if (swiperRef?.current) {
                          swiperRef?.current?.swiper?.slideTo(
                            platforms.indexOf(platform)
                          );
                        }
                      }}
                    >
                      {platform.title}
                    </h3>
                    {isSelected && (
                      <div className="flex flex-col justify-between gap-2">
                        <p className="text-secondary-text text-lg">
                          {platform.description}
                        </p>
                        <a
                          href="#"
                          className="text-action font-semibold text-lg"
                        >
                          Try hexnode on your endpoints
                        </a>
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndPointManagement;
