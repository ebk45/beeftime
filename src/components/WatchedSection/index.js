import React from "react";
import Button from "../Button";

const localStyles = {
  buttonOn: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 120,
    marginTop: "auto",
    zIndex: 5,
    border: "1px solid #0fd6af"
  },

  buttonOff: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    padding: 0,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 120,
    marginTop: "auto",
    zIndex: 5,
    backgroundColor: "white",
    color: "#0fd6af",
    backgroundImage: "none",
    border: "1px solid #0fd6af"
  },

  watchSymbol: {
    fontSize: 16,
    marginRight: 4
  },
  symbolContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
};

const WatchedSection = ({ setWatched, movie }) => {
  return (
    <Button
      onClick={() => setWatched(movie)}
      style={
        !!movie.watchedStatus ? localStyles.buttonOn : localStyles.buttonOff
      }
    >
      <span style={localStyles.symbolContainer}>
        <span>WATCHED</span>
      </span>
    </Button>
  );
};

export default WatchedSection;
