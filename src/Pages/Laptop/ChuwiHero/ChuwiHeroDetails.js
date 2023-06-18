import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../ChuwiCore/ChuwiCoreDetails.css';

const ChuwiHeroDetails = () => {
  const details = {
    id: 3,
    pName:
      'Chuwi HeroBook Pro Intel Celeron N4020 14.1 inch Full HD Laptop with Windows 10',
    pImage: '/assets/images/product/laptop/chuwi-hero/hero01.png',
    images: [
      {
        image: '/assets/images/product/laptop/chuwi-hero/hero01.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-hero/hero02.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-hero/hero03.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-hero/hero04.png'
      }
    ],
    chuwi_hero: {
      newPrice: '25,490 ৳',
      oldPrice: '29,990 ৳',
      color: 'Space-Gray',
      model: 'Chuwi HeroBook Pro',
      processor:
        'Intel Celeron Processor N4020 (4M Cache, 1.10 GHz up to 2.80 GHz)',
      ram: '8GB LPDDR4 RAM',
      storage: '256GB SSD',
      display: '14.1 Inch(1920 x 1080) IPS Anti-Glare Display'
    }
  };

  const initialImg = details.images[0];
  const [mainImage, setMainImage] = useState(initialImg);

  return (
    <div className="card-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chuwi HeroBook Pro</title>
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
              Old Price: <span>{details.chuwi_hero.oldPrice}</span>
            </p>
            <p className="new-price">
              New Price: <span>{details.chuwi_hero.newPrice}</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <button type="button" className="btn">
              <a
                href="https://www.daraz.com.bd/products/chuwi-i271062962-s1250261572.html?search=store&mp=3&spm=a2a0e.8553159.countdownProduct_19209879.4"
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

export default ChuwiHeroDetails;
