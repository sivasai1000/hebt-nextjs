"use client";

import Image from "next/image";
import { useState } from "react";
import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";

/* Convert angle + radius → x,y */
function getPoint(angleDeg, radius) {
  const a = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(a) * radius,
    y: Math.sin(a) * radius,
  };
}

export default function WorksWithTools() {
  return (
    <SectionContainer id="integrations">
      <Text as="h2" >
  Works Seamlessly With Your{" "}
  <span className="bg-gradient-to-b from-[#4C1B0A] to-[#B23F18] bg-clip-text text-transparent">
    Existing Tools
  </span>
</Text>


      <div className="mt-12 w-full flex justify-center items-center relative">

        {/* ⭐ FIXED CENTER LOGO (does NOT rotate) */}
        <div
          className="
            absolute z-40
            w-[100px] h-[100px]
            sm:w-[140px] sm:h-[140px]
            md:w-[170px] md:h-[170px]
            lg:w-[190px] lg:h-[190px]
          "
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <Image
            src="/assets/images/hebt.svg"
            alt="center"
            width={190}
            height={190}
            className="w-full h-full"
          />
        </div>

        {/* 🔄 ROTATING WRAPPER (rings + icons rotate together) */}
        <div
          className="
            relative animate-spin-slow
            w-[320px] h-[320px]
            sm:w-[450px] sm:h-[450px]
            md:w-[600px] md:h-[600px]
            lg:w-[750px] lg:h-[750px]
          "
        >
          {/* RINGS */}
          <ResponsiveRing base={300} />
          <ResponsiveRing base={400} />
          <ResponsiveRing base={500} />
          <ResponsiveRing base={600} />

          {/* ICONS */}
          <ResponsiveAngleIcon src="github" angle={90} baseRadius={150} />

          <ResponsiveAngleIcon src="aws" angle={270} baseRadius={200} />
          <ResponsiveAngleIcon src="intellji" angle={0} baseRadius={200} />

          <ResponsiveAngleIcon src="sublime" angle={160} baseRadius={260} />
          <ResponsiveAngleIcon src="docker" angle={410} baseRadius={265} />

          <ResponsiveAngleIcon src="terminal" angle={210} baseRadius={320} />
          <ResponsiveAngleIcon src="cursor" angle={320} baseRadius={320} isClickable />
          <ResponsiveAngleIcon src="visual" angle={90} baseRadius={300} />
        </div>
      </div>
    </SectionContainer>
  );
}

/* ---------------------- RINGS ---------------------- */
function ResponsiveRing({ base }) {
  return (
    <>
      <Ring size={base * 0.45} className="block sm:hidden" />
      <Ring size={base * 0.7} className="hidden sm:block md:hidden" />
      <Ring size={base} className="hidden md:block" />
    </>
  );
}

function Ring({ size, className }) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 ${className}`}
      style={{
        width: size,
        height: size,
        marginLeft: -(size / 2),
        marginTop: -(size / 2),
      }}
    >
      <div className="w-full h-full border border-white/15 rounded-[40%]" />
    </div>
  );
}

/* ---------------------- ICONS ---------------------- */
function ResponsiveAngleIcon({ src, angle, baseRadius, isClickable = false }) {
  return (
    <>
      <AngleIcon
        src={src}
        angle={angle}
        radius={baseRadius * 0.45}
        size={35}
        className="block sm:hidden"
        isClickable={isClickable}
      />

      <AngleIcon
        src={src}
        angle={angle}
        radius={baseRadius * 0.7}
        size={45}
        className="hidden sm:block md:hidden"
        isClickable={isClickable}
      />

      <AngleIcon
        src={src}
        angle={angle}
        radius={baseRadius}
        size={76}
        className="hidden md:block"
        isClickable={isClickable}
      />
    </>
  );
}

function AngleIcon({ src, angle, radius, size, className, isClickable }) {
  const { x, y } = getPoint(angle, radius);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const normalSrc = `/assets/images/${src}.svg`;
  const hoverSrc = `/assets/images/h${src}.svg`;
  const finalSrc = hover || clicked ? hoverSrc : normalSrc;

  return (
    <div
      className={`absolute z-30 ${className}`}
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src={finalSrc}
        width={size}
        height={size}
        alt={src}
        className="cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => isClickable && setClicked(!clicked)}
      />
    </div>
  );
}
