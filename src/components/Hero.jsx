import React from 'react';
import BG from "../assets/bg.png"

function Hero() {
  return (
    <section className="hero">
      <h1>Learn & Translate Garo Language</h1>
      <p>Preserving language through technology and education.</p>

      <div className="hero-image">
        <img src={BG} className='bg'/>
      </div>
    </section>
  );
}

export default Hero;