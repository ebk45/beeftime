import React from "react";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    borderTop: "1px solid #C7C7CD",
    borderBottom: "1px solid #C7C7CD"
  },
  collapsibleHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 16,
    alignItems: "center",
    fontWeight: 700,
    color: "black",
    opacity: 0.6
  },
  button: {
    border: 0,
    fontSize: 20,
    cursor: "pointer"
  }
};

const Collapsible = ({ children, isOpen, setIsOpen, text }) => {
  return (
    <div style={localStyles.container}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={localStyles.collapsibleHeader}
      >
        <span>{text}</span>
        <span style={localStyles.button}>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && children}
    </div>
  );
};

export default Collapsible;
