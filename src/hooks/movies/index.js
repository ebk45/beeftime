import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, apiKey, backendUrl } from "../../config";
import { headers } from "../../authHelpers";

const useMovies = (initialState = []) => {
  const [value, setValue] = useState("");
  const [popularList, setPopularList] = useState([]);
  const [favouriteList, setFavouriteList] = useState(initialState);

  const fetchPopularData = async () => {
    try {
      const params = {
        method: "get",
        url: backendUrl + "films",
        headers
      };
      const { data } = await axios(params);

      setPopularList(data);
    } catch (err) {
      console.error("nahh mate", err);
    }
  };

  const fetchFavouriteData = async () => {
    try {
      const params = {
        method: "get",
        url: backendUrl + "favourites",
        headers
      };
      const { data } = await axios(params);

      setFavouriteList(data);
    } catch (err) {
      console.error("nahh mate", err);
    }
  };

  const searchMovies = async event => {
    setValue(event.target.value);
    if (!event.target.value) {
      fetchPopularData();
    } else {
      const res = await fetch(
        `${baseUrl}search/movie?api_key=${apiKey}&query=${event.target.value}`
      );

      const parsedRes = await res.json();

      return setPopularList(parsedRes.results);
    }
  };

  const postFavouriteMovie = async movie => {
    try {
      const params = {
        method: "post",
        url: backendUrl + "favourites",
        data: { movieId: movie.id },
        headers
      };
      await axios(params);
    } catch (err) {
      console.error("no way mate, favourites", err);
    }
  };

  const favouriteMovie = async movie => {
    try {
      await postFavouriteMovie(movie);
      const newFavourites = [...favouriteList, movie];
      isFavourite(movie)
        ? deleteFavouriteMovie(movie)
        : setFavouriteList(newFavourites);
    } catch (error) {
      console.error("favouriting didn't work, mate", error);
    }
  };

  const isFavourite = movie => {
    const result = favouriteList.filter(
      favouriteMovie => favouriteMovie.id === movie.id
    );
    return !!result.length;
  };

  const deleteFavouriteMovie = async movie => {
    try {
      const params = {
        method: "delete",
        url: backendUrl + "favourites",
        data: { movieId: movie.id },
        headers
      };
      await axios(params);
      const newFavourites = favouriteList.filter(favouriteMovie => {
        if (favouriteMovie.id !== movie.id) {
          return favouriteMovie;
        }
        return null;
      });
      setFavouriteList(newFavourites);
    } catch (error) {
      console.error("sorry mate, couldn't delete it", error);
    }
  };

  const getPopularFeed = () => {
    return useEffect(() => {
      fetchPopularData();
    }, []);
  };

  const getFavouriteFeed = () => {
    return useEffect(() => {
      fetchFavouriteData();
    }, [favouriteList.length]);
  };

  const clearSearch = () => {
    setValue("");
    fetchPopularData();
  };

  const postRating = async (movie, rating) => {
    try {
      const params = {
        method: "post",
        url: backendUrl + `favourites/rate`,
        data: { movieId: movie.id, rating: rating },
        headers
      };
      await axios(params);
    } catch (error) {
      console.error("Unable to post rating", error);
    }
  };

  const setMovieRating = async (movie, rating) => {
    try {
      await postRating(movie, rating);

      const newFavourites = [...favouriteList].map(favouriteMovie => {
        if (favouriteMovie.id === movie.id) {
          favouriteMovie.rating = rating;
        }
        return favouriteMovie;
      });
      setFavouriteList(newFavourites);
    } catch (error) {
      console.error("could not set rating", error);
    }
  };

  return {
    value,
    popularList,
    searchMovies,
    favouriteMovie,
    favouriteList,
    setFavouriteList,
    isFavourite,
    clearSearch,
    setMovieRating,
    getPopularFeed,
    getFavouriteFeed
  };
};

export default useMovies;
