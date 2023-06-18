import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
  return (
    <div class="hero">
      <img
        src="https://img.freepik.com/free-vector/white-clean-hexagonal-medical-concept_1017-29801.jpg?w=1480&t=st=1672906381~exp=1672906981~hmac=58a9824a0111cd5a84522feb013a79f7c9b4add1811fe2f1ed1748699a41475e"
        alt="Hero image"
      />
      <div class="hero-text-container">
        <h1>
          Welcome to my <span style={{ color: '#FF4F5A' }}>REDGREEN!</span>
        </h1>
        <p>AFFORDABLE TECHNOLOGY</p>
        <button class="button-89" role="button">
          <Link to="/about">Explore Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Slider;
