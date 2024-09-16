import React from "react";
import Structure from "../(shared)/Structure";
import Image from "next/image";
import FlowerEss from "../../public/flower-essential.webp";
import FlowerPro from "../../public/flower-pro.webp";
import FlowerEnt from "../../public/flower-enterprise.webp";
import { neuropolitical } from "../fonts";
import Spotlight, { SpotlightCard } from "../(shared)/Spotlight";

export const metadata = {
  title: "Pricing",
  description:
    "Explore our Pricing Options for Graphic Design Packages. Choose a Subscription Plan or Pay per Service to Get Custom-Tailored Designs for Your Brand. Enjoy Transparent Pricing and Flexible Options to Suit Your Business Needs.",
  alternates: {
    canonical: "https://flowae.io/pricing",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left`}
      >
        Flexible Pricing Options:{" "}
        <span className="text-transparent bg-clip-text bg-grainy-rect">
          Choose the Plan that Fits You
        </span>
      </h1>
      <div className="w-full max-w-[500px] p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="w-full p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-between items-center rounded-full">
          <h2 className="w-full py-2 shadow-md rounded-full bg-bl-900 bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center">
            The Right Plan for Your Business
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <Image
          className="w-14 animate-reverse-spin"
          src={FlowerEss}
          alt="outline flowae logo"
        />
        <Image
          className="w-14 animate-spin-slow"
          src={FlowerPro}
          alt="outline flowae logo"
        />
        <Image
          className="w-14 animate-reverse-spin"
          src={FlowerEnt}
          alt="outline flowae logo"
        />
      </div>

      <Spotlight className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-left group">
        <SpotlightCard>
          <label className="rounded-[inherit]">
            <input
              type="radio"
              className="peer sr-only"
              name="subscription-category"
              defaultChecked
            />
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 text-wh-400 p-4 rounded-[inherit] z-20 overflow-hidden hover:cursor-pointer transition-all peer-checked:text-wh-100 peer-checked:border-wh-100 duration-500">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className={`${neuropolitical.className} text-xs`}>
                  Graphic Design Packages
                </h3>
              </div>
            </div>
          </label>
        </SpotlightCard>
        <SpotlightCard>
          <label className="rounded-[inherit]">
            <input
              type="radio"
              className="peer sr-only"
              name="subscription-category"
            />
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 text-wh-400 p-4 rounded-[inherit] z-20 overflow-hidden hover:cursor-pointer transition-all peer-checked:text-wh-100 peer-checked:border-wh-100 duration-500">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className={`${neuropolitical.className} text-xs`}>
                  Email/SMS Marketing Campaigns
                </h3>
              </div>
            </div>
          </label>
        </SpotlightCard>
        <SpotlightCard>
          <label className="rounded-[inherit]">
            <input
              type="radio"
              className="peer sr-only"
              name="subscription-category"
            />
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 text-wh-400 p-4 rounded-[inherit] z-20 overflow-hidden hover:cursor-pointer transition-all peer-checked:text-wh-100 peer-checked:border-wh-100 duration-500">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className={`${neuropolitical.className} text-xs`}>
                  Content Creation Packages
                </h3>
              </div>
            </div>
          </label>
        </SpotlightCard>
        <SpotlightCard>
          <label className="rounded-[inherit]">
            <input
              type="radio"
              className="peer sr-only"
              name="subscription-category"
            />
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 text-wh-400 p-4 rounded-[inherit] z-20 overflow-hidden hover:cursor-pointer transition-all peer-checked:text-wh-100 peer-checked:border-wh-100 duration-500">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className={`${neuropolitical.className} text-xs`}>
                  Social Media Management
                </h3>
              </div>
            </div>
          </label>
        </SpotlightCard>
        <SpotlightCard>
          <label className="rounded-[inherit]">
            <input
              type="radio"
              className="peer sr-only"
              name="subscription-category"
            />
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 text-wh-400 p-4 rounded-[inherit] z-20 overflow-hidden hover:cursor-pointer transition-all peer-checked:text-wh-100 peer-checked:border-wh-100 duration-500">
              {/* Radial gradient */}
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className={`${neuropolitical.className} text-xs`}>
                  Paid Advertising Campaigns
                </h3>
              </div>
            </div>
          </label>
        </SpotlightCard>
      </Spotlight>

      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </Structure>
  );
};

export default page;
