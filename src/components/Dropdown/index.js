import React from "react";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative"
  },

  dropdownHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    border: 0,
    outline: "none",
    width: "100%"
  },

  button: {
    border: 0,
    fontSize: 12,
    cursor: "pointer",
    color: "#C7C7CD"
  },

  listItems: {
    opacity: 0.8,
    position: "absolute",
    backgroundColor: "white",
    top: 32,
    left: 0,
    right: 0
  },

  placeholder: {
    opacity: 0.6,
    marginRight: 10,
    fontSize: 14,
    padding: 4
  },

  icon: {}
};

const Dropdown = ({
  children,
  onClick,
  setIsDropped,
  isDropped,
  value,
  placeholder,
  icon,
  style,
  containerStyle
}) => {
  return (
    <div
      style={{
        ...localStyles.container,
        ...containerStyle,
        borderBottomLeftRadius: isDropped ? 0 : containerStyle.borderRadius,
        borderBottomRightRadius: isDropped ? 0 : containerStyle.borderRadius
      }}
    >
      <button
        onClick={() => setIsDropped(!isDropped)}
        style={localStyles.dropdownHeader}
      >
        <img style={{ ...localStyles.icon, ...style }} src={icon} alt={""} />
        <span style={localStyles.placeholder}>
          {value && value.length ? value : placeholder}
        </span>
        <span style={localStyles.button}>{isDropped ? "▲" : "▼"}</span>
      </button>
      <div style={localStyles.listItems} onClick={onClick}>
        {isDropped && children}
      </div>
    </div>
  );
};

export default Dropdown;
