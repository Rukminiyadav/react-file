import React from "react";
import MovieCard from "./MovieCard"; 
import AddMovie from "./AddMovie"; 

const MovieSection = ({ Cart, setCart, MovieList, setMovieList }) => {
  console.log(Cart, MovieList);

  return (
    <>
      {/* AddMovie component for adding new movies */}
      <AddMovie MovieList={MovieList} setMovieList={setMovieList} />

      {/* Display existing movie cards */}
      <div className="MovieSection">
        {
          MovieList.map((element) => (
          <MovieCard {...element} Cart={Cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default MovieSection;
