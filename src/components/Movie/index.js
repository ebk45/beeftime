import React from "react";
import StarButton from "../StarButton";
import RatingsButton from "../RatingsButton";
import Eyecon from "../Eyecon";

const localStyles = {
  movie: {
    position: "relative",
    overflow: "hidden",
    marginBottom: 20,
    borderRadius: 10,
    width: "100%"
  },

  movieButtons: {
    position: "absolute",
    right: 0,
    top: 0,
    left: 0,
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)"
  },

  movieImage: {
    width: "100%",
    cursor: "pointer"
  },

  movieDetails: {
    position: "absolute",
    fontFamily: "Helvetica",
    width: "100%",
    bottom: 0,
    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)",
    color: "white",
    padding: 5,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    marginBottom: 2
  },
  movieTitle: { margin: 5 },
  movieOverview: {
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    padding: 5,
    marginRight: 5
  }
};

const Movie = ({
  image,
  title,
  overview,
  onFavouriteMovie,
  isFavourite,
  variant,
  rating,
  setRating,
  movie,
  onClick
}) => {
  return (
    <div style={localStyles.movie}>
      <div style={localStyles.movieButtons}>
        {!!movie.watched && <Eyecon />}
        {variant === "popular" ? (
          <StarButton isFilled={isFavourite} onClick={onFavouriteMovie} />
        ) : (
          <RatingsButton setRating={setRating} rating={rating} />
        )}
      </div>

      <img
        style={localStyles.movieImage}
        src={image}
        alt={title}
        onClick={onClick}
      />
      <div style={localStyles.movieDetails}>
        <h2 style={localStyles.movieTitle}>{title}</h2>
        <span style={localStyles.movieOverview}>{overview}</span>
      </div>
    </div>
  );
};

export default Movie;
