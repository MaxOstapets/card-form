import React from "react";
import { CardContext } from '../../Provider/CardContext'
import { CardholderContext } from "../../Provider/Cardholder";
import { useContext } from "react";

const Card = () => {
  const { cardNumber, cardNumberChanger, month, monthChanger, year, yearChanger } = useContext(CardContext)
  const { cardholderName, cardholderNameChanger } = useContext(CardholderContext)
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-900 w-96 h-52 rounded-xl flex items-left justify-end flex-col text-white">
      <h1 className="pl-8 text-2xl mb-3" onChange={() => cardNumberChanger}>{cardNumber}</h1>
      <div className="flex gap-32 mb-6 my-0 mx-auto">
        <p onChange={() => cardholderNameChanger}>{cardholderName}</p>
        <div className="flex justify-center items-center gap-2">
          <p onChange={() => monthChanger}>{month}</p>
          <p>/</p>
          <p onChange={() => yearChanger}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;