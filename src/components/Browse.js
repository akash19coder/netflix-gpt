import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "./utils/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  );
};

export default Browse;
