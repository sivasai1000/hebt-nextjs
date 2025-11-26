import Image from "next/image";
import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";

export default function WhyTeamsChoose() {
  return (
    <SectionContainer id="solutions" sectionClassName="border-t-1 mt-8 border-[#12100F]">
      {/* TITLE */}
     <div className="relative flex justify-center mt-4">
       {/* ORANGE GLOW BACKGROUND */} 
       <div className="absolute w-full lg:[800px] h-[280px] -top-6 pointer-events-none"
        style={{ 
          background: "radial-gradient(ellipse, rgba(210,69,22,0.35) 0%, rgba(210,69,22,0.12) 60%, rgba(210,69,22,0) 100%)", 
          filter: "blur(90px)", opacity: 0.9, }} /> 
          <Text as="h2" className="text-center relative z-10"> 
            Why Engineering Teams{" "}
             <span className="bg-gradient-to-b from-[#4C1B0A] to-[#B23F18] bg-clip-text text-transparent">
               Choose HEBT AI </span> 
               </Text> 
               </div>

      {/* ROW 1 — BIG CARDS */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card
          img="/assets/images/89faster.png"
          title="Faster Development Cycles"
          desc="Accelerate your entire build lifecycle — from planning to deployment — with AI-powered automation."
          big
        />

        <Card
          img="/assets/images/99acuracy.png"
          title="Code Accuracy"
          desc="Enterprise-grade code quality designed to meet best practices and reduce production bugs."
          big
        />
      </div>

      {/* ROW 2 — SMALLER CARDS */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card
          img="/assets/images/chart.svg"
          title="Lower Engineering Cost"
          desc="Cut down repetitive engineering tasks and scale without growing your dev team."
          small
        />

        <Card
          img="/assets/images/ai.svg"
          title="24/7 AI Agents"
          desc="AI agents that continuously improve architecture, generate code, and optimize workflows."
          small
        />

        <Card
          img="/assets/images/scale.svg"
          title="Scale Your Team Instantly"
          desc="Scale instantly with senior developers, architects, & QA engineers — no hiring, no training."
          small
        />
      </div>
    </SectionContainer>
  );
}

/* CARD COMPONENT */
function Card({ img, title, desc, big, small }) {
  return (
    <div
      className="
        rounded-[20px]
        p-[1px]
        bg-[linear-gradient(237.53deg,rgba(49,49,49,0.3)_1.62%,rgba(255,168,140,0.12)_98.37%)]
      "
    >
      <div
        className={`
          relative
          bg-[#101010]
          rounded-[20px]
          overflow-hidden
          flex flex-col justify-end

          ${big ? "h-[400px] sm:h-[420px] md:h-[400px]" : ""}
          ${small ? "h-[476px]" : ""}
        `}
      >
        {/* TOP IMAGE */}
        <div
          className={`
            absolute top-0 left-0 right-0
            ${big ? "h-[240px] sm:h-[260px]" : ""}
            ${small ? "h-[300px]" : ""}
            mt-4
          `}
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-contain"
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#101010]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-6 mt-auto">
          <p className="text-white font-semibold text-[22px] sm:text-[24px] leading-[30px]">
            {title}
          </p>

          <p className="mt-3 text-white/60 text-[15px] sm:text-[16px] leading-[24px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

