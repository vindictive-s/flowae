"use client";
import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { neuropolitical } from "../fonts";

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [message, setMessage] = useState({ value: "" });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const userCollectionRef = collection(db, "Contact Form");

  const handleSubmit = (e: any) => {
    addDoc(userCollectionRef, {
      name: name.value,
      email: email.value,
      message: message.value,
    });
    e.preventDefault();
    setSubmittedMessage(true);
    clearForm();
  };

  const clearForm = () => {
    setName({ value: "" });
    setEmail({ value: "" });
    setMessage({ value: "" });
  };

  return (
    <div className="px-4 md:px-10 w-[90vw]">
      <div className="bg-bl-900 bg-opacity-60 px-4 py-4 md:px-10 md:py-10 rounded-2xl backdrop-blur-sm">
        <div className="flex justify-center items-center gap-2 mb-10 text-xl sm:text-2xl text-wh-100">
          <h2
            className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
          >
            Contact Us
          </h2>
        </div>
        <form
          className="w-full py-4 flex flex-col justify-center items-center gap-8"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-between items-left text-left gap-10">
            <label htmlFor="name">
              Name *:
              <input
                className="mt-4 px-6 py-2 shadow-md bg-wh-100 bg-opacity-10 backdrop-blur-sm text-wh-100 rounded-full border-2 border-bl-900 border-opacity-90 flex flex-col justify-center items-center hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 focus:outline-none focus:border-2 focus:border-pink-main"
                id="name"
                type="text"
                placeholder="Enter your name..."
                value={name.value}
                onChange={(e) => setName({ ...name, value: e.target.value })}
                onBlur={() => {
                  setName({ ...name });
                }}
                autoComplete="name"
                required
              />
            </label>
            <label htmlFor="email">
              Email *:
              <input
                className="mt-4 px-6 py-2 shadow-md bg-wh-100 bg-opacity-10 backdrop-blur-sm text-wh-100 rounded-full border-2 border-bl-900 border-opacity-90 flex flex-col justify-center items-center hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 focus:outline-none focus:border-2 focus:border-pink-main"
                id="email"
                type="email"
                placeholder="Enter your email..."
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
                onBlur={() => {
                  setEmail({ ...email });
                }}
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-left">
            <label className="w-full md:w-[50%] text-left" htmlFor="message">
              Message *:
            </label>
            <textarea
              className="w-full md:w-[50%] mt-4 px-6 py-2 shadow-md bg-wh-100 bg-opacity-10 backdrop-blur-sm text-wh-100 rounded-3xl border-2 border-bl-900 border-opacity-90 flex flex-col justify-center items-center hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 focus:outline-none focus:border-2 focus:border-pink-main"
              id="message"
              rows={8}
              cols={80}
              placeholder="Enter your message..."
              value={message.value}
              onChange={(e) =>
                setMessage({ ...message, value: e.target.value })
              }
              onBlur={() => {
                setMessage({ ...message });
              }}
              autoComplete="off"
              required
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="p-2 duration-400 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                <button
                  className="px-6 py-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm text-wh-100 rounded-full flex flex-col justify-center items-center hover:bg-opacity-80 active:bg-opacity-80"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {submittedMessage && <p className="submitted-text">Form Submitted</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
