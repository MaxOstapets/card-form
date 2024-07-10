const Cvc = ({cvc}) => {
  return (
    <div className=" bg-gray-400 w-96 h-52 rounded-xl flex items-center justify-start flex-col ml-16">
        <div className="w-full h-12 bg-black mt-7"></div>
        <p className="bg-gray-700 w-80 h-8 mt-5 rounded-sm text-right p-2 text-white text-xs">{cvc}</p>
    </div>
  );
};

export default Cvc;
