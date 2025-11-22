"use client";

import { useEffect, useRef, useState } from "react";
import SectionContainer from "@/components/common/section-container";

export default function QuickSetup() {
  const fullText = `
# Install HEBT AI globally
npm install -g hebt

# Launch HEBT AI Interface
hebt login
# Username: your_username
# Password: ********
# ✓ Authentication successful!

# Start interactive project creation
hebt create

# Select project type:
# [1] Web Application (React/Vue/Angular)
# [2] Mobile App (React Native/Flutter)
# [3] Backend API (Node.js/Python/Java)
# [4] Full-Stack Application
# [5] AI/ML Project
# [6] Custom Architecture

# Choose: 4 (Full-Stack Application)

# HEBT UI Interface launched at http://localhost:3000
# Use visual editor to design your project without coding!

# Deploy when ready
hebt deploy --auto-configure
`;

  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  /* Trigger typing ONLY when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 } // start when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [started]);

  /* Typing effect */
  useEffect(() => {
    if (!started) return;

    let i = 0;
    const speed = 10;

    const typeInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typeInterval);
    }, speed);

    return () => clearInterval(typeInterval);
  }, [started]);

  return (
    <SectionContainer   className="pb-20" ref={sectionRef}>
      {/* Outer Card */}
      <div
        className="
          mx-auto w-full max-w-[1022px]
          rounded-3xl overflow-hidden
          bg-[#251B19] border border-black/20 
          shadow-[0_0_40px_rgba(0,0,0,0.4)]
        "
      >
        {/* Header */}
        <div
          className="
            w-full h-[52px] px-5 flex items-center gap-2
            bg-[#251411] border-b border-black/20
          "
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
            <span className="w-3 h-3 rounded-full bg-[#F4BD50]" />
            <span className="w-3 h-3 rounded-full bg-[#61C454]" />
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <h2
            className="
              text-center font-[var(--font-bricolage)] font-semibold
              text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px]
              bg-gradient-to-r from-[#FFFDF8] to-[rgba(255,231,199,0.5)]
              bg-clip-text text-transparent
              mb-10
            "
          >
            Quick Setup – Get Started in Minutes
          </h2>

          {/* Typing Code Block */}
          <div
            className="
              w-full mx-auto bg-[#1A1513]
              rounded-2xl p-6 md:p-10
            "
          >
            <pre
              className="
                text-white/90 font-[var(--font-geist-mono)]
                text-[14px] md:text-[16px]
                leading-[26px] tracking-[-0.02em]
                whitespace-pre-wrap
                min-h-[400px]
                text-center    /* MAKE TEXT CENTERED */
              "
            >
              {displayText}
              {started && <span className="animate-blink">|</span>}
            </pre>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
