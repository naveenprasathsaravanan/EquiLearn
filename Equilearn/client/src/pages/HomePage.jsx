// src/pages/HomePage.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import VoiceCommandButton from "../components/VoiceCommandButton";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
      <VoiceCommandButton />
    </>
  );
}

export default HomePage;
