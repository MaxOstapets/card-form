import React from "react";

const Form = ({ cardNumber, handleChanger }) => {
  return (
    <form>
      <div>
        <label>Cardholder Name</label>
        <input type="text" name="cardHolderName" />
      </div>

      <div>
        <label>Card Number</label>
        <input type="text" value={cardNumber} onChange={handleChanger} />
      </div>

      <div>
        <label>EXP. DATE MM/YY CVC</label>
        <div>
          <input type="text" name="expMonth" placeholder="MM" />
          <input type="text" name="expYear" placeholder="YY" />
          <input type="text" name="cvc" placeholder="CVC" />
        </div>
      </div>

      <button>Confirm</button>
    </form>
  );
};

export default Form;
