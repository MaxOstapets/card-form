import { useState, createContext, useEffect } from "react";
import { useForm } from "react-hook-form";

const CardContext = createContext();

const numbers = /\d/;
const characters = /[a-zA-Zа-яА-Я,./*+?^${}()]/;

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
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Sign up data: ", data);
  };

  useEffect(() => {
    register("cardholderName", {
      required: "Cardholder name is required",
      validate: (value) => {
        if (numbers.test(value)) {
          return "Cardholder name is not suposed to have a numbers";
        }
        return true;
      },
    });
  }, [register]);

  useEffect(() => {
    register("cardNumber", {
      required: "Card number is required",
      minLength: {
        value: 19,
        message: "Card number must have at least 16 numbers",
      },
      maxLength: {
        value: 19,
        message: "Card number must not have at least more than 16 numbers",
      },
      validate: (value) => {
        if (characters.test(value)) {
          return "Card number is not suposed to have a letters";
        }
        return true;
      },
    });
  }, [register]);

  useEffect(() => {
    register("month", {
      required: "Month is required",
      minLength: {
        value: 2,
        message: "Month must have at least 2 numbers",
      },
      maxLength: {
        value: 2,
        message: "Month must not have at least more than 2 numbers",
      },
      validate: (value) => {
        if (characters.test(value)) {
          return "Month is not suposed to have a letters";
        }
        return true;
      },
    });
  }, [register]);

  useEffect(() => {
    register("year", {
      required: "Year is required",
      minLength: {
        value: 2,
        message: "Year must have at least 2 numbers",
      },
      maxLength: {
        value: 2,
        message: "Year must not have at least more than 2 numbers",
      },
      validate: (value) => {
        if (characters.test(value)) {
          return "Year is not suposed to have a letters";
        }
        return true;
      },
    });
  }, [register]);

  useEffect(() => {
    register("cvc", {
      required: "Cvc is required",
      minLength: {
        value: 3,
        message: "Cvc must have at least 3 numbers",
      },
      maxLength: {
        value: 3,
        message: "Cvc must not have at least more than 3 numbers",
      },
      validate: (value) => {
        if (characters.test(value)) {
          return "Cvc is not suposed to have a letters";
        }
        return true;
      },
    });
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
