import React from "react";
import Hajj from "./Hajj";
import MainHeader from "@/pages/MainHeader";
import NavHeroSection from "@/pages/NavHeroSection";
import Footer from "@/pages/Footer";
import Partner from "@/pages/Partner";

function page() {
  return (
    <>
      <MainHeader />
      <NavHeroSection />
      <Hajj />
      <Partner />
      <Footer />
    </>
  );
}

export default page;
