import React, { useState } from 'react';
import { useEffect } from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('team.json')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setTeams(json);
      });
  }, []);

  return (
    <div>
      <div style={{ marginTop: '30px' }}>
        <h1 className="text-4xl lg:text-5xl mb-3 text-gray-700">
          Our <span style={{ color: '#FF4F5A' }}>Team</span>
        </h1>
        <div className="underline"></div>
      </div>
      <div id="member-container">
        {teams.map((team) => (
          <div class="member">
            <img src={team.file} />
            <h2>{team.name}</h2>
            <p class="who">{team.designation}</p>
            <p class="member-text">{team.details}</p>

            <div class="soc-icons">
              <a href={team.facebook_link} target="_blank">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href={team.twitter_link} target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href={team.linkedin_link} target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
