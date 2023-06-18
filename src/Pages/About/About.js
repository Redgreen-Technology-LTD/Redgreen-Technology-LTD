import React from 'react';
import AboutSlider from '../../component/AboutSlider/AboutSlider';
import ContactUs from '../../component/ContactUs/ContactUs';
import OurMission from '../../component/OurMission/OurMission';
import OurTeam from '../../component/OurTeam/OurTeam';
import Service from '../../component/Service/Service';

const About = () => {
  return (
    <div className="">
      <AboutSlider />
      <OurMission />
      <Service />
      <OurTeam />
      <ContactUs />
    </div>
  );
};

export default About;
