import React from "react";
import "./progress.css";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Enhance Your Videos in Your Way",
    lines: [
      "Real-time Annotation Elevates Content",
      "Custom Watermark Boosts Branding",
      "Trim Tools Highlight Core Content",
    ],
    highlightIndex: 2,
    desc:
      " Cut out lengthy preparation and closing segments with the built-in trim tool, and retain only the most essential content.",
    img:
      "https://imobie-resource.com/en/screenify/img/video_img3.png?v2@2x.0",
  },
  {
    title: "Enhance Your Videos in Your Way",
    lines: [
      "Real-time Annotation Elevates Content",
      "Custom Watermark Boosts Branding",
      "Trim Tools Highlight Core Content",
    ],
    highlightIndex: 0,
    desc:
      "Elevate your screen recordings with powerful real‑time annotation tools to highlight key points and visually pinpoint crucial information.",
    img:
      "https://imobie-resource.com/en/screenify/img/video_img1.png?v2@2x.0",
  },
  {
    title: "Enhance Your Videos in Your Way",
    lines: [
      "Real-time Annotation Elevates Content",
      "Custom Watermark Boosts Branding",
      "Trim Tools Highlight Core Content",
    ],
    highlightIndex: 1,
    desc:
      "Flexibly customize your watermark with personalized text to boost your brand, copyright, and unique recognition.",
    img:
      "https://imobie-resource.com/en/screenify/img/video_img2.png?v2@2x.0",
  },
];

export default function ProgressSections() {
  const [index, setIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const rafRef = React.useRef(0);
  const startRef = React.useRef(0);
  const duration = 4200;

  React.useEffect(() => {
    const step = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const p = Math.min(100, (elapsed / duration) * 100);
      setProgress(p);
      if (p >= 100) {
        startRef.current = 0;
        setProgress(0);
        setIndex((i) => (i + 1) % sections.length);
      } else {
        rafRef.current = requestAnimationFrame(step);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      startRef.current = 0;
    };
  }, [index]);

  const s = sections[index];
  return (
    <>
    <div className="ps-page">
      <div className="ps-wrap">
        <div className="ps-left">
          <h2 className="ps-title">{s.title}</h2>
          <ul className="ps-list">
            {s.lines.map((t, i) => (
              <li key={i} className={i === s.highlightIndex ? "active" : ""}>
                {t}
                {i === s.highlightIndex && (
                  <>
                    <div className="ps-desc">{s.desc}</div>
                    <div className="ps-progress">
                      <span className="ps-bar" style={{ width: `${progress}%` }} />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="ps-right">
          <div className="ps-card">
            <img src={s.img} alt="preview" />
          </div>
        </div>
      </div>
    </div>

    <div className="get-unstuck">
      <h1>Get Unstuck Today</h1>
      <p>Start a free trial and record your first screenify Today, Yohoo! </p>
      <button><Link to="/signup"> Get Started</Link> </button>

    </div>
    </>
  );
}
