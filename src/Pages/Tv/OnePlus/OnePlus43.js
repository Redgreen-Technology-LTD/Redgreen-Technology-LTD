import React, { useState } from 'react';
import './OnePlus.css';
import { Helmet } from 'react-helmet';

const OnePlus43 = () => {
  const details = {
    id: 2,
    path: '/oneplus/y1g-43',
    pName: 'OnePlus 43 Y1G Y Series 43-Inch HD Smart Android LED Television',
    pImage: '/assets/images/product/tv/oneplus/y1g-32/oneplus01.png',
    images: [
      {
        id: 1,
        image: '/assets/images/product/tv/oneplus/y1g-32/oneplus01.png'
      },
      {
        id: 2,
        image: '/assets/images/product/tv/oneplus/y1g-32/oneplus02.png'
      },
      {
        id: 3,
        image: '/assets/images/product/tv/oneplus/y1g-32/oneplus03.png'
      },
      {
        id: 4,
        image: '/assets/images/product/tv/oneplus/y1g-32/oneplus04.png'
      }
    ],
    oneplus43: {
      newPrice: '32,990 ৳',
      oldPrice: '44,990 ৳',
      name: 'OnePlus 43 Y1G Y Series 43-Inch HD Smart Android LED Television',
      color: 'Black',
      model: 'Y1G',
      resolution: '1920 × 1080 pixel',
      ram: '1GB',
      rom: '8GB',
      display: '43 inches'
    }
  };

  const initialImg = details.images[0];
  const [mainImage, setMainImage] = useState(initialImg);

  return (
    <div className="card-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OnePlus Y1G 43"</title>
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
              Old Price: <span>{details.oneplus43.oldPrice}</span>
            </p>
            <p className="new-price">
              New Price: <span>{details.oneplus43.newPrice}</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>

            <ul>
              <li>
                Color: <span>{details.oneplus43.color}</span>
              </li>
              <li>
                Model: <span>{details.oneplus43.model}</span>
              </li>
              <li>
                Processor: <span>{details.oneplus43.processor}</span>
              </li>
              <li>
                Ram: <span>{details.oneplus43.ram}</span>
              </li>
              <li>
                Storage: <span>{details.oneplus43.storage}</span>
              </li>
              <li>
                Display: <span>{details.oneplus43.display}</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <button type="button" className="btn">
              <a
                href="https://www.daraz.com.bd/products/oneplus-tv-y1g-43-inch-android-11-updated-global-version-i270997979-s1242688395.html?search=store&mp=3&spm=a2a0e.8553159.countdownProduct_19209879.1"
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

export default OnePlus43;
