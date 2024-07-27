import React from "react";
import { CardContext } from "../../Provider/CardContext";
import { useContext } from "react";

const Card = () => {
  const { month, year, cardNumber, cardholderName } = useContext(CardContext);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-900 w-96 h-52 rounded-xl flex items-left justify-end flex-col text-white sm:w-72 sm:h-40 sm:absolute sm:top-36">
      <h1 className="pl-8 text-2xl mb-3 sm:text-xl sm:pl-4">{cardNumber}</h1>
      <div className="flex gap-32 mb-6 my-0 mx-auto sm:gap-20">
        <p>{cardholderName}</p>
        <div className="flex justify-center items-center gap-2">
          <p>{month}</p>
          <p>/</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
