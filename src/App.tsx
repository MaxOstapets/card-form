import Form from "./Components/Form";
import Card from "./Components/Card";
import Cvc from "./Components/Сvc";
// import Registered from "./Components/Registered";
// import Button from "./Components/Button";
import { useState } from "react";
import React from 'react'

const App = () => {
  const [currentComponent, setCurrentComponent] = useState("registration");

  const handleCurrentComponentChanger = () => {
    setCurrentComponent(
      currentComponent === "registration" ? "registered" : "registration"
    );
  };

  return (
    <>
      <div className="flex justify-evenly items-center mt-32 sm:mt-8 sm:flex-col sm:gap-32">
        <div className="flex flex-col gap-12 sm:flex-col-reverse sm:gap-0">
          <Card />
          <Cvc />
        </div>

        {/* <div className="flex justify-center items-center flex-col gap-8"> */}
          <Form />
          {/* <Button /> */}
        {/* </div> */}

        {/* <Registered /> */}
      </div>
    </>
  );
};

export default App;
