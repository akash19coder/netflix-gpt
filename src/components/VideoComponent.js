import React, { useEffect } from "react";
import { api_options } from "./utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "./utils/movieSlice";
import { useMovieTrailer } from "./utils/useMovieTrailer";

const VideoComponent = (props) => {
  const movieTrailer = useSelector((store) => store.movie.movieTrailer);
  console.log("i am trailer");
  useMovieTrailer(props.id);
  if (!movieTrailer) return;

  return (
    <div>
      <iframe
        className="w-screen h-screen"
        src={
          "https://www.youtube.com/embed/" +
          movieTrailer[0]?.key +
          "?autoplay=1&mute=1&controls=0&loop=1"
        }
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
