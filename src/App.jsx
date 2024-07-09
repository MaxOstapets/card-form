import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

const App = () => {
  const [cardNumber, setCardNumber] = useState();
  const [cardholderName, setCardholderName] = useState()

  const cardNumberChanger = (e) => {setCardNumber(e.target.value)};
  const cardholderNameChanger = (e) => {setCardholderName(e.target.value)}

  return (
    <>
    <div className="flex justify-evenly items-center mt-32">
      <div className="flex flex-col gap-12 ">
        <Card 
          cardNumber={cardNumber} 
          cardholderName={cardholderName}
        />
        <img src="/images/images/bg-card-back.png" className="w-96 h-52 ml-16" alt="" />
      </div>

      <Form 
        cardNumber={cardNumber} 
        cardNumberChanger={cardNumberChanger} 
        cardholderName={cardholderName}
        cardholderNameChanger={cardholderNameChanger}  
      />
    </div>
    </>
  );
};

export default App;