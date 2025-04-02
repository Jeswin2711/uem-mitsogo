import React from "react";
import client from "../../assets/chris-robinson.png";

const Card = () => {
  return (
    <div className="flex w-full max-sm:flex-col">
      <div className="w-1/3 max-sm:w-full">
        <img src={client} className="cover w-full max-xl:h-full"/>
      </div>
      <div className="w-2/3 flex flex-col max-sm:w-full">
        <div className="h-2/3 bg-grey-background">
          <h4 className="text-2xl font-semibold px-8 py-12">
            "Hexnode is of great value. Works great with Android and iOS!"
          </h4>
        </div>
        <div className="h-1/3 bg-[#ebebec] p-4 flex flex-col items-start justify-center max-lg:px-10">
          <h6 className="text-2xl font-bold text-primary">Justin Modrak</h6>
          <p className="text-sm text-secondary-text-2">Technology Coordinator</p>
          <p className="text-sm text-secondary-text-2">East Troy Community School District</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
