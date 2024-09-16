"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "./storageHelper";
import { useState, useEffect } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleCookie = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div className="w-full">
      <div
        className={`${
          cookieConsent != null
            ? "hidden"
            : "my-10 mx-10 md:mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 p-10 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-xl border-2 border-wh-100 border-opacity-20 flex flex-col justify-center items-center z-50"
        }`}
      >
        <div className="text-left">
          <p>
            We use cookies to enhance your browsing experience and analyze site
            usage. By clicking "Accept" you agree to the storing of cookies on
            your device.
          </p>
        </div>

        <div className="mt-8 w-full flex justify-between items-center">
          <button
            className="px-6 py-2 shadow-md bg-transparent rounded-full flex flex-col justify-center items-center border-2 border-wh-100 border-opacity-20 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 duration-500 text-wh-100"
            onClick={() => setCookieConsent(false)}
          >
            Decline
          </button>
          <button
            className="px-6 py-2 shadow-md bg-wh-100 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center hover:bg-opacity-70 active::bg-opacity-70 duration-500 text-bl-900"
            onClick={() => setCookieConsent(true)}
          >
            Accept
          </button>
        </div>
        <Link
          className="mt-2 px-4 py-2 text-xs md:text-sm text-wh-100 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full"
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </div>
      <div
        className={`${
          cookieConsent != null
            ? "w-16 h-16 bg-grainy-rect fixed left-0 bottom-0 m-10 rounded-full flex justify-center items-center cursor-pointer z-40"
            : "hidden"
        }`}
      >
        <div className="p-4 bg-wh-100 bg-opacity-30 border-2 border-wh-100 border-opacity-20 rounded-full">
          <div
            className="p-2 bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full hover:bg-opacity-70 active:bg-opacity-70"
            onClick={handleCookie}
          >
            <LiaCookieBiteSolid className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div
        className={
          isOpen
            ? "fixed top-[40px] right-[0] m-10 p-10 w-auto h-auto max-w-[600px] bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-xl border-2 border-wh-100 border-opacity-20 z-40"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center">
          <h2
            onClick={handleCookie}
            className="mt-2 px-4 py-2 text-xs md:text-sm text-wh-100 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full cursor-pointer"
          >
            Close
          </h2>
          <br />
          <h3 className="w-full text-left text-2xl">Cookies Settings</h3>
          <br />

          <p>
            <strong>Required</strong>
            <br />
            <br />
            Required cookies help make a website usable by enabling basic
            functions like page navigation and access to secure areas of the
            website. This website cannot function properly without these
            cookies.
          </p>
          <br />
          <div>
            <div className="flex justify-between">
              <strong>Analytical</strong>
              <div className="relative overflow-hidden">
                <div className="flex">
                  <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={cookieConsent}
                      readOnly
                    />
                    <div
                      onClick={() => {
                        setCookieConsent(!cookieConsent);
                      }}
                      className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-pink-main  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-main"
                    ></div>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <p>
              Analytical cookies help website owners understand how visitors
              interact with websites by collecting and reporting information
              anonymously.
            </p>
          </div>
          <br />
          <Link
            className="mt-2 px-4 py-2 text-xs md:text-sm text-wh-100 hover:bg-wh-100 hover:bg-opacity-20 active:bg-wh-100 active:bg-opacity-20 rounded-full"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
