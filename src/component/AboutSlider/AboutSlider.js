import React from 'react';
import './AboutSlider.css';

const AboutSlider = () => {
  return (
    <div class="about-hero">
      <img
        src="https://img.freepik.com/free-vector/white-clean-hexagonal-medical-concept_1017-29801.jpg?w=1480&t=st=1672906381~exp=1672906981~hmac=58a9824a0111cd5a84522feb013a79f7c9b4add1811fe2f1ed1748699a41475e"
        alt="about-hero image"
      />
      <div class="about-hero-text-container">
        <h1>
          About <span style={{ color: '#FF4F5A' }}>REDGREEN!</span>
        </h1>
        <p>
          "Welcome to our tech gadget web application! We are dedicated to
          bringing you the latest and greatest gadgets that make your life
          easier and more convenient. From smart home devices to portable
          chargers, we have it all. Our goal is to provide you with innovative
          solutions to your tech needs. Take a look around and discover the
          future of gadgetry with us. Thank you for choosing us as your go-to
          source for all things tech."
        </p>
      </div>
    </div>
  );
};

export default AboutSlider;
