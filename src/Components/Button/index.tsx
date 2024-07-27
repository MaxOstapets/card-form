import { CardContext } from "../../Provider/CardContext";
import { useContext } from "react";
import React from "react";

const Button = () => {
  const { isSubmitting } = useContext(CardContext);
  
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="w-80 h-10 rounded-sm bg-indigo-950 text-white text-lg flex items-center justify-center sm:w-72"
    >
      {isSubmitting ? "Loading..." : "Submit"}
    </button>
  );
};

export default Button;
