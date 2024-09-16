import React from "react";
import Image from "next/image";
import FlowaeTitle from "/public/flowae-title.svg";
import FlowaeLogo from "/public/ae-logo-flower-dual.webp";
import Button from "../(shared)/Button";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-10">
      <div className="w-[240px] h-[240px]">
        <Image
          width={240}
          height={240}
          loading="eager"
          className="z-0"
          alt="flowae logo image"
          src={FlowaeLogo}
          priority
        />
      </div>
      <div className="w-[300px] h-[60px]">
        <Image
          width={300}
          height={300}
          loading="eager"
          className="z-10"
          alt="flowae title image"
          src={FlowaeTitle}
          priority
        />
      </div>
      <h2 className="text-2xl z-10">[ floh-ee ]</h2>
      <h3 className="md:text-xl z-10">Build Beautiful Brands Together</h3>
      <div className="h-[100px]">
        <Button urlPath="/#contact-section">Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
