import "./background.css";
import React from "react";
import Image from "next/image";
import Flower from "@/public/ae-flower-outline.svg";

type Props = {};

const items = [
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
  "icon",
];

const Background = (props: Props) => {
  return (
    <div>
      <ul className="circles bg-gradient-gradual">
        {items.map((item, index) => {
          return (
            <li key={item + index} className="flex">
              <Image
                src={Flower}
                alt="Animated Flower Logo"
                className="w-full h-full opacity-100 items-center justify-center"
                priority
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Background;
