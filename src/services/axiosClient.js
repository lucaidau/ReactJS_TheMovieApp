import axios from "axios";
import { Languages } from "lucide-react";

const axiosClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
  params: {
    api_key: import.meta.env.VITE_MOVIE_API_KEY,
    language: "vi-VN",
  },
});

export default axiosClient;
