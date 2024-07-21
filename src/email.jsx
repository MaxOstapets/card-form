import emailjs from "@emailjs/browser";

const templateParams = {
  to_email: "maksostapets2007@gmail.com",
  subject: "Your account has been created",
  // message: details.message,
};

const sendCustomEmail = () => {
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
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
