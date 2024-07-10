import { useState, createContext } from "react";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardNumber, setCardNumber] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();
  
  const monthChanger = (e) => {setMonth(e.target.value)}
  const yearChanger = (e) => {setYear(e.target.value)}
  const cvcChanger = (e) => {setCvc(e.target.value)}
  const cardNumberChanger = (e) => {setCardNumber(e.target.value)};

  return(
    <CardContext.Provider value={{cardNumber, cardNumberChanger, month, monthChanger, year, yearChanger, cvc, cvcChanger}}>
        {children}
    </CardContext.Provider>
  )
};

export {CardContext, CardProvider}