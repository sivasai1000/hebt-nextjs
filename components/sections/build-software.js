"use client";

import SectionContainer from "@/components/common/section-container";
import Text from "@/components/common/text";
import Box from "@/components/common/box";

export default function BuildSoftware() {
  return (
    <div
      className=" !lg:m-4 
        relative w-full overflow-hidden
        rounded-b-[48px]
        pb-10
        bg-[#0D0705]
      "
    >
      <Box
        className="
          absolute inset-0
          bg-[linear-gradient(180deg,#B23F18_8.57%,rgba(76,27,10,0.2)_100%)]
          backdrop-blur-[10px]
          [mask-image:url('/assets/images/texture.svg')]
          mask-repeat-repeat
          mask-size-[auto]
          opacity-60
        "
      />
      <Box
        className="
          absolute inset-x-0 bottom-0 h-1/3
          bg-gradient-to-b from-transparent to-[#0D0705]
        "
      />
      <Box className="relative z-10 max-w-4xl mx-auto text-center px-4">

        {/* TITLE */}
        <Text
          as="h2"
          className="
            !pt-5 sm:!pt-5 md:!pt-5 lg:!pt-10
            !font-[var(--font-bricolage)]
            !font-semibold
            text-[32px] sm:text-[38px] md:text-[46px]
            leading-[110%]
            tracking-[-0.02em]
            bg-gradient-to-r from-[#FFFDF8] to-[#B2A38E]
            bg-clip-text text-transparent
            text-center
            mb-5
          "
        >
          Build Software at 10x Speed With AI Driven Precision
        </Text>

        {/* SUBTITLE */}
        <Text
          as="h6"
          className="
            text-white/70
            text-[16px] sm:text-[18px]
            leading-[30px]
            text-center
            mb-8
          "
        >
          Start your journey toward automated, scalable engineering today.
        </Text>

        {/* BUTTON ROW */}
        <Box
          className="
            flex flex-col sm:flex-row
            justify-center items-center
            gap-6
            mt-6
          "
        >

          {/* BUTTON 1 — Start Free Trial */}
          <Box
            as="button"
            className="
              w-full sm:w-auto
              px-10 py-4 rounded-[12px]
              bg-gradient-to-b from-[#CC3B1D] to-[#661D0E]
              font-[var(--font-bricolage)] font-semibold
              text-[16px] sm:text-[18px]
              leading-[28px]
              text-white shadow-lg
              hover:opacity-90 transition
            "
          >
            Start Free Trial
          </Box>

          {/* BUTTON 2 — Book a Demo */}
          <Box
            as="button"
            className="
              w-full sm:w-auto
              px-10 py-4 rounded-[12px]
              border border-[#CC3B1D]
              bg-[#240C08]
              font-[var(--font-bricolage)] font-semibold
              text-[16px] sm:text-[18px]
              leading-[28px]
              text-[#CC3B1D]
              hover:bg-[#2F120C] transition
            "
          >
            Book a Demo
          </Box>

        </Box>

      </Box>
    </div>
  );
}
