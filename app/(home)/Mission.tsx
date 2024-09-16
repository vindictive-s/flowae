import React from "react";
import Image from "next/image";
import { neuropolitical } from "../fonts";
import Button from "../(shared)/Button";
import AePiece from "../../public/ae-missing-piece.webp";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="px-4 py-10 md:px-10 w-[90vw]" id="mission">
      <div className="flex flex-col justify-between items-center gap-24 text-wh-100 p-8 rounded-xl bg-bl-900 bg-opacity-60 backdrop-blur-sm text-left text-lg border-2 border-wh-600 border-opacity-20">
        <h2
          className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
        >
          Completing the Puzzle:{" "}
          <span className="text-transparent bg-clip-text bg-grainy-rect">
            We Are the Missing Piece for Your Business Success
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="md:w-[50%] md:text-2xl tracking-wide">
            In the <strong className="underline">intricate journey</strong> to
            business success, we at{" "}
            <strong className={`${neuropolitical.className} underline`}>
              flowæ
            </strong>{" "}
            take pride in being the{" "}
            <strong className="underline">missing piece</strong> that completes
            your puzzle. With our expertise in{" "}
            <strong className="underline">
              branding, marketing, strategy, and design
            </strong>
            , we offer the necessary tools and creativity to propel your
            business forward. <strong className="underline">Together</strong>,
            we will unravel the complexities, overcome challenges, and create a
            path to <strong className="underline">lasting success</strong>.
          </p>
          <div className="md:w-[50%] h-full flex justify-center items-center">
            <Image
              className="rounded-3xl"
              loading="lazy"
              alt="title"
              src={AePiece}
            />
          </div>
        </div>

        <div className="h-[100px]">
          <Button urlPath="/#contact-section">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Mission;
