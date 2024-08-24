import React from "react";
import NavBar from "../COMPONENTS/NavBar/NavBar";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import OurClients from "../COMPONENTS/OurClients/OurClients";
import CommunitySection from "../COMPONENTS/CommunitySection/CommunitySection";
import PixelGradeSection from "../COMPONENTS/PixelGradeSection/PixelGradeSection";
import HelpSection from "../COMPONENTS/HelpSection/HelpSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OurClients />
      <CommunitySection />
      <PixelGradeSection />
      <HelpSection />
    </div>
  );
};

export default HomePage;
