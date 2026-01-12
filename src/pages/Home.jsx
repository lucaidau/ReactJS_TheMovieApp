import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

const Home = ({ loading, movies }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loading></Loading>
      </div>
    );

  return (
    <div className="mt-10 gap-4 grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
              backdrop={movie.backdrop_path}
              poster={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
            ></MovieCard>
          </Link>
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="text-txt-secondary text-xl font-medium">
            No movies found
          </p>
          <p className="text-txt-secondary text-sm">
            Try searching for something else!
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
