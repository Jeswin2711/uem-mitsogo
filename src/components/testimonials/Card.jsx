import classNames from "classnames";
import React from "react";

const Card = ({
  client,
  className
}) => {
  return (
    <div className={classNames("flex min-w-full max-sm:flex-col shadow-lg",className)}>
      <div className="w-1/3 max-sm:w-full">
        <img src={client.image} className="cover w-full max-xl:h-full" loading="lazy"/>
      </div>
      <div className="w-2/3 flex flex-col max-sm:w-full">
        <div className="h-2/3 bg-grey-background">
          <h4 className="text-2xl font-semibold px-8 py-12">
            "{client.review}"
          </h4>
        </div>
        <div className="h-1/3 bg-[#ebebec] px-10 flex flex-col items-start justify-center">
          <h6 className="text-2xl font-bold text-primary">{client?.name}</h6>
          <p className="text-sm text-secondary-text-2">{client?.role}</p>
          <p className="text-sm text-secondary-text-2">{client?.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
