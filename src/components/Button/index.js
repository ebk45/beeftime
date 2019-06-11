import React from "react";

const localStyles = {
  button: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#0FD6AF",
    border: 0,
    backgroundImage:
      "linear-gradient(.10turn, rgba(15,214,175, 1), 40%, rgba(0,253,151,0.5)",
    color: "white",
    cursor: "pointer",
    borderRadius: 40,
    margin: 0
  }
};

const Button = ({ children, onClick, style }) => {
  return (
    <button style={{ ...localStyles.button, ...style }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
