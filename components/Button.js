const Button = ({text,primary,secondary,success,error,css}) => {
  return (
    <>
      <button
        type="submit"
        className={` text-white flex justify-center ${error?"bg-red-600":""} ${success?"bg-green-600":""} ${primary?"bg-black":""} ${secondary?"bg-gray-400":""} rounded-md py-3 px-6 items-center ${css}  font-medium text-sm   `} >
        {text}
      </button>
    </>
  );
};

export default Button;
