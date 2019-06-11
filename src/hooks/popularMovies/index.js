import { baseUrl, apiKey } from "../../config";
import { useState, useEffect } from "react";
import axios from "axios";

const usePopularMovies = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(`${baseUrl}movie/popular?api_key=${apiKey}`);

      setPopularMoviesList(res.data.results);
    };

    fetchData();
  }, []);

  return { popularMoviesList };
};

export default usePopularMovies;
