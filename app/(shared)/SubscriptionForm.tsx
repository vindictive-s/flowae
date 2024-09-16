"use client";
import React, { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { neuropolitical } from "../fonts";

type Props = {};

const SubscriptionForm = (props: Props) => {
  const [email, setEmail] = useState({ value: "" });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const userCollectionRef = collection(db, "Subscribed Emails");

  const handleSubmit = (e: any) => {
    addDoc(userCollectionRef, {
      email: email.value,
    });
    e.preventDefault();
    setSubmittedMessage(true);
    clearForm();
  };

  const clearForm = () => {
    setEmail({ value: "" });
  };

  return (
    <div className="px-4 md:px-10 w-[90vw]">
      <div className="bg-bl-900 bg-opacity-60 px-4 py-4 md:px-10 md:py-10 rounded-2xl backdrop-blur-sm">
        <div className="flex justify-center items-center gap-2 mb-10 text-xl sm:text-2xl text-wh-100">
          <h2
            className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter`}
          >
            Stay Updated
          </h2>
        </div>
        <form
          className="py-4 flex flex-col md:flex md:flex-row justify-center items-center gap-8"
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              className="px-6 py-2 shadow-md bg-wh-100 bg-opacity-10 backdrop-blur-sm text-wh-100 rounded-full border-2 border-bl-900 border-opacity-90 flex flex-col justify-center items-center hover:bg-opacity-20 active:bg-opacity-20 focus:bg-opacity-20 focus:outline-none focus:border-2 focus:border-pink-main"
              id="email--subscription"
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
          </div>
          <div className="flex justify-center items-center">
            <div className="p-2 duration-400 bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
              <div className="p-2 duration-200 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
                <button
                  className="px-6 py-2 shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm text-wh-100 rounded-full flex flex-col justify-center items-center hover:bg-opacity-80 active:bg-opacity-80"
                  type="submit"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          {submittedMessage && (
            <p className="submitted-text">Email Subscribed</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
