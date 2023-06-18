import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Laptop.css';
import { Helmet } from 'react-helmet';

const Laptop = () => {
  const [laptops, setLaptops] = useState([]);

  const { pname } = useParams();

  useEffect(() => {
    fetch('/laptops.json')
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);

  return (
    <div className="lg:mt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chuwi All Laptop Collection</title>
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
        <h1 className="text-3xl font-bold mb-1">Chuwi</h1>
        <div className="underline"></div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-5">
        {laptops.map((laptop) => (
          <div className="mb-3 lg:mb-12 p-3 text-start shadow-md">
            <div className="banner">
              <img src={laptop.pImage} alt="" />
            </div>
            <div className="content">
              <h1 className="font-bold">{laptop.pName}</h1>
              <button className="info-btn">
                <Link to={laptop.path}>
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

export default Laptop;
