import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMovies } from "./hooks/useMovies";
import Header from "./components/Header";
import Home from "./pages/Home";

import MovieDetail from "./pages/MovieDetail";

function App() {
  const { movies, loading, query, setQuery, searchMovie } = useMovies();

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovie(query);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bgr-primary p-6 md:p-10">
        <Header
          className="fixed"
          query={query}
          setQuery={setQuery}
          onSearchSubmit={handleSearch}
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
