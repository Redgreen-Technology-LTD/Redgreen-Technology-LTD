import React from 'react';
import './Products.css';
import product1 from '../../assets/product/product1.jpg';
import product2 from '../../assets/product/product2.jpg';
import product3 from '../../assets/product/product3.jpg';
import product4 from '../../assets/product/product4.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="lg:my-14">
      <div className="flex justify-center items-center mb-10">
        <div className="products-divider w-96"></div>
        <h1 className="px-2 text-2xl text-gray-500">START PRODUCTS</h1>
        <div className="products-divider w-96"></div>
      </div>
      <div className="">
        <div className="lg:flex m-5">
          <div className="lg:w-1/2 mb-1 lg:mr-0.5 shadows">
            <Link to="/tv/oneplus">
              <img className="w-full" src={product1} alt="" />
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="flex">
              <div className="w-1/2 mr-0.5 shadows">
                <Link to="/laptop/chuwi">
                  <img className="w-full" src={product3} alt="" />
                </Link>
              </div>
              <div className="w-1/2 shadows">
                <Link to="/laptop/chuwi">
                  <img className="w-full" src={product2} alt="" />
                </Link>
              </div>
            </div>
            <div className="w-full mt-0.5 shadows">
              <Link to="/accessories">
                <img className="w-full" src={product4} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
