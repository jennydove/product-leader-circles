
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Experience from "@/components/Experience";
import CommunityRules from "@/components/CommunityRules";
import Membership from "@/components/Membership";
import Sponsorship from "@/components/Sponsorship";
import CallToAction from "@/components/CallToAction";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhySection />
      <Experience />
      <CommunityRules />
      <Membership />
      <Sponsorship />
      <CallToAction />
    </div>
  );
};

export default Index;
