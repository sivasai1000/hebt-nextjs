import { cn } from "@/lib/utils";

const baseStyles = {
  h1: `
    font-bricolage font-semibold
     text-[32px] sm:text-[32px] md:text-[72px] lg:text-[84px]
    leading-tight md:leading-[120%] tracking-[-0.02em]
    mb-4 sm:mb-6
    bg-gradient-to-l from-[#FFFDF8] to-[rgba(255,231,199,0.5)]
    bg-clip-text text-transparent
  `,

  h2: `
    font-bricolage font-semibold
    text-[26px] sm:text-[34px] md:text-[44px] lg:text-[54px]
    leading-[110%] tracking-[-0.02em]
    bg-gradient-to-l from-[#FFFDF8] to-[rgba(255,231,199,0.5)]
    bg-clip-text text-transparent
    text-center mx-auto mb-4
  `,

  h3: `
    font-bricolage font-semibold
    text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px]
    leading-[110%] tracking-[-0.02em]
    bg-gradient-to-b from-[#4C1B0A] to-[#B23F18]
    bg-clip-text text-transparent
    text-center mx-auto mb-4
  `,

  h4: `
    font-mono font-semibold
    text-[17px] sm:text-[17px] md:text-[24px] lg:text-[28px]
    leading-[110%] tracking-[-0.02em]
    text-[#CC3B1D] text-center mx-auto mb-4
  `,

  p: `
    font-bricolage font-normal
    text-[16px] sm:text-[14px] md:text-[16px] lg:text-[18px]
    leading-[150%] text-[#FFFFFFB2]
  `,

  h5: `
    font-bricolage
    text-[16px] sm:text-[14px] md:text-[14px] lg:text-[16px]
    leading-[22px] text-[#7A7B85]
  `,

  h6: `
    font-geist
    text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]
    text-[#FFFFFF99] font-normal
    lg:leading-[30px] md:leading-[24px] sm:leading-[24px]
  `,

  p_guiest: `
    font-geist
    text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]
    leading-[150%]
    max-w-[600px] mb-6 sm:mb-8
    text-[#FFFFFF94]
  `,

  number: `
    font-bricolage font-medium
    tracking-tight leading-[100%]
    text-[28px] sm:text-[56px] md:text-[64px] lg:text-[80px]
    text-transparent bg-gradient-to-b
    from-[rgba(120,120,120,0.18)]
    to-[rgba(120,120,120,0)]
    bg-clip-text
  `,

  span: `
    text-sm
  `,

  div: `
    text-base text-black
  `,
};

const tagMap = {
  p_guiest: "p",
  number: "span",
};

function Text({ as = "p", className, children, ...props }) {
  const Tag = tagMap[as] || as;

  return (
    <Tag {...props} className={cn(baseStyles[as] || "", className)}>
      {children}
    </Tag>
  );
}

export default Text;
