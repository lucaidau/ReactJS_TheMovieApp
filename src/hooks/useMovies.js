import { useEffect, useState } from "react";
import { movieApi } from "../services/movieApi";

export const useMovies = () => {
  const [movies, setMovies] = useState([]); //Movie render
  const [loading, setLoading] = useState(true); // Loading while wait API response
  const [query, setQuery] = useState(""); //Movie Search

  const fetchPopularMovie = async () => {
    setLoading(true);
    try {
      const res = await movieApi.getPopular();
      setMovies(res.data.results);
    } catch (error) {
      console.log("Error getting list of popular movies: ", error);
    } finally {
      setLoading(false);
    }
  };

  const searchMovie = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    console.log("Searching: ", query);

    if (query.trim() === "") {
      await fetchPopularMovie();
      return;
    }

    setLoading(true);

    try {
      const res = await movieApi.getSearchMovie(query);
      setMovies(res.data.results);
    } catch (error) {
      console.log("Error when searching for movies", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  return { movies, loading, query, setQuery, searchMovie };
};
