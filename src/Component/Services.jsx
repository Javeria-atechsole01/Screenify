import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    title: "GFX & DESIGN (UI/UX, BRANDING, CREATIVE VISUALS)",
    desc: "We craft visually stunning and user-focused designs that strengthen your brand identity, enhance digital experiences, and connect with your audience through creativity and innovation.",
    img: "/assets/design.png",
  },
  {
    title: "VFX & ANIMATION",
    desc: "High-quality visual effects and animations to bring your ideas to life with motion and creativity.",
    img: "/assets/vfx.png",
  },
  {
    title: "ARCHITECTURE",
    desc: "Modern 3D architectural design, visualization, and structure planning for real-world projects.",
    img: "/assets/architecture.png",
  },
  {
    title: "WEBSITE DEVELOPMENT",
    desc: "Professional and scalable websites built with modern technologies tailored to your business.",
    img: "/assets/webdev.png",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    desc: "Engaging strategies that boost brand visibility and create impactful online presence.",
    img: "/assets/marketing.png",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <div className="services-wrapper">
      <div className="services-container">
        {/* LEFT MAIN PANEL */}
        <div className="services-main">
          <h1>{services[active].title}</h1>
          <p>{services[active].desc}</p>

          <div className="learn-more">
            <button>+</button>
            <span>Learn more</span>
          </div>

          {/* If you want image inside */}
          {/* <img src={services[active].img} alt="service" className="main-img" /> */}
        </div>

        {/* RIGHT VERTICAL TABS */}
        <div className="services-tabs">
          {services.map((s, index) => (
            <div
              key={index}
              className={`service-tab ${active === index ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
            >
              <span className="vertical-text">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
