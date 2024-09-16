import React from "react";
import { neuropolitical } from "../fonts";
import { processConfig } from "../config/process";

type Props = {};

const Process = (props: Props) => {
  return (
    <div className="p-4 py-10 md:p-10 w-[90vw] flex flex-col justify-between items-center gap-24 text-wh-100 text-sm">
      <div className="flex text-wh-100">
        <h2
          className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
        >
          Our Process
        </h2>
      </div>
      {processConfig.mainProcess.map((item, index) =>
        index % 2 == 0 ? (
          <div
            className="w-[100%] flex justify-between items-center sm:justify-center gap-10 md:gap-20"
            key={index}
          >
            <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full">
                <div className="h-[180px] w-[80px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center">
                  <h3 className={`${neuropolitical.className} text-2xl`}>
                    {item.count}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full">
                <div className="h-[180px] w-[180px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center">
                  <h3 className={`${neuropolitical.className} p-4 text-md`}>
                    {item.title}
                  </h3>
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-[100%] flex justify-between items-center sm:justify-center gap-10 md:gap-20"
            key={index}
          >
            <div className="p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full">
                <div className="h-[180px] w-[180px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center">
                  <h3 className={`${neuropolitical.className} p-4 text-md`}>
                    {item.title}
                  </h3>
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
            </div>
            <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full">
                <div className="h-[180px] w-[80px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center">
                  <h3 className={`${neuropolitical.className} text-2xl`}>
                    {item.count}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Process;
