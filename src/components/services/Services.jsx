import React from "react";
import { keyGenerator } from "../../utils/helpers";
import zeroTouch from "../../assets/zero-touch.webp";
import automation from "../../assets/automation.webp";
import remoteAccess from "../../assets/remote-access.webp";
import endPointSecurity from "../../assets/endpoint-security.webp";
import integrations from "../../assets/integrations.webp";
import appManagement from "../../assets/app-management.webp";

let servicesContent = [
  {
    image: zeroTouch,
    title: "Zero-touch Enrollment",
    description:
      "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
  },
  {
    image: automation,
    title: "Automation",
    description:
      "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
  },
  {
    image: remoteAccess,
    title: "Remote Access Management",
    description:
      "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
  },
  {
    image: endPointSecurity,
    title: "Endpoint Security and Compliance",
    description:
      "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
  },
  {
    image: integrations,
    title: "Integrations",
    description:
      "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
  },
  {
    image: appManagement,
    title: "App Management",
    description:
      "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
  },
];

const Services = () => {
  return (
    <section className="bg-white flex flex-col gap-20 items-center py-20 max-sm:w-full">
      <h2 className="text-4xl font-bold w-2/4 text-center max-xl:w-5/6 max-sm:text-center max-sm:text-3xl">
        Powerful endpoint management, built for the devices you choose
      </h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:w-full gap-10 max-lg:gap-5 w-container max-sm:flex max-sm:flex-col max-sm:w-full max-sm:gap-4">
        {servicesContent.map((item) => (
          <div
            key={keyGenerator(item.title, "_")}
            className="flex flex-col hover:shadow-md p-6 rounded-md hover:shadow-primary-100"
          >
            <div>
              <img src={item.image} />
            </div>
            <div className="flex flex-col mt-6 gap-6 max-xl:gap-2">
              <h3 className="text-3xl font-bold max-xl:text-2xl max-sm:text-center">{item.title}</h3>
              <p className="text-lg text-secondary-text max-xl:leading-6 max-lg:leading-7 max-xl:text-[16px] max-sm:text-center max-sm:font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
