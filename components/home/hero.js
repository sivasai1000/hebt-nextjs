"use client";

import { useEffect, useState } from "react";
import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";
import HeroInput from "./hero-input";
import Navbar from "../nav/navbar";

const bgImages = [
  "/assets/images/bg5.png",
  "/assets/images/bg2.svg",
  "/assets/images/bg3.svg",
  "/assets/images/bg4.svg",
];

// ✨ ROTATING PHRASES
const phrases = [
  "{ AI Coding Engine }",
  "{ Product Delivery }",
  "{ Build & Test Team }",
  "{ SDLC Automation Team }",
  "{ Product Launch Team }",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // ✨ Background Image Changer
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✨ Text Phrase Changer
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >

      {/* 🔥 TOP-RIGHT SUN-RAY EFFECT */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          right-0
          w-[1400px]
          h-[1400px]
          opacity-[0.22]
          mix-blend-screen
        "
        style={{
          backgroundImage: "url('/assets/images/star.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "translate(40%, -40%) rotate(32deg)",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-overlay opacity-30 pointer-events-none" />

      <SectionContainer sectionClassName="relative z-10 !pt-0 !mt-0 !pb-0 !px-0">
        <Navbar />

        {/* CONTENT */}
        <div className="relative z-10 pt-5 pb-28 text-center">

          {/* MAIN HEADING */}
          <Text as="h1">
  Your
  <br />

  <span className="font-semibold inline-block">
    <span
      key={phrases[phraseIndex]}
      className="
        block
        !bg-gradient-to-r
        from-[#2F0800]
        to-[#FF7254]
        bg-clip-text
        text-transparent
        animate-slide-fade
      "
    >
      {phrases[phraseIndex]}
    </span>
  </span>

  <br />
  That Never Sleeps
</Text>


          {/* SUBTEXT */}
          <p
            className="
              font-geist font-normal
              text-[18px] sm:text-[20px] lg:text-[22px]
              leading-[30px]
              text-center text-[#FFFDF8] opacity-60
              mx-auto mt-4 mb-8
              lg:w-[987px]
            "
          >
            From proposal to deployment, HEBT AI transforms your ideas into production-ready
            applications in record time. Experience the future of software development with our
            intelligent SDLC automation platform.
          </p>

          <HeroInput />
        </div>
      </SectionContainer>
    </div>
  );
}
