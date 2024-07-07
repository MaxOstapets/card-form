import React, { useState } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";

const App = () => {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");

  const handleChanger = (e) => {setCardNumber(e.target.value)};

  return (
    <>
      <Form cardNumber={cardNumber} handleChanger={handleChanger} />
      <Card cardNumber={cardNumber} />
    </>
  );
};

export default App;