import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../services/movieApi";

export const useMovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const res = await movieApi.getMovieDetail(id);
        setMovie(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchMovieDetail();
    }
  }, [id]);
  return { id, movie, loading, error };
};
