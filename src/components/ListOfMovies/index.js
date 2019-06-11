import React from "react";
import Movie from "../Movie";

const ListOfMovies = ({
  popularList,
  favouriteMovie,
  isFavourite,
  variant,
  setRating,
  onClick
}) => {
  return (
    <div style={{ paddingLeft: 20, paddingRight: 20 }}>
      {popularList.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            onFavouriteMovie={() => favouriteMovie(movie)}
            isFavourite={isFavourite(movie)}
            variant={variant}
            onClick={() => onClick(movie.id)}
            rating={movie.rating}
            setRating={rating => setRating(movie, rating)}
            movie={movie}
          />
        );
      })}
    </div>
  );
};

export default ListOfMovies;
