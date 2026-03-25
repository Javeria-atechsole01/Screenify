import React, { useState, useEffect } from "react";
import "./ShowcaseTabs.css";

const tabs = [
  {
    id: "video",
    title: "Video messages",
    text: [
      "Record your message in seconds.",
      "Share updates without scheduling meetings.",
      "Perfect for teams and clients.",
      "Send clear communication through video."
    ],
    img: "https://dam-cdn.atl.orangelogic.com/AssetLink/786w6wd6hc818rq82g6eh5n2qk10tygf.png",
  },
  {
    id: "recaps",
    title: "Meeting recaps",
    text: [
      "Summaries generated instantly.",
      "No need to rewatch long meetings.",
      "Share important decisions quickly.",
      "Boost team clarity and productivity."
    ],
    img: "https://dam-cdn.atl.orangelogic.com/AssetLink/5xg8515xa01y31gayk85p2t36e7n2738.png",
  },
  {
    id: "screenshots",
    title: "Screenshots",
    text: [
      "Capture your screen with one click.",
      "Mark important areas using tools.",
      "Share instantly with your team.",
      "Save time with quick explanations."
    ],
    img: "https://dam-cdn.atl.orangelogic.com/AssetLink/k1ib801ft030lv2j27u28470au0rw8i2.png/assets/screenshot.png",
  },
  {
    id: "ai",
    title: "Screenify AI",
    text: [
      "AI writes explanations for your screenshots.",
      "Smart auto-captions for screen recordings.",
      "Instant summaries with AI assistance.",
      "Work 10× faster with Screenify AI."
    ],
    img: "https://dam-cdn.atl.orangelogic.com/AssetLink/n48175ol5h8r44go5jg05n1ewcn01how.png",
  },
];

export default function TabsPage() {
  const [active, setActive] = useState("video");
  const [autoText, setAutoText] = useState("");

  // Auto typing effect
  useEffect(() => {
    const tab = tabs.find((t) => t.id === active);
    let fullText = tab.text.join("\n");
    let index = 0;

    setAutoText("");

    const typing = setInterval(() => {
      setAutoText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(typing);
    }, 20);

    return () => clearInterval(typing);
  }, [active]);

  const currentTab = tabs.find((t) => t.id === active);

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="content-section">
        <div className="text-box">
          <h2>{currentTab.title}</h2>
          <pre className="auto-text">{autoText}</pre>
        </div>

        <div className="img-box">
          <img src={currentTab.img} alt={currentTab.title} />
        </div>
      </div>
    </div>
  );
}
