import React from "react";
import Card from "./Card";
import { OurClients } from "./sliders/OurClients";
import { OurBusinessClients } from "./sliders/OurBusinessClients";

const Testimonials = () => {


  return (
    <section className="flex flex-col gap-14 py-14">
      <h2 className="text-center text-5xl font-semibold text-primary max-xl:text-4xl">
        What our customers say
      </h2>
      <div className="w-container m-auto">
        <OurClients/>
      </div>
      <OurBusinessClients/>
    </section>
  );
};

export default Testimonials;
