import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

const App = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");

  const handleChanger = (e) => {setCardNumber(e.target.value)};

  return (
    <>
    <div className="flex justify-evenly items-center mt-32">
      <div className="flex flex-col gap-12 ">
        <Card cardNumber={cardNumber} />
        <img src="/images/images/bg-card-back.png" className="w-96 h-52 ml-16" alt="" />
      </div>

      <Form cardNumber={cardNumber} handleChanger={handleChanger} />
    </div>
    </>
  );
};

export default App;