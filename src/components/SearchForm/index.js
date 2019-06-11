import React from "react";
import magnifyingGlass from "../../images/magnifyingGlass.png";
import deleteIcon from "../../images/deleteIcon.png";

const BACKGROUND_COLOR = "#F5F5F5";

const localStyles = {
  input: {
    padding: 8,
    width: "100%",
    fontSize: 14,
    border: 0,
    backgroundColor: BACKGROUND_COLOR,
    outline: "none"
  },
  container: {
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "5px",
    backgroundColor: BACKGROUND_COLOR,
    borderRadius: 20
  },
  searchIcon: {
    height: 18,
    marginLeft: 10
  },
  deleteIcon: {
    height: 16,
    marginRight: 10,
    cursor: "pointer"
  },
  daddyDiv: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "white",
    backgroundImage:
      "linear-gradient(.75turn, rgba(15,214,175, 1), 80%, rgba(0,253,151,0.6)"
  }
};

const SearchForm = ({ value, searchMovies, onClear }) => {
  return (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.container}>
        <img style={localStyles.searchIcon} src={magnifyingGlass} alt="" />
        <input
          style={localStyles.input}
          placeholder={"Search for a film..."}
          type="text"
          value={value}
          onChange={searchMovies}
        />
        <img
          style={localStyles.deleteIcon}
          src={!!value ? deleteIcon : ""}
          alt=""
          onClick={onClear}
        />
      </div>
    </div>
  );
};

export default SearchForm;
