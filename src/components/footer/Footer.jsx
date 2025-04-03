import { getUEM } from "@/assets";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary relative">
        <img src={getUEM} className="absolute top-0 w-full h-full opacity-15 z-10" style={{objectFit: "cover"}}/>
        <div className="w-container py-16 flex flex-col items-center justify-center m-auto gap-8 z-20 relative">
          <h2 className="text-[42px] text-white w-2/3 text-center leading-snug font-bold max-xl:w-full max-sm:text-3xl">
            Get Hexnode UEM and start securing your endpoints
          </h2>
          <button className="bg-action rounded-sm py-4 px-12 text-white max-sm:w-full max-sm:text-sm hover:bg-white hover:text-action hover:border-action" aria-label="Try Hexnode for free">
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
