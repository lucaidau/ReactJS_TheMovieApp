import React from "react";
import { Search } from "lucide-react";

const Header = ({ query, setQuery, onSearchSubmit }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center h-20 px-8 py-4 sticky top-0 bg-bgr-primary/80 backdrop-blur-md z-50">
      <h1 className="uppercase font-extrabold text-2xl text-accent-primary tracking-tighter  cursor-pointer">
        🎬movie app
      </h1>

      <form className="relative group w-full md:w-96" onSubmit={onSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Movie..."
          className="w-64 bg-card-color border border-transparent focus:border-accent-secondary outline-none text-txt-primary pl-4 pr-10 py-2 rounded-full transition-all duration-300"
        />
        <button>
          <Search
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-txt-secondary group-focus-within:text-accent-secondary transition-colors"
          ></Search>
        </button>
      </form>
    </header>
  );
};

export default Header;
