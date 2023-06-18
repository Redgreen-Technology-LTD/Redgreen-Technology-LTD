import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './GoToTop.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <div className="top-wrapper">
      {isVisible && (
        <div className="scroll-top-btn" onClick={goToBtn}>
          <i class="fa-solid fa-arrow-up top-btn--icon"></i>
        </div>
      )}
    </div>
  );
};

export default GoToTop;
