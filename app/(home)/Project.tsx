import React from "react";
import Image from "next/image";
import { neuropolitical } from "../fonts";
import TinaImage from "../../public/tina-mockup.webp";
import TinaTablet from "../../public/tina-tablet.webp";
import FlowaeImage from "../../public/flowae-mockup.webp";
import FlowaePhone from "../../public/flowae-devices.webp";
import Link from "next/link";

type Props = {};

const Project = (props: Props) => {
  return (
    <div className="p-4 py-10 md:p-10 w-[90vw] md:w-[80vw] flex flex-col justify-between items-center gap-24 text-bl-900 text-left">
      <div className="flex gap-10 text-wh-100">
        <h2
          className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
        >
          Our Work
        </h2>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-4 gap-4">
        <div className="flex flex-col justify-between items-center gap-10 row-span-4 rounded-2xl p-4 bg-wh-100">
          <Image
            className="rounded-2xl hover:scale-110 overflow-hidden transition duration-300"
            alt="Project Image"
            src={TinaTablet}
          />
          <p className="text-bl-900 text-sm md:text-lg">
            Innovative Redesign - WordPress Development
          </p>
          <div className="h-[100px] flex justify-center items-center group">
            <div className="group-hover:p-2 group-active:p-2 duration-200 bg-bl-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-bl-900 border-opacity-20">
              <div className="group-hover:p-2 group-active:p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                <a
                  target="_blank"
                  className="px-6 py-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 text-wh-100"
                  href="https://tinatattoo.com/"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full p-10 md:p-0 rounded-2xl col-span-2 bg-wh-100">
          <h3
            className={`${neuropolitical.className} text-bl-900 font-bold text-xl md:text-2xl`}
          >
            3T Permanent MakeUp
          </h3>
        </div>
        <div className="overflow-hidden rounded-2xl col-span-2 row-span-3 col-start-2 row-start-2">
          <Image
            className="h-[100%] w-[100%] object-cover rounded-2xl hover:scale-110 overflow-hidden transition duration-300"
            alt="Project Image"
            src={TinaImage}
          />
        </div>
      </div>

      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-4 gap-4">
        <div className="flex flex-col justify-between items-center gap-10 row-span-4 rounded-2xl p-4 bg-wh-100">
          <Image
            className="rounded-2xl hover:scale-110 overflow-hidden transition duration-300"
            alt="Project Image"
            src={FlowaePhone}
          />
          <p className="text-bl-900 text-sm md:text-lg">
            Next Level of Web Design - Next.JS 13 Development
          </p>
          <div className="h-[100px] flex justify-center items-center group">
            <div className="group-hover:p-2 group-active:p-2 duration-200 bg-bl-900 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-bl-900 border-opacity-20">
              <div className="group-hover:p-2 group-active:p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                <Link
                  className="px-6 py-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 text-wh-100"
                  href="https://flowae.io/"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full p-10 md:p-0 rounded-2xl col-span-2 bg-wh-100">
          <h3
            className={`${neuropolitical.className} text-bl-900 font-bold text-xl md:text-2xl`}
          >
            flowae
          </h3>
        </div>
        <div className="overflow-hidden rounded-2xl col-span-2 row-span-3 col-start-2 row-start-2">
          <Image
            className="h-[100%] w-[100%] object-cover rounded-2xl hover:scale-110 overflow-hidden transition duration-300"
            alt="Project Image"
            src={FlowaeImage}
          />
        </div>
      </div>

      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Project;
