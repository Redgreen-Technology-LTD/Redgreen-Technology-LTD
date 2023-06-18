import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const OnePlus = () => {
  const [allTV, setAllTv] = useState([]);

  useEffect(() => {
    fetch('/tv.json')
      .then((res) => res.json())
      .then((data) => setAllTv(data));
  }, []);

  return (
    <div className="lg:mt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OnePlus All TV Collection</title>
        <meta
          name="keyword"
          content="RedGreen Technology, React JS, TailWind, Daisyui ...."
        />
        <meta
          name="description"
          content="RedGreen Technology created by using React JS"
        />
      </Helmet>
      <header className="my-3 lg:mt-20 lg:mb-10">
        <h1 className="text-3xl font-bold mb-1">OnePlus</h1>
        <div className="underline"></div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-5">
        {allTV.map((tv) => (
          <div className="mb-3 lg:mb-12 p-3 text-start shadow-md">
            <div className="banner">
              <img src={tv.pImage} alt="" />
            </div>
            <div className="content">
              <h1 className="font-bold">{tv.pName}</h1>
              <button className="info-btn">
                <Link to={tv.path}>
                  More Info <i class="fa-solid fa-angles-right"></i>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnePlus;
