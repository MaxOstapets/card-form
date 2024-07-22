import Form from "./Components/Form";
import Card from "./Components/Card";
import Cvc from "./Components/Сvc";
// import { sendCustomEmail } from "./email";

const App = () => {
  return (
    <>
      <div className="flex justify-evenly items-center mt-32 sm:mt-8 sm:flex-col sm:gap-32">
        <div className="flex flex-col gap-12 sm:flex-col-reverse sm:gap-0">
          <Card />
          <Cvc />
        </div>

        <Form />
      </div>  
    </>
  );
};

export default App;
