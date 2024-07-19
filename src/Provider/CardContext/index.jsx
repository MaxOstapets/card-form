import { useState, createContext } from "react";
import { useForm } from "react-hook-form";

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardholderName, setCardholderName] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvc, setCvc] = useState();

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const func = () => {
    const singleValue = getValues(cardholderName)
    return singleValue
  }

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.log(data);
    } catch (error) {
      setError("name", {
        message: "Name is required",
      });
    }
  };

  const cardholderNameChanger = (e) => {
    setCardholderName(e.target.value);
  };
  const monthChanger = (e) => {
    setMonth(e.target.value);
  };
  const yearChanger = (e) => {
    setYear(e.target.value);
  };
  const cvcChanger = (e) => {
    setCvc(e.target.value);
  };
  const cardNumberChanger = (e) => {
    const rawValue = e.target.value.replace(/\s/g, "");
    const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  return (
    <CardContext.Provider
      value={{
        cardNumber,
        cardNumberChanger,
        month,
        monthChanger,
        year,
        yearChanger,
        cvc,
        cvcChanger,
        cardholderName,
        cardholderNameChanger,
        register,
        handleSubmit,
        setError,
        errors,
        isSubmitting,
        onSubmit,
        getValues,
        func
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
