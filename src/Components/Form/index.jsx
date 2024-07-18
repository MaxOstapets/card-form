import React from "react";
import { CardContext } from "../../Provider/CardContext";
import { useContext } from "react";

const Form = () => {
  const {
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
    errors,
    isSubmitting,
    onSubmit,
  } = useContext(CardContext);

  return (
    <form
      className="flex items-center justify-center flex-col gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center flex-col gap-10 text-indigo-800">
        <div className="flex items-start flex-col gap-1 ">
          <label className="text-sm">Cardholder Name</label>
          <input
            onChange={cardholderNameChanger}
            value={cardholderName}
            {...register("name", {
              required: "Name is required",
            })}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
        </div>

        <div className="flex items-start flex-col gap-1">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={cardNumberChanger}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"
          />
        </div>

        <div>
          <label className="text-sm">EXP. DATE MM/YY CVC</label>
          <div className="flex items-center justify-center gap-5">
            <div className="flex gap-2">
              <input
                type="text"
                name="expMonth"
                placeholder="MM"
                value={month}
                onChange={monthChanger}
                className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
              />
              <input
                type="text"
                name="expYear"
                placeholder="YY"
                value={year}
                onChange={yearChanger}
                className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
              />
            </div>

            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={cvcChanger}
              className="w-32 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
            />
          </div>
        </div>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-80 h-10 rounded-sm bg-indigo-950 text-white text-lg flex items-center justify-center"
      >
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
