"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { navConfig } from "../config/nav";
import Image from "next/image";
import LogoW from "../../public/ae-flower-logo-w.svg";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-[100%] bg-bl-900 bg-opacity-60 z-50 backdrop-blur-sm">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <Link href="/">
          <Image
            src={LogoW}
            alt="Logo"
            width="50"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden md:flex justify-between items-center gap-10 text-wh-100">
          {navConfig.mainNav.map((item, index) => (
            <Link
              className="hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full px-4 py-2 duration-500"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div>
          <a
            className="px-6 py-2 border-2 rounded-full border-wh-100 border-opacity-20 text-wh-100 bg-wh-100 bg-opacity-10 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500 backdrop-blur-sm"
            href="/#contact-section"
          >
            Let's talk
          </a>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <div
          className={
            isOpen
              ? "fixed right-0 top-0 w-[100%] h-[100dvh] md:hidden bg-gradient-gradual text-wh-100 animate-fade animate-once animate-duration-500 animate-ease-in-out z-50"
              : "hidden"
          }
        >
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer flex w-full items-center justify-end px-10 py-4 animate-fade animate-once animate-duration-500 animate-ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="h-[100vh] flex flex-col justify-center items-center text-xl gap-10 px-10 py-4 z-50 animate-fade-down animate-once animate-duration-300 animate-ease-in-out">
            <Link href="/">
              <Image
                onClick={handleNav}
                src={LogoW}
                alt="Logo"
                width="50"
                className="mb-4 cursor-pointer"
                priority
              />
            </Link>
            {navConfig.mainNav.map((item, index) => (
              <Link
                onClick={handleNav}
                className="w-full text-center hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full px-4 py-2 duration-500"
                key={index}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
