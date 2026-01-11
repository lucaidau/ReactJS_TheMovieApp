import React from "react";

import { Star } from "lucide-react";
const MovieCard = ({ backdrop, title, poster, rating }) => {
  const imgUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : `https://image.tmdb.org/t/p/w500${backdrop}`;
  return (
    <div className="max-w-56 text-txt-primary bg-card-color rounded-lg overflow-hidden p-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-[#2a374a] transition-all duration-300 cursor-pointer ease-in-out group">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-md group-hover:scale-110"
      />
      <div className="">
        <h1 className="mt-6 font-bold leading-tight h-12 line-clamp-2 text-lg group-hover:text-accent-primary transition-colors">
          {title}
        </h1>
        <p className="flex items-center gap-2 mt-1">
          <Star
            size={24}
            className="text-yellow-500 "
            fill="currentColor"
          ></Star>
          <span className="text-txt-primary font-medium">
            {rating} <span className="text-txt-secondary font-medium">/10</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
