import React from "react";
import { IMG_PATH, DEFAULT_PROFILE } from "../../config";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    border: "1px solid #C7C7CD",
    boxShadow: "rgba(0, 0, 0, 0.1) 2px 2px 6px 2px"
  },

  image: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  broDiv: {
    padding: 5
  },

  charName: {
    fontSize: 15,
    fontWeight: "bold"
  },

  actorName: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 300
  }
};

const CastMember = ({ characterName, actorName, image }) => {
  return (
    <div style={localStyles.container}>
      <img
        style={{
          ...localStyles.image,
          objectFit: !image ? "cover" : undefined,
          width: !image ? 130 : undefined
        }}
        src={!image ? DEFAULT_PROFILE : `${IMG_PATH}${image}`}
        alt={""}
      />
      <div style={localStyles.broDiv}>
        <div style={localStyles.charName}>{characterName}</div>
        <div style={localStyles.actorName}>{actorName}</div>
      </div>
    </div>
  );
};

export default CastMember;
