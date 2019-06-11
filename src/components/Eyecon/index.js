import React from "react";
import eyecon from "../../images/eyecon.png";

const localStyles = {
  eyecon: {
    height: 25,
    paddingLeft: 5
  }
};

const Eyecon = () => {
  return <img src={eyecon} style={localStyles.eyecon} alt={""} />;
};

export default Eyecon;
