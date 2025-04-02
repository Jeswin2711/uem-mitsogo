import React from "react";
import hexNodeAppIcon from "../../assets/hexnode-app-icon.svg";
import adopt from "../../assets/adopt.svg";
import security from "../../assets/security.svg";
import automation from "../../assets/automation.svg";
import policy from "../../assets/policy.svg";
import dotted from "../../assets/dotted.svg";

const CardData = ({ image, title, description }) => {
  return (
    <div className="border rounded-xl border-[#d7d7d7] p-10 flex flex-col gap-4 w-2/5 bg-white z-10 relative group justify-between max-xl:p-6 max-xl:w-2/4 max-sm:w-full max-sm:p-6">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-2">
          <img src={image} />
          <h5 className="text-primary font-semibold text-2xl flex items-center max-lg:text-xl">
            {title}
          </h5>
        </div>
        <p className="text-secondary-text text-lg max-lg:text-[16px]">{description}</p>
      </div>
      <a
        className={`text-action font-semibold text-lg transition-all duration-500 ease-in-out 
    opacity-0  visibility-hidden max-h-0 group-hover:opacity-100 group-hover:visibility-visible max-xl:opacity-100 max-xl:max-h-10 group-hover:max-h-10`}
        href="#"
      >
        Try Hexnode on your endpoints
      </a>
    </div>
  );
};

const whyHex = [
  {
    title: "Adapt to the new normal",
    description:
      "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
    image: adopt,
  },
  {
    title: "Zero compromise security",
    description:
      "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
    image: security,
  },
  {
    title: "Get more done with automation",
    description:
      "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
    image: automation,
  },
  {
    title: "Unified Policy Management",
    description:
      "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achive single pane of glass management with Hexnode.",
    image: policy,
  },
];

const WhyHexNode = () => {
  return (
    <section className="bg-grey-background flex justify-center">
      <div className="w-container py-14 m-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Why Hexnode?</h2>
        <div className="flex flex-col mt-10">
          <div className="w-full flex justify-between max-xl:gap-8 max-sm:flex-col max-sm:gap-8">
            {whyHex.slice(0, 2).map((item) => (
              <CardData
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="flex justify-center h-[60px] relative max-xl:hidden">
            <div class="flow left-top absolute top-[50%] left-[51%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[-170px] z-[5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="134.928"
                viewBox="0 0 177.49 134.928"
              >
                <path
                  id="path"
                  d="M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02"
                  transform="translate(19047.193 5014.062)"
                  fill="none"
                  stroke="#020a19"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke-dasharray="7"
                ></path>
              </svg>
            </div>
            <div class="flow right-top absolute top-[50%] left-[49%] translate-x-[20px] xl:translate-x-[30px] translate-y-[-170px] z-[5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="134.928"
                viewBox="0 0 177.49 134.928"
              >
                <path
                  id="path"
                  d="M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02"
                  transform="translate(19047.195 5014.062)"
                  fill="none"
                  stroke="#020a19"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke-dasharray="7"
                ></path>
              </svg>
            </div>
            <div class="flow left-bottom absolute top-[50%] left-[51%] translate-x-[-200px] xl:translate-x-[-210px] translate-y-[40px] z-[5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="134.928"
                viewBox="0 0 177.49 134.928"
              >
                <path
                  id="path"
                  d="M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02"
                  transform="translate(19047.193 5014.062)"
                  fill="none"
                  stroke="#020a19"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke-dasharray="7"
                ></path>
              </svg>
            </div>
            <div class="flow right-bottom absolute top-[50%] left-[49%] translate-x-[20px] xl:translate-x-[30px] translate-y-[40px] z-[5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="177"
                height="134.928"
                viewBox="0 0 177.49 134.928"
              >
                <path
                  id="path"
                  d="M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02"
                  transform="translate(19047.195 5014.062)"
                  fill="none"
                  stroke="#020a19"
                  stroke-linecap="round"
                  stroke-width="1"
                  stroke-dasharray="7"
                ></path>
              </svg>
            </div>
            <img src={hexNodeAppIcon} className="scale-150 pulseimage" />
          </div>
          <div className="w-full flex justify-between max-sm:flex-col max-xl:mt-8 max-xl:gap-8 max-sm:gap-8 max-sm:mt-8">
            {whyHex.slice(2).map((item) => (
              <CardData
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHexNode;
