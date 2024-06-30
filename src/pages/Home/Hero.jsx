import React from "react";
import "../../assets/styles/Hero.css";

function Hero() {
  return (
    <section className="heroContent">
      <div className="heroInfo__content">
        <h1 className="heroInfo__title">Inspiration for travel by real people</h1>
        <p className="heroInfo__description">Book smart, travel simple</p>
        <a href="/" className="heroInfo__button">
          Start planning your trip
        </a>
      </div>
    </section>
  );
}

export default Hero;
