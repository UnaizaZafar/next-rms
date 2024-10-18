const Button = ({text,primary,secondary,success,error,children, textSize="text-sm",width="w-max",disabled=" ",onClickFunctionality}) => {
  return (
    <>
      <button
        type="submit"
        className={` text-white flex gap-1 rounded-md py-3 px-6 items-center font-medium 
         justify-center ${textSize} ${error?"bg-red-600":""} ${success?"bg-green-600":""} ${primary?"bg-black":""} 
         ${secondary?"bg-gray-400":""} ${disabled} ${width}`} onClick={onClickFunctionality}>
      {children}  {text}
      </button>
    </>
  );
};

export default Button;
