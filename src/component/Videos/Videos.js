import React, { useEffect, useState } from 'react';
import './Videos.css';
import play from '../../assets/videos/play.png';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('videos.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, []);
  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div className="products-divider w-96"></div>
        <h1 className="px-2 text-2xl text-gray-500">Videos</h1>
        <div className="products-divider w-96"></div>
      </div>
      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center px-3 md:py-3 ">
          {videos.map((video) => (
            <div className="sm:mb-2">
              <div className="video-wrapper">
                <img src={video.thumbnail} alt="" />
                <div className="video-content">
                  <a href={video.link} target="_blank" rel="noreferrer">
                    <img src={play} width="70px" alt="" />
                  </a>
                  <h1>{video.content}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Videos;
