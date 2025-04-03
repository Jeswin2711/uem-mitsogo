import React from "react";
import Tag from "../tag/Tag";
import { forrester } from "@/assets";
import { gartner } from "@/assets";
import { idc } from "@/assets";
import { bannerJpeg as banner } from "@/assets";
import { bannerPng as bannerWithoutBg} from "@/assets";

const partners = [
  {
    key : "idc",
    image : idc,
    description : "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
    width:"83"
  },
  {
    key : "gartner",
    image : gartner,
    description : "Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
    width:"110"
  },
  {
    key : "forrestor",
    image : forrester,
    description : "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
    width:"156"
  }
]

const Hero = () => {
  return (
    <section className="bg-primary h-full pt-20">
      <div className="w-container m-auto text-white flex justify-between items-center py-16 max-xl:flex-col-reverse max-xl:gap-8">
        <div className="w-2/5 flex flex-col max-xl:w-3/4 max-sm:w-full">
          <div className="flex flex-col gap-3">
            <p className="text-md text-secondary-text-2 font-bold">
              Unified Endpoint Management
            </p>
            <h1 className="text-4xl font-semibold leading-snug">
              Gain control and visibility over your endpoints
            </h1>
            <p className="text-lg text-secondary-text-3">
              Hexnode's UEM solution allows you to simplify endpoint management
              and free up IT. Focus on the big picture while Hexnode works on
              the details.
            </p>
          </div>
          <div className="flex gap-2 items-center mt-6 max-sm:flex-col max-sm:gap-6">
            <input
              className="px-2 py-4 rounded-sm w-3/5 text-black max-xl:w-full max-sm:py-3"
              placeholder="Email"
            />
            <button className="uppercase bg-action border border-transparent py-4 text-white rounded-sm text-md w-2/5 max-sm:w-full max-sm:py-3 hover:bg-white hover:text-action hover:border-action" aria-label="Try Hexnode">
              let's try it out!
            </button>
          </div>
        </div>
        <div className="w-2/4 relative max-xl:w-3/4 max-lg:w-full">
          <img src={bannerWithoutBg} className="absolute w-full z-30 flex pointer-events-none" loading="lazy" alt="Banner"/>
          <img src={banner} loading="lazy" alt="Banner" className="rounded-2xl"/>
          <Tag text={'Password policy applied'} className={'bg-[#fdd598] absolute top-20 left-10 z-20 flex max-xl:left-16 max-sm:top-14 max-sm:left-16'} color={"text-[#fdd598]"}/>
          <Tag text={'TvOS Kiosk Active'} className={'bg-[#c3e1e7] absolute top-48 right-[-4%] z-20 flex max-xl:right-0 max-sm:top-28 max-sm:right-8'} color={"text-[#c3e1e7]"}/>
          <Tag text={'Device Enrolled'} className={'bg-[#bcdcbe] absolute bottom-14 right-44 z-40 flex max-sm:w-fit max-sm:bottom-10 max-sm:right-32'} color={"text-[#bcdcbe]"}/>
        </div>
      </div>
      <div className="w-full bg-secondary-background p-2">
        <div className="flex w-container m-auto py-8 max-sm:flex-col max-sm:gap-6">
          {partners.map((partner) => (
            <div className="flex flex-col gap-4 w-2/4 border-r border-r-divider first:pl-0 last:border-r-transparent px-20 justify-start max-xl:px-10 max-lg:w-full max-sm:justify-center max-sm:items-center max-sm:border-r-transparent max-sm:p-0 max-sm:border-b max-sm:border-b-divider max-sm:last:border-b-transparent max-sm:py-6" key={partner.key}>
              <img src={partner.image} className="contain" width={partner.width} height={25} loading="lazy"/>
              <p className="text-sm text-secondary-text-3 max-sm:text-center">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
