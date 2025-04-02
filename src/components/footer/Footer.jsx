import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary">
        <div className="w-container py-16 flex flex-col items-center justify-center m-auto gap-8">
          <h2 className="text-[42px] text-white w-2/3 text-center leading-snug font-bold max-xl:w-full max-sm:text-3xl">
            Get Hexnode UEM and start securing your endpoints
          </h2>
          <button className="bg-action rounded-sm py-4 px-8 text-white max-sm:w-full max-sm:text-sm">
            TRY HEXNODE FOR FREE
          </button>
        </div>
      </div>
      <div className="bg-grey-background">
        <div className="w-container flex justify-between items-center py-8 m-auto max-sm:flex-col max-sm:gap-6">
          <div className="flex items-center">
            <a className="text-xs text-secondary-text-2 cursor-pointer hover:text-primary link">Terms of Use</a>
            <a className="text-xs text-secondary-text-2 cursor-pointer hover:text-primary link">Privacy</a>
            <a className="text-xs text-secondary-text-2 cursor-pointer hover:text-primary link">Cookies</a>
          </div>
          <p className="text-xs text-secondary-text-2 max-sm:leading-loose">Copyright © 2025 Mitsogo Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
