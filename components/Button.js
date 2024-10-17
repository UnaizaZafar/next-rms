const Button = ({text,primary,secondary,success,error,children,width="w-max",disabled=" "}) => {
  return (
    <>
      <button
        type="submit"
        className={` text-white flex gap-1 rounded-md py-3 px-6 items-center font-medium text-sm
         justify-center ${error?"bg-red-600":""} ${success?"bg-green-600":""} ${primary?"bg-black":""} 
         ${secondary?"bg-gray-400":""} ${disabled} ${width}`} >
      {children}  {text}
      </button>
    </>
  );
};

export default Button;
