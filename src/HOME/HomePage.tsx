import React from "react";
import NavBar from "../COMPONENTS/NavBar/NavBar";
import HeroSection from "../COMPONENTS/HeroSection/HeroSection";
import OurClients from "../COMPONENTS/OurClients/OurClients";
import CommunitySection from "../COMPONENTS/CommunitySection/CommunitySection";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OurClients />
      <CommunitySection />
    </div>
  );
};

export default HomePage;
