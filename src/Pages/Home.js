import React from 'react';
import BlogContents from '../component/BlogContent/BlogContents';
import Connect from '../component/Connect/Connect';
import Products from '../component/Products/Products';
import Slider from '../component/Slider/Slider';
import Videos from '../component/Videos/Videos';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Redgreen Technology Ltd. - Home</title>
        <meta
          name="keyword"
          content="RedGreen Technology, React JS, TailWind, Daisyui ...."
        />
        <meta
          name="description"
          content="RedGreen Technology created by using React JS"
        />
      </Helmet>
      <Slider
        title={'redgreen'}
        subTitle={'Affordable Technology'}
        btn={'Explore Now'}
      />
      <BlogContents />
      <Products />
      <Videos />
      <Connect />
    </div>
  );
};

export default Home;
