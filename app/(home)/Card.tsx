import React from "react";
import Link from "next/link";
import { neuropolitical } from "../fonts";
import { cardConfig } from "../config/card";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="px-4 py-10 md:px-10 w-[90vw] flex flex-col gap-24 justify-between items-center text-wh-100">
      <h2
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
      >
        Popular Services
      </h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-10 md:gap-20">
        {cardConfig.mainCard.map((item, index) => (
          <div className="p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20 hover:cursor-default">
            <div className="p-2 shadow-md bg-wh-400 hover:bg-grainy-rect bg-center bg-cover flex justify-center items-center rounded-full duration-500">
              <div className="h-[180px] w-[180px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center">
                <h3 className={`${neuropolitical.className} p-4 text-md`}>
                  {item.title}
                </h3>
                <item.icon className="h-8 w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[500px] p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
          <div className="w-full p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-between items-center rounded-full">
            <Link
              className="w-full py-2 shadow-md rounded-l-full bg-bl-900 bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 duration-500"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="w-full py-2 shadow-md rounded-r-full bg-bl-900 bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center hover:bg-opacity-70 active:bg-opacity-70 duration-500"
              href="/services"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
