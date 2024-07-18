import Form from "./Components/Form";
import Card from "./Components/Card";
import Cvc from "./Components/Сvc";

const App = () => {
  return (
    <>
      <div className="flex justify-evenly items-center mt-32">
        <div className="flex flex-col gap-12 ">
          <Card />
          <Cvc />
        </div>

        <Form />
      </div>
    </>
  );
};

export default App;
