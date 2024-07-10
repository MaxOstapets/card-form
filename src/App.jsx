import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import Cvc from "./Components/Сvc";

const App = () => {
  const [cardNumber, setCardNumber] = useState();
  const [cardholderName, setCardholderName] = useState()
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();
  
  const cardNumberChanger = (e) => {setCardNumber(e.target.value)};
  const cardholderNameChanger = (e) => {setCardholderName(e.target.value)}
  const monthChanger = (e) => {setMonth(e.target.value)}
  const yearChanger = (e) => {setYear(e.target.value)}
  const cvcChanger = (e) => {setCvc(e.target.value)}

  return (
    <>
    <div className="flex justify-evenly items-center mt-32">
      <div className="flex flex-col gap-12 ">
        <Card 
          cardNumber={cardNumber} 
          cardholderName={cardholderName}
          month={month}
          year={year}
        />
        {/* <img src="/images/images/bg-card-back.png" className="w-96 h-52 ml-16" alt="" /> */}
        <Cvc cvc={cvc}/>
      </div>

      <Form 
        cardNumber={cardNumber} cardNumberChanger={cardNumberChanger} 
        cardholderName={cardholderName} cardholderNameChanger={cardholderNameChanger}  
        month={month} monthChanger={monthChanger}
        year={year} yearChanger={yearChanger}
        cvc={cvc} cvcChanger={cvcChanger}
      />
    </div>
    </>
  );
};

export default App;