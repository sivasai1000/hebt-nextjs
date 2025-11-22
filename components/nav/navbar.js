"use client";

import { useState, useEffect } from "react";
import SectionContainer from "@/components/common/section-container";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "platform", "solutions", "integrations"];
      let current = "home";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 180;
          if (window.scrollY >= offsetTop) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "home", label: "Home", href: "#home" },
    { id: "platform", label: "Platform", href: "#platform" },
    { id: "solutions", label: "Solutions", href: "#solutions" },
    { id: "integrations", label: "Integrations", href: "#integrations" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-transparent">
      <SectionContainer className="flex items-center justify-between">

        {/* ========= MOBILE TOP BAR ========= */}
        <div
          className="
            md:hidden
            w-full flex items-center justify-between 
            px-4 py-2
            rounded-[20px]
            bg-[#2B2623]/90
            backdrop-blur-[8px]
            border border-white/10
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/hebt-logo.svg"
              alt="HEBT AI"
              width={142}
              height={48}
              className="object-contain"
            />
          </div>

          {/* Menu toggle */}
          <button onClick={() => setOpen(!open)}>
            <Image
              src={
                open
                  ? "/assets/images/close.svg"
                  : "/assets/images/menu-icon.svg"
              }
              alt="Menu"
              width={26}
              height={26}
              className="opacity-90"
            />
          </button>
        </div>

        {/* ========= DESKTOP LEFT LOGO ========= */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative w-[150px] h-[40px] md:w-[180px] md:h-[54px]">
            <Image
              src="/assets/images/hebt-logo.svg"
              alt="HEBT"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ========= DESKTOP NAVIGATION ========= */}
        <nav
          className="
            hidden md:grid items-center gap-4
            px-3 py-2 rounded-[20px]
            bg-[#FFDBBF1A]
            backdrop-blur-[4px]
            border border-[#FFDBBF1A]/20
            grid-cols-4 md:auto-cols-fr
          "
        >
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className="relative flex items-center justify-center font-bricolage text-[18px]"
              >
                {/* 🔥 FIXED ACTIVE BG (No active-border class) */}
                <span
                  className={`
                    absolute inset-0 rounded-[10px] transition-all duration-300
                    ${isActive
                      ? "bg-gradient-to-br from-[#E2C5B3]/40 to-[#7C6A60]/20"
                      : ""
                    }
                  `}
                />

                <span
                  className={`
                    relative z-10 h-[42px] flex items-center justify-center 
                    px-[20px] py-[12px] rounded-[10px]
                    ${
                      isActive
                        ? "text-white bg-[#FFDBBF1A] backdrop-blur-[10px]"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* ========= DESKTOP RIGHT BUTTONS ========= */}
        <div className="hidden md:flex items-center gap-2">
          <button className="h-[46px] px-4 rounded-[10px] bg-[#FFDBBF1A] backdrop-blur-[10px] text-white font-bricolage text-[16px]">
            Login
          </button>
          <button className="h-[46px] px-4 rounded-[10px] bg-[#FFDBBF1A] backdrop-blur-[10px] text-white font-bricolage text-[16px]">
            Get Started
          </button>
        </div>
      </SectionContainer>

      {/* ========= MOBILE DROPDOWN ========= */}
      {open && (
        <div className="md:hidden absolute top-[100px] left-0 w-full px-4">
          <div
            className="
              w-full rounded-[20px]
              bg-[#2B2623]/90
              backdrop-blur-[8px]
              border border-white/10
              py-6 flex flex-col items-center gap-6
            "
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80 font-bricolage text-[16px] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <div className="border-t border-white/10 w-full my-2" />

            <button
              onClick={() => setOpen(false)}
              className="h-[42px] px-5 rounded-[10px] bg-[#120D0C] text-white font-bricolage w-[90%]"
            >
              Login
            </button>

            <button
              onClick={() => setOpen(false)}
              className="h-[42px] px-5 rounded-[10px] bg-[#120D0C] text-white font-bricolage w-[90%]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
