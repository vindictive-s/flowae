import React from "react";
import SubscriptionForm from "./SubscriptionForm";
import { siteConfig } from "../config/site";
import {
  SiTwitter,
  SiInstagram,
  SiTiktok,
  SiPinterest,
  SiLinkedin,
} from "react-icons/si";
import ContactForm from "./ContactForm";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer
      className="flex flex-col items-center justify-center text-center gap-10 w-full pt-14 px-10 text-wh-100"
      id="contact-section"
    >
      <ContactForm />
      <SubscriptionForm />
      <div className="px-4 pb-10 md:px-10 w-[90vw]">
        <div className="bg-bl-900 bg-opacity-60 px-4 py-4 md:px-10 md:py-10 rounded-2xl backdrop-blur-sm">
          <div className="flex justify-center items-center gap-2 mb-10 text-xl sm:text-2xl text-wh-100">
            <a
              target="_blank"
              className="p-4 rounded-full hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500"
              href={siteConfig.links.twitter}
              aria-label="Twitter Link"
              rel="noreferrer"
            >
              <SiTwitter />
            </a>
            <a
              target="_blank"
              className="p-4 rounded-full hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500"
              href={siteConfig.links.instagram}
              aria-label="Instagram Link"
              rel="noreferrer"
            >
              <SiInstagram />
            </a>
            <a
              target="_blank"
              className="p-4 rounded-full hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500"
              href={siteConfig.links.tiktok}
              aria-label="TikTok Link"
              rel="noreferrer"
            >
              <SiTiktok />
            </a>
            <a
              target="_blank"
              className="p-4 rounded-full hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500"
              href={siteConfig.links.pinterest}
              aria-label="Pinterest Link"
              rel="noreferrer"
            >
              <SiPinterest />
            </a>
            <a
              target="_blank"
              className="p-4 rounded-full hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500"
              href="/"
              aria-label="LinkedIn Link"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </div>
          <div className="flex flex-col justify-center text-center">
            <p className="mb-4 text-xs md:text-sm text-wh-100">
              Copyright © {new Date().getFullYear()} Flowae, Inc. All rights
              reserved.
            </p>
            <div>
              <a
                className="px-4 py-2 text-xs md:text-sm text-wh-100 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
