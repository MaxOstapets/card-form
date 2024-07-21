import React, { useEffect } from "react";
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
      <div className="flex items-center justify-center flex-col gap-10 text-indigo-800 sm:gap-5">
        <div className="flex items-start flex-col gap-1 ">
          <label className="text-sm">Cardholder Name</label>
          <input
            value={cardholderName}
            onChange={cardholderNameChanger}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"
          />
          {errors.cardholderName && (
            <span className="text-red-700">
              {errors.cardholderName.message}
            </span>
          )}
        </div>

        <div className="flex items-start flex-col gap-1">
          <label>Card Number</label>
          <input
            value={cardNumber}
            onChange={cardNumberChanger}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3"
          />
          {errors.cardNumber && (
            <span className="text-red-700">{errors.cardNumber.message}</span>
          )}
        </div>

        <div>
          <label className="text-sm">EXP. DATE MM/YY CVC</label>
          <div className="flex items-center justify-center gap-5">
            <div className="flex gap-2">
              <div className="flex flex-col">
                <input
                  placeholder="MM"
                  value={month}
                  onChange={monthChanger}
                  className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
                />
                {errors.month && (
                  <span className="text-red-700">{errors.month.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  placeholder="YY"
                  value={year}
                  onChange={yearChanger}
                  className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
                />
                {errors.year && (
                  <span className="text-red-700">{errors.year.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                placeholder="CVC"
                value={cvc}
                onChange={cvcChanger}
                className="w-32 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
              />
              {errors.cvc && (
                <span className="text-red-700">{errors.cvc.message}</span>
              )}
            </div>
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
