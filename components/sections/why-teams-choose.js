import Image from "next/image";
import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";

export default function WhyTeamsChoose() {
  return (
    <SectionContainer id="solutions">
      {/* TITLE */}
      <div className="text-center">
  <Text
    as="h2"
    
  >
    Why Engineering Teams{" "}
    <span className="bg-gradient-to-b from-[#4C1B0A] to-[#B23F18] bg-clip-text text-transparent">
      Choose HEBT AI
    </span>
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

      {/* ROW 2 — SMALLER 300PX IMAGES */}
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
function Card({ img, title, desc }) {
  return (
    <div
      className="
      relative
      h-[476px]
      bg-[#101010]
      rounded-[20px]
      overflow-hidden
      border border-transparent
      [border-image:linear-gradient(237.53deg,rgba(49,49,49,0.3)_1.62%,rgba(255,168,140,0.12)_98.37%)_1]
      flex flex-col justify-end
    "
    >

      {/* TOP IMAGE - FULL WIDTH - FIXED HEIGHT */}
      <div className="absolute top-0 left-0 right-0  h-[300px] mt-4 ">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain "
        />

        {/* FADE TO BLACK LIKE YOUR SCREENSHOT */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-[#101010]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">
        <p className="text-white font-semibold text-[24px] leading-[30px]">
          {title}
        </p>

        <p className="mt-3 text-white/60 text-[16px] leading-[26px]">
          {desc}
        </p>
      </div>
    </div>
  );
}

