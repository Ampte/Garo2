import "/src/styles/Learn.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Learn() {
  const lessons = [
    {
      title: "Beginner Basics",
      color: "blue"
    },
    {
      title: "Intermediate Lessons",
      color: "sky"
    },
    {
      title: "Advanced Stories",
      color: "green"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="learn-container">
      <h1 style={{textAlign: 'center'}}>Not yet available</h1>
      <div className="learn-header">
        <span className="play-icon">▶</span>
        <h2>Learn</h2>
      </div>

      <div className="card-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className={`lesson-card ${lesson.color}`}>
            <h3>{lesson.title}</h3>

            <div className="lines">
              <span></span>
              <span></span>
            </div>

            <button className="start-btn">Start</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
