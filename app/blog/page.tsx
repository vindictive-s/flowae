import React from "react";
import Structure from "../(shared)/Structure";
import { neuropolitical } from "../fonts";
import Spotlight, { SpotlightCard } from "../(shared)/Spotlight";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { RiNotionFill } from "react-icons/ri";

export const metadata = {
  title: "Blog",
  description:
    "Discover expert insights and valuable tips on our blog page, covering a wide range of topics to enhance your knowledge and empower your success. Our articles offer in-depth analysis, practical strategies, and industry trends to keep you informed and ahead of the competition.",
  alternates: {
    canonical: "https://flowae.io/blog",
  },
};

type Props = {};

export default function page() {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left text-wh-100`}
      >
        Blog & Resources
      </h1>

      <Spotlight className="w-full flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 gap-4 text-left group">
        <SpotlightCard>
          <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 p-4 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col justify-between items-center text-center">
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-wh-400"
                  aria-hidden="true"
                ></div>
                <div className="m-8 p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-100 border-opacity-10 rounded-full">
                  <div className="p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-100 border-opacity-10 rounded-full">
                    <BsGithub className="w-8 h-8 inline-flex animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h3 className={`${neuropolitical.className} h-[60px]`}>
                  Next.JS 13 Starter
                </h3>
                <p className="my-2 text-sm text-wh-400 text-left h-[60px]">
                  Quickly start your next React Application.
                </p>
              </div>
              <div className="h-[100px] flex justify-center items-center">
                <div className="p-2 duration-400 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
                  <div className="p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                    <a
                      target="_blank"
                      className="p-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 text-wh-100"
                      href="https://github.com/flowae-tech/store-starter"
                    >
                      <BsLink45Deg className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
        <SpotlightCard>
          <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 p-4 rounded-[inherit] z-20 overflow-hidden">
            {/* Radial gradient */}
            <div
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
              aria-hidden="true"
            >
              <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
            </div>
            <div className="flex flex-col justify-between items-center text-center">
              <div className="relative inline-flex">
                <div
                  className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-wh-400"
                  aria-hidden="true"
                ></div>
                <div className="m-8 p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-100 border-opacity-10 rounded-full">
                  <div className="p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-100 border-opacity-10 rounded-full">
                    <RiNotionFill className="w-8 h-8 inline-flex animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h3 className={`${neuropolitical.className} h-[60px]`}>
                  Free Notion Template
                </h3>
                <p className="my-2 text-sm text-wh-400 text-left h-[60px]">
                  Track habits and tasks with this Notion Template.
                </p>
              </div>
              <div className="h-[100px] flex justify-center items-center">
                <div className="p-2 duration-400 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
                  <div className="p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                    <a
                      target="_blank"
                      className="p-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 text-wh-100"
                      href="https://cooperative-hoodie-bf9.notion.site/Weekly-Planner-2050eaeea6bf455081fbe077bb5d0e81?pvs=4"
                    >
                      <BsLink45Deg className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Spotlight>

      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </Structure>
  );
}
