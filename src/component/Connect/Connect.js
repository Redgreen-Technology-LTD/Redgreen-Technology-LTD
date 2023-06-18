import React from 'react';
import { Link } from 'react-router-dom';
import './Connect.css';

const Connect = () => {
  return (
    <div className="lg:mx-5 my-8 lg:my-20">
      <div className="grid lg:grid-cols-2 lg:gap-32 place-items-center">
        <div className="connect-left">
          <div className="lg:text-start">
            <h1 className="text-xl font-bold">LET'S STAY IN TOUCH</h1>
            <p className="text-sm">Get updates on sales specials and more</p>
          </div>
          <div className="relative connect-input">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <form
              method="POST"
              action="https://formspree.io/f/mqkjyqqr"
              className="flex justify-center items-center"
            >
              <input
                type="email"
                name="email"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
              />
              <button type="submit" className="arrow-btn">
                <i class="fa-solid fa-chevron-right text-gray-600"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="connect-right">
          <div>
            <div className="lg:text-start">
              <h1 className="text-xl font-bold">FOLLOW REDGREEN</h1>
              <p className="text-sm">We want to hear from you!</p>
            </div>
          </div>
          <div className="flex connect-icon lg:ml-10">
            <a
              href="https://www.facebook.com/redgreen.technology"
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/redgreentechnology/mycompany/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
