"use client";

import Box from "@/components/common/box";
import Text from "@/components/common/text";

export default function Footer() {
  return (
    <footer
      className="
        p-5 md:p-5 lg:p-4
        mt-20 
        w-full 
        relative
      "
    >
      <div className="w-full bg-[#0F0F0E] rounded-[20px] overflow-hidden">
        <div
          className="
            w-full
            mx-auto 
            px-6 sm:px-10 lg:px-8
            py-10 md:py-12 lg:py-14 
            flex flex-col 
            gap-14 lg:gap-10
            relative
          "
        >
          {/* TOP ROW - 5 COLUMNS */}
          <Box
            className="
              grid 
              grid-cols-1 
              lg:grid-cols-[420px_1fr] 
              gap-16 
              items-start
              relative z-10
            "
          >
            {/* COLUMN 1 - LOGO + DESCRIPTION */}
            <Box className="max-w-sm">
              <Box className="flex items-center gap-3 mb-4">
                <img src="/assets/images/hebtai.svg" alt="HEBT AI" />
              </Box>

              <Text
                as="h5"
                className="text-[#FFFFFF94] text-[14px] mb-6 leading-[150%]"
              >
                HEBT AI is a next-generation SDLC automation platform that helps
                teams build, test, and deploy applications at lightning speed
                with enterprise-grade precision.
              </Text>

              {/* Social Icons */}
              <Box className="flex gap-4">
                <img src="/assets/images/twitter.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
                <img src="/assets/images/instagram.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
                <img src="/assets/images/linkedin.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
                <img src="/assets/images/youtube.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
              </Box>
            </Box>

            {/* COLUMNS 2–5 - EQUAL WIDTH GRID */}
           <Box
  className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    lg:grid-cols-4 
    lg:gap-17 gap-10
    auto-cols-fr
    min-w-[180px]
    place-items-start
    text-white
  "
>
  {/* Platform */}
  <Box>
    <h5 className="text-white font-semibold mb-4">Platform</h5>
    <ul className="space-y-2 text-[#FFFFFF94] text-sm">
      <li>AI Code Generation</li>
      <li>SDLC Automation</li>
      <li>Testing & QA</li>
      <li>Deployment & CI/CD</li>
      <li>Maintenance & Support</li>
    </ul>
  </Box>

  {/* Solutions */}
  <Box>
    <h5 className="text-white font-semibold mb-4">Solutions</h5>
    <ul className="space-y-2 text-white/70 text-sm whitespace-nowrap">
      <li>Small & Medium Enterprises</li>
      <li>Enterprise Solutions</li>
      <li>Startup Accelerator</li>
      <li>Agency Partners</li>
      <li>Custom Development</li>
    </ul>
  </Box>

  {/* Resources */}
  <Box>
    <h5 className="text-white font-semibold mb-4">Resources</h5>
    <ul className="space-y-2 text-white/70 text-sm">
      <li>Documentation</li>
      <li>API Reference</li>
      <li>Case Studies</li>
      <li>Developer Blog</li>
      <li>Community Forum</li>
    </ul>
  </Box>

  {/* Explore */}
  <Box>
    <h5 className="text-white font-semibold mb-4">Explore</h5>
    <ul className="space-y-2 text-white/70 text-sm">
      <li>About HEBT AI</li>
      <li>Careers</li>
      <li>Contact Us</li>
      <li>Privacy Policy</li>
      <li>Terms of Service</li>
    </ul>
  </Box>
</Box>

          </Box>

          {/* MIDDLE IMAGE */}
          <div className="text-center ">
            <img
              src="/assets/images/footerhebt.svg"
              alt="hebt"
              className="mx-auto"
              style={{
                width: "763px",
                height: "200px",
                opacity: 1,
              }}
            />
          </div>

          {/* BOTTOM ROW */}
          <Box
            className="
              flex flex-col sm:flex-row 
              justify-between items-center
              gap-6
              
            "
          >
            <span className="text-white/60 text-sm">
              © 2025 HEBT AI. All Rights Reserved.
            </span>

            <Box className="flex gap-6 text-white/60 text-sm">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </Box>
          </Box>
        </div>
      </div>
    </footer>
  );
}
