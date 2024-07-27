import { GiConfirmed } from "react-icons/gi";
import React from "react";

const Registered = () => {
  return (
    <section className="flex flex-col gap-12 justify-center items-center">
      <div className="flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-900 w-20 h-20 rounded-full text-white text-4xl"><GiConfirmed /></div>
      <div className="flex justify-center items-center flex-col gap-2">
        <p className="text-3xl text-indigo-950">THANK YOU</p>
        <p className="text-lg text-gray-700">We've added your card details</p>
      </div>
      <button className="w-80 h-10 rounded-sm bg-indigo-950 text-white text-lg flex items-center justify-center sm:w-72">Continue</button>
    </section>
  );
};

export default Registered;