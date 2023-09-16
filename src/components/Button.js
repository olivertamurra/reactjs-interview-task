import React from "react";

const Button = ({ text, icon, backgroundColor,onClick }) => {
  return (
    <button style={{ backgroundColor }} onClick={onClick}>
      <span>{text}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Button;
