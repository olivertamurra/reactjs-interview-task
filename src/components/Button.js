import React from "react";

const Button = ({ text, icon, backgroundColor,onClick,className }) => {
  return (
    <button style={{ backgroundColor }} onClick={onClick} className={className}>
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Button;
