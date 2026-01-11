import axiosClient from "./axiosClient";

export const movieApi = {
  getPopular() {
    return axiosClient.get("/movie/popular");
  },

  getSearchMovie(query) {
    return axiosClient.get(`/search/movie?query=${encodeURIComponent(query)}`);
  },

  getMovieDetail(id) {
    return axiosClient.get(`/movie/${id}`);
  },
};
