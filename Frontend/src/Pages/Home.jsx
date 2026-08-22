import React from "react";
import SideNavbar from "../components/SideNavbar";
import seven from "../assets/7.jpeg";
import eight from "../assets/8.jpeg";

import ss from "../assets/ss.png";
import fourteen from "../assets/14.jpeg";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import CategorySection from "../components/Home/CategorySection";
import OurFeatures from "../components/Home/OurFeatures";
import EcoPromoSection from "../components/Home/EcoPromoSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import Testimonials from "../components/Home/Testimonials";

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-100 overflow-hidden">
      <SideNavbar />
      <Hero />
      <CategorySection />
      <OurFeatures />
      <EcoPromoSection />
      <WhyUsSection />
      <Testimonials />
    </div>
  );
}

export default Home;
