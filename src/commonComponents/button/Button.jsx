import React from "react";

const Button = ({ children, onClick, disabled, className }) => {
  const baseClasses = "w-full py-2 rounded-lg font-bold";
  const enabledClasses =
    "bg-gradient-to-r from-[#fab3b4] to-[#ccdde9] text-gray-800 hover:from-[#ccdde9] hover:to-[#fab3b4]";
  const disabledClasses = "bg-gray-400 text-gray-300 cursor-not-allowed";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${
        disabled ? disabledClasses : enabledClasses
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
