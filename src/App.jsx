import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { movieApi } from "./services/movieApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const [movies, setMovies] = useState([]); //Movie render
  const [loading, setLoading] = useState(true); // Loading while wait API response
  const [query, setQuery] = useState(""); //Movie Search

  const fetchPopularMovie = () => {
    movieApi
      .getPopular()

      .then((res) => setMovies(res.data.results))
      .finally(() => setLoading(false));
  };

  //Popular Movie API
  useEffect(() => {
    fetchPopularMovie();
  }, []);
  console.log(movies);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching: ", query);

    if (query.trim() === "") {
      fetchPopularMovie();
      return;
    }

    setLoading(true);

    movieApi
      .getSearchMovie(query)
      .then((res) => setMovies(res.data.results))
      .finally(() => setLoading(false));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bgr-primary p-6 md:p-10">
        <Header
          className="fixed"
          query={query}
          setQuery={setQuery}
          onSearchSubmit={onSearchSubmit}
        ></Header>

        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} movies={movies} />}
          ></Route>
          <Route path="/movie/:id" element={<MovieDetail />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
