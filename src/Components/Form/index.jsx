import React from "react";

const Form = ({ cardNumber, cardNumberChanger, cardholderName, cardholderNameChanger }) => {
  return (
    <form className="flex items-center justify-center flex-col gap-8">
      <div className="flex items-center justify-center flex-col gap-10 text-indigo-800">
        <div className="flex items-start flex-col gap-1 ">
          <label className="text-sm">Cardholder Name</label>
          <input type="text" name="cardHolderName" onChange={cardholderNameChanger} value={cardholderName} className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"/>
        </div>

        <div className="flex items-start flex-col gap-1">
          <label>Card Number</label>
          <input type="text" value={cardNumber} onChange={cardNumberChanger} className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"/>
        </div>

        <div>
          <label className="text-sm">EXP. DATE MM/YY CVC</label>
          <div className="flex items-center justify-center gap-5">
            <div className="flex gap-2">
             <input type="text" name="expMonth" placeholder="MM" className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"/>
             <input type="text" name="expYear" placeholder="YY" className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"/>
            </div>
            
            <input type="text" name="cvc" placeholder="CVC" className="w-32 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"/>
          </div>
        </div>
      </div>

      <button className="w-80 h-10 rounded-sm bg-indigo-950 text-white text-lg flex items-center justify-center">Confirm</button>
    </form>
  );
};

export default Form;
