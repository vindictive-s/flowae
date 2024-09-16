import React from "react";
import Structure from "../(shared)/Structure";
import { neuropolitical } from "../fonts";
import Project from "../(home)/Project";

export const metadata = {
  title: "Work",
  description:
    "Immerse yourself in the brilliance of our innovative designs, the impact of our successful campaigns, and the transformative power of our solutions. With meticulous curation, we highlight our commitment to excellence and client satisfaction.",
  alternates: {
    canonical: "https://flowae.io/work",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left text-wh-100`}
      >
        flowae Case Studies
      </h1>
      <Project />
    </Structure>
  );
};

export default page;
