import React from "react";
import Structure from "../(shared)/Structure";
import { neuropolitical } from "../fonts";
import Cards from "./Cards";

export const metadata = {
  title: "About",
  description:
    "Welcome to our About page, where our purpose thrives. We are a visionary collective, fuelled by creativity and driven by innovation. With transformative brand strategies, we transcend norms and propel businesses to extraordinary heights. Our diverse team merges artistry, strategy, and technology to craft magical brand experiences. Beyond aesthetics, we align brands with purpose and impact, driving positive change. Whether you seek disruption, revival, or boundless vision, join us on this extraordinary journey. Together, let's redefine possibilities, elevate your brand, and shape an enduring legacy. Welcome to the realm of limitless potential. Welcome to our story.",
  alternates: {
    canonical: "https://flowae.io/about",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left text-wh-100`}
      >
        Spark Your Brand's Magic:{" "}
        <span className="text-transparent bg-clip-text bg-grainy-rect">
          Where Creativity, Innovation and Freedom Come Together
        </span>
      </h1>
      <div className="w-full grid grid-cols-auto gap-20">
        <Cards />
      </div>
      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </Structure>
  );
};

export default page;
