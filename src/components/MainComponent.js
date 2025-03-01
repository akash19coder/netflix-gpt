import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoComponent from "./VideoComponent";
import { useMovieTrailer } from "./utils/useMovieTrailer";

const MainComponent = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];

  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoComponent id={id} />
    </div>
  );
};

export default MainComponent;
