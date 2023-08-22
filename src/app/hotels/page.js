import React from "react";
import Hotels from "./Hotels";
import MainHeader from "@/pages/MainHeader";
import NavHeroSection from "@/pages/NavHeroSection";
import SliderOneSection from "./SliderOneSection";
import SliderTwoSection from "./SliderTwoSection";
import Partner from "@/pages/Partner";
import Footer from "@/pages/Footer";

function page() {
  return (
    <>
      <MainHeader />
      <NavHeroSection />
      <Hotels />
      <SliderOneSection />
      <SliderTwoSection />
      <Partner />
      <Footer />
    </>
  );
}

export default page;
