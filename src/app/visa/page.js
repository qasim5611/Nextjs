import React from "react";
import MainHeader from "@/pages/MainHeader";
import NavHeroSection from "@/pages/NavHeroSection";
import Partner from "@/pages/Partner";
import Footer from "@/pages/Footer";
import VisaSlider from "./VisaSlider";
import VisaApply from "./VisaApply";

const page = () => {
  return (
    <>
      <MainHeader />
      <NavHeroSection />
      <VisaApply />
      <VisaSlider />
      <Partner />
      <Footer />
    </>
  );
};

export default page;
