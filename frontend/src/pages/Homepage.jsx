import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import VideoPlayer from "./VideoPlayer/VIdeo";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>
       <VideoPlayer/> 
      </h1>
    </>
  );
}

export default Homepage;
