import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "./movieSlice";
import { useEffect } from "react";
import { api_options } from "./constant";

export const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movie.movieTrailer);

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      api_options,
    );
    const results = await data.json();
    console.log(results);
    const trailer = results.results.filter((obj) => {
      if (obj.type.includes("Trailer")) return obj;
    });
    dispatch(addMovieTrailer(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    !movieTrailer && getTrailer();
  }, []);
};
