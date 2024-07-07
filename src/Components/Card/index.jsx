import React from "react";

const Card = ({ cardNumber }) => {
  return (
    <div>
      <h1>{cardNumber}</h1>
      <div>
        <p>Jane Chototam</p>
        <p>00/00</p>
      </div>
    </div>
  );
};

export default Card;
