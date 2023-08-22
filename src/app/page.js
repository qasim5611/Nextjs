import Form from "@/pages/Form";
import MainHeader from "@/pages/MainHeader";
import NavHeroSection from "@/pages/NavHeroSection";
import About from "@/pages/About";
import FeaturedSlider from "@/pages/FeaturedSlider";
import RecommendedAirlines from "@/pages/RecommendedAirlines";
import TravelGuideandTips from "@/pages/TravelGuideandTips";
import Footer from "@/pages/Footer";
import Services from "@/pages/Services";

export default function Home() {
  return (
    <main>
      <MainHeader />
      <NavHeroSection />
      <About />
      <Form />
      <Services />
      <RecommendedAirlines />
      <FeaturedSlider />
      <TravelGuideandTips />
      <Footer />
    </main>
  );
}
