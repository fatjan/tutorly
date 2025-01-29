"use client";

import { useRef, useState } from "react";
import { Play, Pause, Maximize } from "lucide-react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative w-full rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-auto rounded-lg"
          controls={false} // Hides default controls
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
          <button
            className="bg-white p-3 rounded-full shadow-md"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            className="ml-4 bg-white p-3 rounded-full shadow-md"
            onClick={handleFullScreen}
          >
            <Maximize size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
