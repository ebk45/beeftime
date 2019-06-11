import React from "react";

const localStyles = {
  button: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: 20,
    color: "white",
    textTransform: "uppercase",
    cursor: "pointer",
    marginLeft: "auto"
  }
};

const StarButton = ({ isFilled, onClick, style }) => {
  return (
    <button style={{ ...localStyles.button, ...style }} onClick={onClick}>
      <span>{isFilled ? "★" : "☆"}</span>
    </button>
  );
};

export default StarButton;
