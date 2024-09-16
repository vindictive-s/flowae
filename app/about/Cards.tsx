import React from "react";
import { neuropolitical } from "../fonts";
import Image from "next/image";
import AeFlower from "../../public/ae-flower-outline.svg";

type Props = {};

const Cards = (props: Props) => {
  return (
    <>
      <div className="box relative w-full h-[600px] rounded-2xl backdrop-blur-sm">
        <div className="w-full h-full bg-grainy-purple opacity-60 rounded-2xl"></div>
        <div className="sky">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
        </div>
        <Image
          className="absolute rotate-45 top-10 left-0 right-0 mx-auto"
          src={AeFlower}
          alt="flower image outline"
        />
        <h2 className="absolute bottom-0 left-0 right-0 mx-auto p-10 text-left md:text-2xl">
          Welcome to{" "}
          <span className={`${neuropolitical.className} animate-pulse`}>
            flowæ
          </span>{" "}
          , where creativity and strategy converge to bring your brand to life.
          Our team of passionate experts is dedicated to providing innovative
          solutions that propel your business forward.
        </h2>
      </div>
      <div className="box relative w-full h-[600px] rounded-2xl backdrop-blur-sm">
        <div className="w-full h-full bg-grainy-orange opacity-60 rounded-2xl"></div>
        <div className="sky">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
        </div>
        <Image
          className="absolute rotate-45 top-10 left-0 right-0 mx-auto"
          src={AeFlower}
          alt="flower image outline"
        />
        <h2 className="absolute bottom-0 left-0 right-0 mx-auto p-10 text-left md:text-2xl">
          With years of experience in the industry, we have honed our skills in
          crafting compelling brand identities, designing captivating marketing
          campaigns, and delivering measurable results. We pride ourselves on
          our commitment to excellence and client satisfaction. As you navigate
          through our website, you'll discover our portfolio of successful
          projects, testimonials from satisfied clients, and the array of
          services we offer to cater to your unique business needs.
        </h2>
      </div>
      <div className="box relative w-full h-[600px] rounded-2xl backdrop-blur-sm">
        <div className="w-full h-full bg-grainy-green opacity-60 rounded-2xl"></div>
        <div className="sky">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
        </div>
        <Image
          className="absolute rotate-45 top-10 left-0 right-0 mx-auto"
          src={AeFlower}
          alt="flower image outline"
        />

        <h2 className="absolute bottom-0 left-0 right-0 mx-auto p-10 text-left md:text-2xl">
          As you navigate through our website, you'll discover our portfolio of
          successful projects, testimonials from satisfied clients, and the
          array of services we offer to cater to your unique business needs. Our
          mission is to help your brand stand out in the competitive market and
          make a lasting impact on your audience.
        </h2>
      </div>
      <div className="box relative w-full h-[600px] rounded-2xl backdrop-blur-sm">
        <div className="w-full h-full bg-grainy-blue opacity-60 rounded-2xl"></div>
        <div className="container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="shooting-stars"></div>
          </div>
        </div>
        <Image
          className="absolute rotate-45 top-10 left-0 right-0 mx-auto"
          src={AeFlower}
          alt="flower image outline"
        />
        <h2 className="absolute bottom-0 left-0 right-0 mx-auto p-10 text-left md:text-2xl">
          We value the relationships we build with our clients and partners, and
          we approach each project with a collaborative spirit. Your success is
          our success, and together, we can achieve greatness. Thank you for
          visiting flowae. We look forward to the opportunity to work with you
          and turn your brand's vision into reality.
        </h2>
      </div>
      <div className="box relative w-full h-[600px] rounded-2xl backdrop-blur-sm">
        <div className="w-full h-full bg-grainy-yellow opacity-60 rounded-2xl"></div>
        <div className="container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars1"></div>
            <div className="stars2"></div>
            <div className="shooting-stars"></div>
          </div>
        </div>
        <Image
          className="absolute rotate-45 top-10 left-0 right-0 mx-auto"
          src={AeFlower}
          alt="flower image outline"
        />
        <h2 className="absolute bottom-0 left-0 right-0 mx-auto p-10 text-left md:text-2xl">
          Let's create something remarkable together! For inquiries, please
          reach out to{" "}
          <span className={`${neuropolitical.className} animate-pulse`}>
            hello@flowae.io
          </span>{" "}
          or fill the contact form below.
        </h2>
      </div>
    </>
  );
};

export default Cards;
