import React, { useEffect, useState } from 'react';
import './BlogContents.css';
import exclusiveBanner from '../../assets/banner/exclusive-banner.png';
import { Link } from 'react-router-dom';

const BlogContent = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch('blogContent.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContents(data);
      });
  }, []);

  return (
    <div className="blog">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-3 md:py-3">
        {contents.map((content) => (
          <div className="blog-content">
            <Link to={content.path}>
              <img src={content.banner} alt="#banner" />
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 place-items-center lg:py-3 lg:mt-5">
          <a href="https://www.daraz.com.bd/shop/redgreen-technology/" target="_blank">
          <img src={exclusiveBanner} alt="Daraz Discount Offer" />
        </a>
      </div>
    </div>
  );
};

export default BlogContent;
