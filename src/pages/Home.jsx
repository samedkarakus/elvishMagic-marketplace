import React from "react";
import { Container } from "reactstrap";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/liveAuction";
import SellerSection from "../components/ui/Seller-section/SellerSection";
import Trending from "../components/ui/Trending-section/Trending";
import StepSection from "../components/ui/Step-section/stepSection";

const home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  );
};

export default home;
