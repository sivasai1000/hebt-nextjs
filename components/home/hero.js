"use client";

import { useEffect, useState } from "react";
import Text from "@/components/common/text";
import HeroInput from "./hero-input";
import Navbar from "../nav/navbar";

const bgImages = [
  "/assets/images/bg5.svg",
  "/assets/images/bg6.svg",
  "/assets/images/bg7.svg",
  "/assets/images/bg8.svg",
];

const phrases = [
  "AI Coding Engine",
  "Product Delivery",
  "Build & Test Team",
  "SDLC Automation Team",
  "Product Launch Team",
];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Typing Animation Loop
useEffect(() => {
  const currentPhrase = phrases[phraseIndex];

  const timeout = setTimeout(() => {
    if (!deleting) {
      // typing forward (slow)
      setText(currentPhrase.slice(0, text.length + 1));

      if (text.length + 1 === currentPhrase.length) {
        setTimeout(() => setDeleting(true), 2500); // longer pause before delete
      }
    } else {
      // deleting (slow)
      setText(currentPhrase.slice(0, text.length - 1));

      if (text.length === 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setText(""); // reset text
      }
    }
  }, deleting ? 110 : 150); // NEW SPEEDS

  return () => clearTimeout(timeout);
}, [text, deleting, phraseIndex]);


  return (
   <div
  className="
    relative w-full overflow-hidden
    flex flex-col
    px-4 sm:px-6 lg:px-8
   
    bg-cover bg-center bg-no-repeat
  "
  style={{
    backgroundImage: `url(${bgImages[bgIndex]})`,
    transition: "background-image 1s ease-in-out",
  }}
>
      <Navbar />
      <div className="relative z-10 text-center pt-10 lg:pt-20 pb-20">
        <Text
          as="h1"
          className="
            font-bricolage font-semibold
            text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px]
            leading-tight tracking-[-0.01em] 
          "
        >
          Your<br />

          <span className="font-semibold inline-flex justify-center items-center gap-3">

            <span
  className="bg-clip-text text-transparent"
  style={{
    background: "linear-gradient(270deg, #FFFDF8 0%, rgba(255,231,199,0.5) 100%)",
    WebkitBackgroundClip: "text"
  }}
>
  {"{"}
</span>

           <span
  className="
    typing-cursor 
    inline-block
    text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px]
    min-w-[50px]
    bg-clip-text text-transparent
  "
  style={{
    background: "linear-gradient(90deg, #2F0800 0%, #FF7254 100%)",
    WebkitBackgroundClip: "text"
  }}
>
  {text}
</span>

            <span
  className="bg-clip-text text-transparent"
  style={{
    background: "linear-gradient(270deg, #FFFDF8 0%, rgba(255,231,199,0.5) 100%)",
    WebkitBackgroundClip: "text"
  }}
>
  {"}"}
</span>


          </span>

          <br />
          That Never Sleeps
        </Text>
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

      <style>
        {`
          .typing-cursor::after {
            content: '|';
            margin-left: 4px;
            animation: cursorBlink 0.7s infinite;
            color: #FF7254;
          }

          @keyframes cursorBlink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
