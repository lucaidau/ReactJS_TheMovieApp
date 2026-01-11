import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../services/movieApi";
import { Star } from "lucide-react";
import Loading from "../components/Loading";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieApi
      .getMovieDetail(id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => console.log("Error retrieving movie details: ", error))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(typeof movie);

  if (loading) return <Loading></Loading>;
  if (!movie) return <p className="text-txt-primary p-10">Movie not found</p>;

  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <div className="p-6 md:p-10 text-txt-primary flex flex-col md:flex-row gap-8">
      <img
        src={imgUrl}
        alt={`Movie of ${id}`}
        className="w-full md:w-80 rounded-2xl shadow-lg object-cover"
      />
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-accent-primary mb-4">
          {movie.title}
        </h1>

        <div className="flex item-center gap-4 mb-6">
          <span className="bg-accent-secondary px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
            Rating: {movie.vote_average.toFixed(1)}{" "}
            <Star
              size={18}
              className="text-orange-400"
              fill="currentColor"
            ></Star>
          </span>
          <span className="text-txt-secondary">
            Release: {movie.release_date}
          </span>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-accent-secondary ">
          Overview
        </h2>
        <p className="text-txt-primary leading-relaxed text-lg">
          {movie.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
