import React from "react";

const VideoTitle = (props) => {
  const { title, description } = props;

  return (
    <div className="absolute bottom-4 left-0 p-12 w-96  opacity-60 bg-gradient-to-r from-black to-black text-white">
      <h1 className="m-2 font-bold text-2xl">{title}</h1>
      <p className="font-light">{description}</p>

      <div className="m-4">
        <button className="pl-2 pr-2 m-2 bg-red-600 rounded">Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
