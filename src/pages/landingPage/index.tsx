import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Card from "./components/Card";
import Footer from "./components/Footer";
function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Card />
      <Footer />
    </div>
  );
}

export default LandingPage;
