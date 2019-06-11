import React from "react";
import CastMember from "../CastMember";

const localStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: 500,
    overflowX: "scroll"
  }
};

const CastSection = ({ castList, loading }) => (
  <div style={localStyles.container}>
    {castList.map(castMember => {
      return (
        <CastMember
          key={castMember.id}
          characterName={castMember.character}
          actorName={castMember.name}
          image={castMember.profile_path}
        />
      );
    })}
  </div>
);

export default CastSection;
