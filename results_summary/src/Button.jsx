function Button({value}){
  return(
    <button className="hover:bg-Cobaltblue transition-all w-full bg-Darkgrayblue text-white px-4 py-2 rounded-full">
      {value}
    </button>
  );
}

export default Button;