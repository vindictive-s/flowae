import { Roboto } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
  });

  const neuropolitical = localFont({
    src: "../public/neuropolitical.rg-regular.otf",
    display: "swap",
  });

  export { roboto, neuropolitical}