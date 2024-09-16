import React from "react";
import { neuropolitical } from "../fonts";
import Button from "../(shared)/Button";
import Image from "next/image";
import FlowaeLogo from "../../public/ae-banner-uni.webp";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="px-4 py-10 md:px-10 w-[90vw]">
      <div className="flex flex-col justify-between items-center gap-24 text-wh-100 p-8 rounded-xl bg-bl-900 bg-opacity-60 backdrop-blur-sm text-left text-lg border-2 border-wh-600 border-opacity-20">
        <h2
          className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
        >
          Infinite Expressions:{" "}
          <span className="text-transparent bg-clip-text bg-grainy-rect">
            Weaving Artistic Connections Across Dimensions
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-[50%] h-full flex justify-center items-center">
            <Image loading="lazy" alt="title" src={FlowaeLogo} />
          </div>
          <p className="md:w-[50%] md:text-2xl tracking-wide">
            Discover our <strong className="underline">dynamic</strong> brand
            design agency, where{" "}
            <strong className="underline">creativity</strong> converges with the
            best of{" "}
            <strong className="underline">code and no-code development</strong>.
            We craft{" "}
            <strong className="underline">captivating brand identities</strong>{" "}
            and deliver <strong className="underline">exceptional</strong>{" "}
            design solutions tailored to your unique needs. From meticulous
            research to stunning applications, we create{" "}
            <strong className="underline">memorable</strong> brand experiences.
            With unwavering <strong className="underline">commitment</strong>{" "}
            and ongoing brand management, let's unlock your brand's full
            potential together.
          </p>
        </div>

        <div className="h-[100px]">
          <Button urlPath="/#contact-section">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
