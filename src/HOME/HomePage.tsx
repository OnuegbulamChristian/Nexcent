import React from "react";
import NavBar from "../COMPONENTS/NavBar/NavBar";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import OurClients from "../COMPONENTS/OurClients/OurClients";
import CommunitySection from "../COMPONENTS/CommunitySection/CommunitySection";
import PixelGradeSection from "../COMPONENTS/PixelGradeSection/PixelGradeSection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OurClients />
      <CommunitySection />
      <PixelGradeSection />
    </div>
  );
};

export default HomePage;
