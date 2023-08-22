import React from "react";
import Flights from "./Flights";
import MainHeader from "@/pages/MainHeader";
import NavHeroSection from "@/pages/NavHeroSection";
import Partner from "../../pages/Partner";

function page() {
  return (
    <>
      <MainHeader />
      <NavHeroSection />
      <Flights />
    </>
  );
}

export default page;
