import React, { useEffect, useState } from 'react';
import './OurMission.css';

const OurMission = () => {
  const [mission, setMission] = useState([]);

  useEffect(() => {
    fetch('mission.json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMission(json);
      });
  }, []);
  return (
    <div className="lg:w-1/2 mx-auto p-3 lg:py-52">
      <div style={{ marginBottom: '30px' }}>
        <h1 className="text-4xl lg:text-5xl mb-3 text-gray-700">
          Our <span style={{ color: '#FF4F5A' }}>Mission</span>
        </h1>
        <div className="underline"></div>
      </div>
      {mission.map((missionDesc) => (
        <p className="text-gray-500">{missionDesc.description}</p>
      ))}
    </div>
  );
};

export default OurMission;
