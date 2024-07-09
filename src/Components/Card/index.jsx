import React from "react";

const Card = ({ cardNumber, cardholderName }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-900 w-96 h-52 rounded-xl flex items-left justify-end flex-col text-white">
      <h1 className="pl-7 text-2xl mb-3">{cardNumber}</h1>
      <div className="flex gap-44 mb-6 my-0 mx-auto">
        <p>{cardholderName}</p>
        <p>00/00</p>
      </div>
    </div>
  );
};

export default Card;
