import React from "react";
import Structure from "../(shared)/Structure";
import Button from "../(shared)/Button";
import { neuropolitical } from "../fonts";
import { servicesConfig } from "../config/services";
import { BsGear } from "react-icons/bs";
import Spotlight, { SpotlightCard } from "../(shared)/Spotlight";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Explore the breadth and depth of our expertise as we provide a wide range of tailored services to elevate your brand. From crafting captivating brand identities to designing immersive digital experiences, our services encompass every aspect of branding success.",
  alternates: {
    canonical: "https://flowae.io/services",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left text-wh-100`}
      >
        Your Ultimate Branding Agency
      </h1>
      <div className="w-full max-w-[500px] p-2 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="w-full p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-between items-center rounded-full">
          <h2 className="w-full py-2 shadow-md rounded-full bg-bl-900 bg-opacity-90 backdrop-blur-sm flex flex-col justify-center items-center">
            Our Comprehensive Range of Services
          </h2>
        </div>
      </div>
      <Spotlight className="w-full flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-4 text-left group">
        {servicesConfig.mainServices.map((item, index) => (
          <SpotlightCard>
            <div className="relative h-full bg-bl-900 bg-opacity-20 backdrop-blur-sm border-2 border-wh-600 border-opacity-20 p-4 rounded-[inherit] z-20 overflow-hidden">
              <div
                className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-bl-900 rounded-full blur-[80px]"></div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative inline-flex">
                  <div
                    className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-wh-400"
                    aria-hidden="true"
                  ></div>
                  <div className="m-8 p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-600 border-opacity-20 rounded-full">
                    <div className="p-2 bg-wh-100 bg-opacity-10 border-2 border-wh-600 border-opacity-20 rounded-full">
                      <BsGear className="w-8 h-8 inline-flex text-wh-100 animate-spin-slow" />
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className={`${neuropolitical.className} h-[60px]`}>
                    {item.title}
                  </h3>
                  <Link
                    href="/services/#contact-section"
                    className="my-2 text-lg text-accent-pink text-left"
                  >
                    {item.price}
                  </Link>
                  <p className="text-sm text-wh-400 text-left">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </Spotlight>

      <Button urlPath="/pricing">Pricing</Button>
    </Structure>
  );
};

export default page;
