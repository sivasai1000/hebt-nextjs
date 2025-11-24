"use client";

import { useState, useEffect } from "react";
import SectionContainer from "@/components/common/section-container";
import Image from "next/image";
import clsx from "clsx";

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
      <div className="flex items-center justify-between mt-6  px-10 ">

        <div
          className="
          md:hidden
          w-full flex items-center justify-between 
          px-4 
          rounded-[20px]
          bg-[#2B2623]/90
          backdrop-blur-[8px]
          border border-white/10
        "
        >
          {/* Logo */}
          <Image
            src="/assets/images/hebt-logo.svg"
            alt="HEBT AI"
            width={142}
            height={48}
            className="object-contain"
          />

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
        <div className="hidden md:flex items-center gap-3 ">
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
            hidden md:flex items-center gap-2
            px-2 py-2 rounded-[20px]
            bg-[#FFDBBF1A]
            backdrop-blur-[6px]
            border border-white/10
          "
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="flex items-center justify-center border-none"
            >
              <span
                className={clsx(
                  "flex items-center justify-center h-[42px] px-[22px] py-[12px] rounded-[10px] text-[18px] font-bricolage",
                  ! (activeSection === link.id) &&
                    "text-white/70 hover:text-white",
                  activeSection === link.id && [
                    "text-white",
                    "bg-[#FFDBBF1A]/50",
                    "isolate",
                   
                  ]
                )}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* ========= DESKTOP RIGHT BUTTONS ========= */}
       <div className="hidden md:flex items-center gap-6">
  <button className="h-[46px] px-4 rounded-[10px] bg-[#FFDBBF1A] backdrop-blur-[10px] text-white font-bricolage text-[16px] border border-b-0 border-[#FFDFCD1A]">
    Login
  </button>

  <button className="h-[46px] px-4 rounded-[10px] bg-[#FFDBBF1A] backdrop-blur-[10px] text-white font-bricolage text-[16px] border border-[#FFDFCD1C]">
    Get Started
  </button>
</div>

      </div>

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
