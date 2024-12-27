import React from "react";
import HeroSection from "../components/home/HeroSection";
import Carousel from "../components/home/Carousel";
import Categories from "../components/home/Categories";
import Gallary from "../components/home/Gallary";
import Testimonials from "../components/home/Testimonials";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <Carousel />
      </div>
      <Categories/>
      <Gallary />
      <Testimonials/>
    </div>
  );
};

export default HomePage;
