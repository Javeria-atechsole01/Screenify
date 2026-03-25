import React from "react";
import "./CardSection.css";

const cards = [
  {
    title: "Engineering",
    description: "Accelerate sprints and bug fixes.",
    bg: "#f5f5f5",
    img: "https://plus.unsplash.com/premium_vector-1697729522191-31808e6ba437?q=80&w=1126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXN9rR56HSMEi-HVdMHkkfTVzjd-7fND6ixQ&s",
    popup: "Boost productivity with clarity.",
  },
  {
    title: "Sales",
    description: "Personalize the pitch to close more deals.",
    bg: "#f5f5f5",
    img: "https://plus.unsplash.com/premium_vector-1732640351167-f8ba412de86a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfBODdXy97e3qPYwPQ0ji36k-CLVOIo6g1iw&s",
    popup: "Turn conversations into conversions",
  },
  {
    title: "Product",
    description: "Stay aligned and drive innovation forward.",
    bg: "#f5f5f5",
    img: "https://images.unsplash.com/vector-1738237558950-a8f9e4fe946e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://cdn-icons-png.flaticon.com/512/6997/6997668.png",
    popup: "Drive innovation with better communication",
  },
   {
    title: "Marketing",
    description: "Faster review cycles and more focus time.",
    bg: "#f5f5f5",
    img: "https://plus.unsplash.com/premium_photo-1675242132049-d373cdf9273f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98uEv5MOpcoOa1MY1hU9VLWsS9wFfvxbvfw&s",
    popup: "Make your message clearer",
  },
];

export default function CardSection() {
  return (
    <>
     <h2 className="card-title">Effortless Recording for Everyone</h2>
    <div className="cards-wrapper">
      {cards.map((c, index) => (
        <div className="card" key={index} style={{ backgroundColor: c.bg }}>
          <div className="card-img-box">
            <img src={c.img} alt="" className="main-img" />
            <div className="avatar-wrapper">
              <img src={c.avatar} alt="" className="avatar" />
              <div className="avatar-popup">
                <h4>{c.title}</h4>
                <p>{c.popup}</p>
              </div>
            </div>
          </div>

          <div className="card-content">
            <h3>{c.title}</h3>
            <p>{c.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="about-screenify">
        <h1>Why Screenify?</h1>
        <div className="about-screenify-content">
            <div className="about1">
            <h3>Simple & Effortless</h3>
            <p>Screenify makes screen recording incredibly simple no complicated setup,
             no confusing tools. Just click,record and you’re ready to share.</p>

        </div>
         <div className="about1">
            <h3>High-Quality Recording</h3>
            <p>Every recording is smooth,sharp and high-quality. 
            Screenify is optimized for performance so your device never slows down.</p>

        </div>
         <div className="about1">
            <h3>Instant Sharing</h3>
            <p>Record,upload and share all in seconds. 
            Screenify creates instant shareable links so you can send videos quickly without long upload times.</p>

        </div>
         <div className="about1">
            <h3>Made for Everyone</h3>
            <p>Screenify fits every need <br/>content creators, teachers, students, remote teams, and businesses.</p>
        </div>
        </div>
    </div>
    </>
  );
}
