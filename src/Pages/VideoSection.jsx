import React from "react";
import "./VideoSection.css";
import demoVideo from "../assets/demo-video.mp4";
import { IconButton, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

const HeroSection = () => {
  const videoRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);
  const [muted, setMuted] = React.useState(true);
  const [volume, setVolume] = React.useState(0.5);
  const [current, setCurrent] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [fullscreen, setFullscreen] = React.useState(false);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    const onLoaded = () => { setDuration(v.duration || 0); play(); };
    v.addEventListener("loadeddata", onLoaded, { once: true });
    const onInteract = () => play();
    window.addEventListener("touchstart", onInteract, { once: true });
    window.addEventListener("click", onInteract, { once: true });
    const onTime = () => setCurrent(v.currentTime || 0);
    v.addEventListener("timeupdate", onTime);
    const onFsChange = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      document.removeEventListener("fullscreenchange", onFsChange);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const changeVolume = (_, val) => {
    const v = videoRef.current;
    if (!v) return;
    const vol = Array.isArray(val) ? val[0] : val;
    v.volume = vol;
    setVolume(vol);
    if (vol === 0) { v.muted = true; setMuted(true); } else { v.muted = false; setMuted(false); }
  };

  const changeProgress = (_, val) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const ratio = (Array.isArray(val) ? val[0] : val) / 100;
    v.currentTime = duration * ratio;
    setCurrent(v.currentTime);
  };

  const fmt = (s) => {
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) { el.requestFullscreen?.(); } else { document.exitFullscreen?.(); }
  };
  return (
    <div className="hero-wrapper">
      <div className="polygon-bg">
        <h1>Record Smarter. Share Faster</h1>
        <p>
          Whether you're a creator, student, teacher, developer,
          or business owner, Screenify turns your screen into a storytelling tool — simple, smooth, and professional.
        </p>
      </div>

      <div className="video-container" ref={containerRef}>
        <video
          ref={videoRef}
          src={demoVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video"
        ></video>
        <div className="controls">
          <div className="controls-left">
            <IconButton onClick={togglePlay} className="control-btn" size="small">
              {playing ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <Slider className="progress" size="small" value={duration ? Math.min(100, (current / duration) * 100) : 0} onChange={changeProgress} min={0} max={100} />
          </div>
          <div className="controls-right">
            <div className="time">{fmt(current)} / {fmt(duration || 0)}</div>
            <IconButton onClick={toggleMute} className="control-btn" size="small">
              {muted || volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
            <Slider className="volume" size="small" value={volume} onChange={changeVolume} min={0} max={1} step={0.01} />
            <IconButton onClick={toggleFullscreen} className="control-btn" size="small">
              {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
