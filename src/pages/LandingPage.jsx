import React from 'react';
import Hero3D from '../components/WebsiteHero';
import Roadmap from '../components/RoadmapHero';
import RoadmapCourses from '../components/RoadmapCourses';
import AboutPaul from '../components/AboutPaul';
import CreditorStats from '../components/CreditorStats';

const LandingPage = () => {
  return (
    <div>
      <Hero3D />
      <Roadmap />
      <RoadmapCourses />
      <AboutPaul />
      <CreditorStats />
    </div>
  );
};

export default LandingPage; 
