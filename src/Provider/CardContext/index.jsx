import { useState, createContext, useEffect } from "react";
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
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.log("Sign up data: ", data);
    } catch (error) {
      setError("cardholderName", {
        message: "Name is required",
      });
    }
  };
  
  useEffect(() => {
    register("cardholderName", { required: "Cardholder name is required" });
  }, [register]);

  useEffect(() => {
    register("cardNumber", { required: "Card number is required" });
  }, [register]);

  useEffect(() => {
    register("month", { required: "Month is required" });
  }, [register]);

  useEffect(() => {
    register("year", { required: "Year is required" });
  }, [register]);

  useEffect(() => {
    register("cvc", { required: "Cvc is required" });
  }, [register]);

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

  useEffect(() => {
    setValue("cardholderName", cardholderName);
  }, [cardholderName, setValue]);

  useEffect(() => {
    setValue("cardNumber", cardNumber);
  }, [cardNumber, setValue]);

  useEffect(() => {
    setValue("month", month);
  }, [month, setValue]);

  useEffect(() => {
    setValue("year", year);
  }, [year, setValue]);

  useEffect(() => {
    setValue("cvc", cvc);
  }, [cvc, setValue]);

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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
