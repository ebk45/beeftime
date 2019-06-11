import React from "react";
import greyClapper from "../../images/greyClapper.png";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#C7C7CD",
    height: "100vh",
    letterSpacing: "2px",
    fontWeight: 700
  },

  icon: {
    height: 100
  }
};

const NoFavouritesWarning = () => {
  return (
    <div style={localStyles.container}>
      <img src={greyClapper} alt={""} style={localStyles.icon} />
      <p>MATE</p>
      <p>YOU DON'T HAVE ANY FAVES YET</p>
      <p>
        CLICK THE STAR <span>☆</span>
      </p>
    </div>
  );
};

export default NoFavouritesWarning;
