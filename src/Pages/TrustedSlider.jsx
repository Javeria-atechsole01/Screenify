import React, { useState } from "react";
import "./TrustedSlider.css";

const data = [
  {
    logo: "https://dam-cdn.atl.orangelogic.com/AssetLink/tr147q167s4542b08hhon64ce06m02m2.png",
    quote:
      "Popular, browser & desktop compatible screen-recording & video-sharing tool, widely used by individuals and businesses.",
    name: "by Attlasian",
    role: "Documentation and Internal Communications Partner, Remote",
  },
  {
    logo: "https://zight.com/wp-content/uploads/2024/08/logo.svg",
    quote:
      "A screen capture & recording tool that combines screenshot, video recording, and sharing",
    name: "by CloudApp",
    role: "Senior Learning Manager, Udemy",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzoTy1q8oit8ogLn_qO0vBCOKrZ7VG8Nkyg&s",
    quote:
      "A full-featured screen recording + video editing software, trusted especially for professional tutorials, presentations, and educational content.",
    name: "by TechSmith",
    role: "Tech Ops Lead, AirFranceKLM",
  },
  {
    logo: "https://toolkit.trubox.ca/wp-content/uploads/sites/2012/2022/06/Snagit-Logo.png",
    quote:
      "More lightweight than Camtasia, but reliable for screen captures and simple recordings; good for documentation, quick tutorials.",
    name: "by TechSmith",
    role: "Product Owner, Breville",
  },
  {
    logo: "https://www.softools.de/wp-content/uploads/2021/08/OBS-Studio-Logo.png",
    quote:
      "Open-source, free, widely trusted especially by developers, educators, streamers for screen recording + livestreaming.",
    name: " by Elgato",
    role: "Team Lead, Fiverty",
  }
];

export default function TrustedSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const item = data[index];

  return (
    <div className="trusted-container">
        <h1>Trusted by Many of Organizations</h1>
      <div className="testimonial-box">
        <div className="left-logo">
          <img src={item.logo} alt="company logo" />
        </div>

        <div className="right-content">
          <div className="top-slider-info">
            <span>{index + 1}/{data.length}</span>

            <div className="buttons">
              <button onClick={prevSlide}>←</button>
              <button onClick={nextSlide}>→</button>
            </div>
          </div>

          <p className="quote">“{item.quote}”</p>

          <h4 className="name">{item.name}</h4>
          <p className="role">{item.role}</p>
        </div>
      </div>

      <div className="company-strip">
        {data.map((c, i) => (
          <img
            key={i}
            src={c.logo}
            alt="brand"
            className={`brand-logo ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
