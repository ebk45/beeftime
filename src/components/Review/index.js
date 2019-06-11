import React, { useState } from "react";
import deleteIcon from "../../images/deleteIcon.png";

const localStyles = {
  daddyDiv: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Helvetica"
  },

  label: {
    fontSize: 18,
    color: "black",
    paddingLeft: 20,
    marginTop: 20
  },

  textArea: {
    outline: "none",
    width: "80%",
    height: "30vh",
    border: 0,
    padding: 20,
    paddingTop: 5,
    fontSize: 14
  },

  button: {
    backgroundColor: "black",
    color: "#00fd97",
    cursor: "pointer",
    height: "30px",
    width: "50%",
    fontSize: 16
  },

  deleteIcon: {
    height: 16,
    cursor: "pointer",
    padding: "5px",
    position: "absolute",
    top: 0,
    right: 15
  },

  textContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  }
};

const Review = ({ onReview, review, onDelete }) => {
  const [isFocussed, setIsFocussed] = useState(false);
  console.log("---> REVIEW", review);

  return (
    <div style={localStyles.daddyDiv}>
      <h2 style={localStyles.label}>My Review: </h2>
      <div style={localStyles.textContainer}>
        <textarea
          style={{ ...localStyles.textArea, opacity: isFocussed ? 1 : 0.6 }}
          type="text"
          placeholder="Leave a review..."
          value={review}
          onChange={onReview}
          onFocus={() => setIsFocussed(true)}
          onBlur={() => setIsFocussed(false)}
        />
        {!!review && (
          <img
            style={localStyles.deleteIcon}
            src={deleteIcon}
            alt={""}
            onClick={onDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Review;
