import React from "react";
import { IMG_PATH, COLLAPSIBLE_HEADER } from "../../config.js";
import closeButton from "../../images/closeButton.png";
import useMovie from "../../hooks/movie";
import CastSection from "../CastSection";
import useCollapsible from "../../hooks/collapsible";
import Collapsible from "../Collapsible";
import WatchedSection from "../WatchedSection";
import Review from "../Review";
import RatingsButton from "../RatingsButton";

const localStyles = {
  daddyDiv: {
    position: "fixed",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgb(0, 0, 0, 0.6)",
    overflowY: "scroll"
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 220,
    zIndex: 0,
    backgroundImage:
      "linear-gradient(to top, rgba(255,255,255,1), 50%, rgba(255,255,255,0)"
  },

  movieContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    maxWidth: 500,
    marginTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    overflowY: "scroll",
    backgroundColor: "white",
    paddingBottom: 40
  },

  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    alignItems: "flex-start",
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundImage:
      "linear-gradient(.75turn, rgba(15,214,175, 1), rgba(0,253,151,0.6)"
  },

  closeButton: {
    height: 14,
    position: "absolute",
    right: 15,
    top: 15,
    zIndex: 3
  },

  movieImage: {
    height: 220,
    top: 15,
    left: 15,
    borderRadius: 5,
    zIndex: 4
  },

  movieDetails: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 16,
    height: 220,
    zIndex: 2
  },

  detailsList: {
    listStyle: "none",
    padding: 0,
    fontSize: 12,
    lineHeight: 1.5,
    margin: 0
  },

  movieTitle: {
    color: "black",
    fontSize: 22,
    marginTop: 0,
    letterSpacing: "2px"
  },

  movieOverview: {
    position: "relative",
    padding: 15,
    paddingTop: 0,
    fontSize: 15
  },

  lowerContainer: {
    position: "relative"
  },

  strong: {
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px"
  },

  star: {
    color: "#FF6F68",
    fontSize: 14
  },

  rating: {
    marginLeft: 0
  }
};

const Modal = props => {
  const {
    movie,
    loading,
    createReview,
    deleteReview,
    setWatched,
    setRating
  } = useMovie(props.match.params.id, props.variant);
  let releaseDate;

  const { isOpen, setIsOpen } = useCollapsible();

  if (!movie) return null;
  if (movie.release_date) {
    releaseDate = new Date(movie.release_date).getFullYear();
  }

  const directorArray = movie.crew.filter(obj => obj.job === "Director");
  const genresArray = movie.genres.map(genre => genre);
  console.log("movie--->", movie);
  return movie ? (
    <div style={localStyles.daddyDiv}>
      <div style={localStyles.movieContainer}>
        <div style={localStyles.detailsContainer}>
          <div style={localStyles.overlay} />
          <img
            style={localStyles.closeButton}
            src={closeButton}
            onClick={props.history.goBack}
            alt={""}
          />
          <img
            style={localStyles.movieImage}
            src={`${IMG_PATH}${movie.poster_path}`}
            alt={movie.title}
          />
          <div style={localStyles.movieDetails}>
            <h2 style={localStyles.movieTitle}>
              {movie.title.toUpperCase()} ({releaseDate})
            </h2>
            <ul style={localStyles.detailsList}>
              <li>
                <strong style={localStyles.strong}>Director:</strong>{" "}
                {directorArray.map((director, index) => {
                  if (index >= 1) {
                    return `, ${director.name}`;
                  }
                  return director.name;
                })}
              </li>
              <li>
                <strong style={localStyles.strong}>Runtime:</strong>{" "}
                {movie.runtime} minutes
              </li>
              <li>
                {movie.genres.length ? (
                  <span>
                    <strong style={localStyles.strong}>Genre: </strong>
                    {genresArray.map((genre, index) => {
                      if (index >= 1) {
                        return `, ${genre.name}`;
                      }
                      return genre.name;
                    })}
                  </span>
                ) : (
                  ""
                )}
              </li>
            </ul>
            {props.variant === "favourites" && (
              <RatingsButton
                setRating={rating => {
                  setRating(movie, rating);
                }}
                rating={movie.rating}
                starStyle={localStyles.star}
                rateStyle={localStyles.rating}
              />
            )}
            {props.variant === "favourites" && (
              <WatchedSection
                movie={movie}
                setWatched={() => {
                  setWatched(movie);
                }}
              />
            )}
          </div>
        </div>
        <div style={localStyles.lowerContainer}>
          <p style={localStyles.movieOverview}>{movie.overview}</p>
          <Collapsible
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            text={COLLAPSIBLE_HEADER}
          >
            <CastSection castList={movie.cast} loading={loading} />
          </Collapsible>
          {movie.watchedStatus === true ? (
            <Review
              onReview={event => createReview(movie, event)}
              review={movie.review}
              onDelete={() => deleteReview(movie)}
            />
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
