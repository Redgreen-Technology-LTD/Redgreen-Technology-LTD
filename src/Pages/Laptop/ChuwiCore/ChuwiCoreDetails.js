import React, { useState } from 'react';
import './ChuwiCoreDetails.css';
import { Helmet } from 'react-helmet';

const ChuwiCoreDetails = () => {
  const details = {
    id: 1,
    pName: 'Chuwi Corebook X Core i5 10th Gen 14-Inch Laptop',
    pImage: '/assets/images/product/laptop/chuwi-core/core01.png',
    images: [
      {
        image: '/assets/images/product/laptop/chuwi-core/core01.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-core/core02.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-core/core03.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-core/core04.png'
      }
    ],
    chuwi_core: {
      newPrice: '43,990 ৳',
      oldPrice: '47,990 ৳',
      color: 'Space-Gray',
      model: 'Chuwi Corebook X',
      processor: 'Intel Core i5-10259U (6M Cache, 2.30 GHz up to 3.80 GHz)',
      ram: '8GB LPDDR4, Intel Iris Plus Graphics 655',
      storage: '512GB SSD (expansion up to 1TB)',
      display: '14-Inch (2160 x 1440) 3:2'
    }
  };

  const initialImg = details.images[0];
  const [mainImage, setMainImage] = useState(initialImg);

  return (
    <div className="card-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chuwi CoreBook X</title>
        <meta
          name="keyword"
          content="RedGreen Technology, React JS, TailWind, Daisyui ...."
        />
        <meta
          name="description"
          content="RedGreen Technology created by using React JS"
        />
      </Helmet>
      <div className="card">
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={mainImage.image} alt="shoe image" />
            </div>
          </div>
          <div className="img-select">
            {details.images.map((curImg, index) => (
              <div className="img-item">
                <a href="#" data-id="1">
                  <img
                    src={curImg.image}
                    alt="shoe image"
                    key={index}
                    onClick={() => setMainImage(curImg)}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">{details.pName}</h2>
          <a
            href="https://www.daraz.com.bd/shop/redgreen-technology"
            className="product-link"
            target="_blank"
          >
            visit redgreen store
          </a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price: <span>{details.chuwi_core.oldPrice}</span>
            </p>
            <p className="new-price">
              New Price: <span>{details.chuwi_core.newPrice}</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>

            <ul>
              <li>
                Color: <span>{details.chuwi_core.color}</span>
              </li>
              <li>
                Model: <span>{details.chuwi_core.model}</span>
              </li>
              <li>
                Processor: <span>{details.chuwi_core.processor}</span>
              </li>
              <li>
                Ram: <span>{details.chuwi_core.ram}</span>
              </li>
              <li>
                Storage: <span>{details.chuwi_core.storage}</span>
              </li>
              <li>
                Display: <span>{details.chuwi_core.display}</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <button type="button" className="btn">
              <a
                href="https://www.daraz.com.bd/products/chuwi-x-i271068709-s1253859819.html?spm=a2a0e.searchlist.list.1.b76bd59eyZVcez&search=1"
                target="_blank"
              >
                Buy Now <i className="fas fa-shopping-cart pl-2"></i>
              </a>
            </button>
          </div>

          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChuwiCoreDetails;
