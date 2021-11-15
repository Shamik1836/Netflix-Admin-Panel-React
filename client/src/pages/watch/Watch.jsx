import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./watch.scss";
import ReactPlayer from "react-player";
const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <ReactPlayer
        url={movie?.video}
        className="video"
        controls
        width="100%"
        height="100%"
        playing
      />
    </div>
  );
};

export default Watch;
