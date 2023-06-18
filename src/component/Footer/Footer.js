import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-slate-300 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <span className="footer-title">SHOP AND LEARN</span>
          <Link to="/chuwi/chuwi-core" className="link link-hover">
            Chuwi CoreBook X
          </Link>
          <Link to="/chuwi/chuwi-free" className="link link-hover">
            Chuwi FreeBook 360°
          </Link>
          <Link to="/chuwi/chuwi-hero" className="link link-hover">
            Chuwi HeroBook Pro
          </Link>
        </div>
        <div className="footer-contact">
          <span className="footer-title">CONTACT US</span>
          <a
            href="https://www.facebook.com/redgreen.technology"
            target="_blank"
            className="link link-hover"
          >
            <i className="fa-brands fa-facebook"></i>
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/redgreentechnology/mycompany/"
            target="_blank"
            className="link link-hover"
          >
            <i className="fa-brands fa-linkedin"></i>
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="link link-hover"
          >
            <i className="fa-brands fa-instagram"></i>
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="link link-hover"
          >
            <i className="fa-brands fa-twitter"></i>
            Twitter
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer footer-center px-10 py-4 border-t bg-slate-300 text-base-content border-slate-200">
        <div className="items-center grid-flow-col">
          <p>
            Redgreen Technology Ltd. © 2022 - All rights are reserved
            <br />
            Affordable Technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
