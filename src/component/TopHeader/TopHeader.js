import React from 'react';
import { Link } from 'react-router-dom';
import './TopHeader.css';

const TopHeader = () => {
  return (
    <div className="top-header flex justify-between px-5 py-2.5">
      <div className="flex items-center">
        <p>redgreen technology ltd</p>
        <div className="top-divider"></div>
        <p>affordable technology</p>
      </div>
      <div className="flex">
        <Link to="/login">sign in</Link>
        <div className="top-divider"></div>
        <Link to="/signup">sign up</Link>
      </div>
    </div>
  );
};

export default TopHeader;
