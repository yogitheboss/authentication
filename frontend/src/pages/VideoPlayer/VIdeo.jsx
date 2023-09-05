import React, { useCallback, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import "./Video.css";

const videoDuration = 600; // Example: 600 seconds (10 minutes)
function VideoPlayer() {
  const playerRef = useRef(null);
  const onReady = useCallback(() => {
    const timeToStart = 4 * 60 + 12.6;
    playerRef.current.seekTo(timeToStart, "seconds");
  }, [playerRef.current]);

  const [currentProgress, setCurrentProgress] = React.useState(0);
  return (
    <div className="video_container">
      <div>
        <h2>React player</h2>
      </div>
      <div>
        <Container className="player__wrapper">
          <ReactPlayer
            ref={playerRef}
            className="player"
            url="https://www.youtube.com/watch?v=R4AhvYORZRY&t=7742s"
            playing={true}
            muted={true}
            onReady={onReady}
            onProgress={(progress) => {
              let currentTime = playerRef.current.getCurrentTime();
              setCurrentProgress((currentTime / videoDuration) * 100);
            }}
          />
          <div
            className="progress-bar"
            style={{ width: `${currentProgress}%` }}
          ></div>
        </Container>
      </div>
    </div>
  );
}

export default VideoPlayer;
