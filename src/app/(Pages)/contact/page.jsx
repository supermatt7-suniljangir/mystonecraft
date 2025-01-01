import React from "react";
import HeroSection from "@/components/contact/HeroSection";
import ContactCards from "@/components/contact/ContactCards";
import Map from "@/components/contact/Map";
import SocialSection from "@/components/contact/SocialSection";
const Contact = () => {
  return (
    <div>
      <HeroSection />
      <ContactCards />
      <Map />
      <SocialSection />
    </div>
  );
};

export default Contact;
