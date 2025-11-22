"use client";

export default function HeroInput({
  value = "",
  onChange = () => {},
  onGenerate = () => {},
}) {
  return (
    <div
  className="
   max-w-[720px]

  mx-4                 /* mobile left + right margin */
  sm:mx-auto           /* center from tablet upward */
  sm:px-4 lg:px-4      /* keeps clean spacing around */

  mt-8 sm:mt-10

  h-[171px]
  rounded-[15px]
  border-[2px]
  p-4 sm:p-6 md:p-7
  bg-[#140E0D]
  flex flex-col justify-between
"

  style={{
    borderImageSource:
      "linear-gradient(149.04deg, #FFC676 1.72%, rgba(255,191,118,0) 48.87%), linear-gradient(0deg, rgba(253,253,253,0.05), rgba(253,253,253,0.05))",
    borderImageSlice: 1,
  }}
>


      {/* INPUT FIELD */}
      <input
        suppressHydrationWarning={true}        // ← prevents SSR mismatch
        autoComplete="off"                     // ← prevents autofill attributes
        spellCheck={false}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="A modern portfolio website with dark theme and contact form"
        className="
          w-full
          bg-transparent outline-none
          text-[#FFFCF78A]
          text-[16px]
          font-[300]
          font-['Geist_Mono']
          tracking-[-0.03em]
          leading-[100%]
        "
      />

      {/* BUTTONS ROW */}
      <div className="flex items-center justify-between mt-6">

        {/* PLUS BUTTON */}
        <button
          type="button"
          className="flex items-center justify-center"
        >
          <img
            src="/assets/images/input-plus.svg"
            alt="plus"
            className="w-10 h-10 object-contain opacity-70"
          />
        </button>

        {/* GENERATE BUTTON */}
        <button
          type="button"
          onClick={onGenerate}
          className="
            h-[40px]
            rounded-[12px]
            px-5
            font-['Manrope']
            font-medium text-[16px]
            bg-[#FFFFFF14]
            text-[#FFFFFF99]
            hover:bg-[#FFFFFF22]
            transition
          "
          
        >
          Generate
        </button>

      </div>
    </div>
  );
}
