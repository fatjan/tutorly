"use client";

import { useRef, useState } from "react";
import { Play, Pause, Maximize } from "lucide-react";

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const player = iframe.contentWindow;
      if (isPlaying) {
        player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullScreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    }
  };

  const videoId = src.split('youtu.be/')[1]?.split('?')[0]; // Extract video ID from URL

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-gray-300">
        {/* Embed the YouTube video using an iframe */}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
        {/* Button container */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity">
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
