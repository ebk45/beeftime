import { useState, useEffect } from "react";
import * as axios from "axios";
import { baseUrl, apiKey, backendUrl } from "../../config";
import Promise from "bluebird";
import { headers } from "../../authHelpers";

const useMovie = (movieId, variant, http = axios) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieData = async () => {
    try {
      const { movie, cast } = await Promise.props({
        cast: http(`${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`),
        movie: http({
          method: "GET",
          url:
            backendUrl +
            (variant === "favourites"
              ? `favourites/${movieId}`
              : `films/${movieId}`),
          headers
        })
      });
      setMovie({ ...movie.data, ...cast.data });
      setLoading(false);
    } catch (error) {
      console.error("movieById not loading", error);
    }
  };

  useEffect(() => {
    fetchMovieData();
    return setMovie(null);
  }, []);

  const createReview = async (movie, event) => {
    try {
      console.log("event--->", event.target.value);
      if (!movie.review) {
        setMovie({
          ...movie,
          review: event.target.value
        });
        return await postReview(movie, event.target.value);
      } else {
        setMovie({
          ...movie,
          review: event.target.value
        });
        return await patchUpdate(movie, { review: event.target.value });
      }
    } catch (error) {
      console.error("Sorry mate, couldn't leave a review", error);
    }
  };

  const postReview = async (movie, review) => {
    console.log("postReview--->", review);
    try {
      const params = {
        method: "post",
        url: backendUrl + `favourites/review`,
        data: { movieId: movie.id, review: review },
        headers
      };
      const res = await axios(params);
      console.log(res);
    } catch (error) {
      console.error("sorry mate, couldn't leave a review", error);
    }
  };

  const patchUpdate = async (movie, body) => {
    console.log("BODY BOY", body);
    try {
      const params = {
        method: "patch",
        url: backendUrl + `favourites`,
        data: { movieId: movie.id, ...body },
        headers
      };
      await axios(params);
    } catch (error) {
      console.error("sorry mate, couldn't PATCH", error);
    }
  };

  const deleteReview = async movie => {
    console.log("before--->", movie);
    try {
      patchUpdate(movie, { review: "" });

      return setMovie({
        ...movie,
        review: ""
      });
    } catch (error) {
      console.error("sorry mate, couldn't delete your review", error);
    }
    console.log("after--->", movie);
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

  const setRating = async (movie, rating) => {
    try {
      await postRating(movie, rating);

      return setMovie({
        ...movie,
        rating
      });
    } catch (error) {
      console.error("Unable to set rating on modal", error);
    }
  };

  const postWatched = async movie => {
    try {
      const params = {
        method: "post",
        url: backendUrl + `favourites/watched`,
        data: { movieId: movie.id, watchedStatus: true },
        headers
      };
      await axios(params);
    } catch (error) {
      console.error("Unable to post watched status", error);
    }
  };

  const setWatched = async movie => {
    try {
      if (!movie.watchedStatus) {
        await postWatched(movie);
        return setMovie({
          ...movie,
          watchedStatus: true
        });
      } else {
        await postWatched(movie);
        return setMovie({
          ...movie,
          watchedStatus: null
        });
      }
    } catch (error) {
      console.error("Unable to set Watched status", error);
    }
  };

  return {
    movie,
    setMovie,
    loading,
    createReview,
    deleteReview,
    setWatched,
    setRating
  };
};

export default useMovie;
