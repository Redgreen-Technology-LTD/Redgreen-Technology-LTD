import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const ChuwiFreeDetails = () => {
  const details = {
    id: 2,
    pName:
      "CHUWI FreeBook 360° Flip 2-in-1 Convertible Laptop 13.5''Touch Screen",
    pImage: '/assets/images/product/laptop/chuwi-free/free01.png',
    images: [
      {
        image: '/assets/images/product/laptop/chuwi-free/free01.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-free/free02.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-free/free03.png'
      },
      {
        image: '/assets/images/product/laptop/chuwi-free/free04.png'
      }
    ],
    chuwi_free: {
      newPrice: '45,990 ৳',
      oldPrice: '52,990 ৳',
      color: 'Space-Gray',
      model: 'CHUWI FreeBook 360°',
      processor: 'Intel Celeron N5100 | Intel® UHD Graphics',
      ram: '12GB DDR4',
      storage: '512GB SSD',
      display: '13.5 Inch(1920 x 1080) IPS Display'
    }
  };

  const initialImg = details.images[0];
  const [mainImage, setMainImage] = useState(initialImg);

  return (
    <div className="card-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CHUWI FreeBook 360°</title>
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
              Old Price: <span>{details.chuwi_free.oldPrice}</span>
            </p>
            <p className="new-price">
              New Price: <span>{details.chuwi_free.newPrice}</span>
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
                href="https://www.daraz.com.bd/products/chuwi-360-i271106269-s1253864421.html?search=store&mp=3&spm=a2a0e.8553159.countdownProduct_19209879.2"
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

export default ChuwiFreeDetails;
