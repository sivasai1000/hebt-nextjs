"use client";

import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";
import Image from "next/image";

// icons 
import icon1 from "@/public/assets/images/cloud.svg";
import icon2 from "@/public/assets/images/architecture.svg";
import icon3 from "@/public/assets/images/code.svg";
import icon4 from "@/public/assets/images/automated.svg";
import icon5 from "@/public/assets/images/deployment.svg";
import icon6 from "@/public/assets/images/maintainence.svg";

const cards = [
  {
    id: 1,
    title: "Requirement Understanding",
    desc: "Your raw idea, business document, or feature request is converted into structured technical requirements.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Architecture Generation",
    desc: "AI generates scalable, modular system architecture following industry engineering standards.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Code Generation",
    desc: "Backend, frontend, API, database models — all written in production-ready, clean, maintainable code.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Automated Testing",
    desc: "AI creates and validates unit tests, integration tests, and regression suites automatically.",
    icon: icon4,
  },
  {
    id: 5,
    title: "Deployment Automation",
    desc: "CI/CD pipelines and cloud deployments for AWS, Azure, and GCP with complete DevOps automation.",
    icon: icon5,
  },
  {
    id: 6,
    title: "Maintenance & enhancement",
    desc: "Smart monitoring, bug fixes, performance boosts, and proactive security updates powered by intelligent AI.",
    icon: icon6,
  },
];

export default function TransformSDLC() {
  return (
    <SectionContainer id="platform">
      <div className="md:flex md:items-start md:gap-16 relative">

        {/* LEFT SIDE — Sticky only on desktop */}
        <div
  className="
    w-full
    md:w-4/12 
    md:sticky 
    md:top-24 
    z-20 
    pb-4
  "
>
  <Text
    as="h2"
    className="text-left !mb-2 "
  >
    How HEBT AI Transforms{" "}
    <span className="bg-gradient-to-b from-[#4C1B0A] to-[#B23F18] bg-clip-text text-transparent">
      your SDLC
    </span>
  </Text>
</div>


        {/* RIGHT SIDE — Cards */}
        <div className="md:flex-1 mt-2 md:mt-0 flex flex-col gap-5">

          {cards.map((c, idx) => (
            <div
              key={c.id}
              className="
                w-full
                bg-[#18191B]
                border border-white/10
                rounded-[18px]
                p-5
                shadow-[0_0_12px_rgba(0,0,0,0.25)]
                
                grid
                grid-cols-[1fr_80px]  /* LEFT CONTENT | RIGHT NUMBER */
                gap-x-4
              "
              style={{ maxWidth: "790px" }}
            >

              {/* LEFT COLUMN — Icon + Title + Description */}
              <div className="flex flex-col gap-3">

                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <Image src={c.icon} width={48} height={48} alt={c.title} />

                  <Text
                    as="h4"
                    className="
                      !text-left
                      !m-0
                      !leading-[1.1]
                      !font-semibold
                      text-[#CC3B1D]
                    "
                  >
                    {c.title}
                  </Text>
                </div>

                {/* Description */}
                <Text
                  as="p"
                  className="
                    !text-left 
                    text-white/70 
                    text-[15px]
                    leading-[1.4]
                  "
                >
                  {c.desc}
                </Text>

              </div>

              {/* RIGHT COLUMN — Number */}
              <div className="flex items-start justify-end">
                <Text as="number">
                  {String(idx + 1).padStart(2, "0")}
                </Text>
              </div>

            </div>
          ))}

        </div>
      </div>
    </SectionContainer>
  );
}
