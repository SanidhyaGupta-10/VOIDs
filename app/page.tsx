"use client";
import { useState } from "react";
import { HeroSection, FeaturesSection, PricingSection, VoidWhySection, Projects } from "@/app/sections/index";
import SplashCursor from "@/components/SplashCursor";
import Loader from "@/components/Loader";
import Snowfall from 'react-snowfall';
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      {!loading && (

        <main>
          <Snowfall   color='#BAB499' />
          <SplashCursor />
          <Navbar/>
          <HeroSection />
          <FeaturesSection />
          <Projects />
          <PricingSection />
          <VoidWhySection />
           <Footer />
        </main>
      )}
    </>
  );
}
