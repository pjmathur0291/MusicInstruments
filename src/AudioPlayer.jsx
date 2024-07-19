// src/AudioPlayer.js
import React, { useState, useRef } from 'react';
import song from './assets/song.mp3'

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio ref={audioRef} src={song} />
    </div>
  );
};

export default AudioPlayer;
