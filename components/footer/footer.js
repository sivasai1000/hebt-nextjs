"use client";

import SectionContainer from "@/components/common/section-container";
import Box from "@/components/common/box";
import Text from "@/components/common/text";

export default function Footer() {
  return (
    <footer className="mt-20">
      <SectionContainer
        sectionClassName="
          bg-[#0F0F0E]
          rounded-[20px]
          p-10 md:p-12 lg:p-14
          flex flex-col gap-16
          relative overflow-hidden
        "
      >
        {/* Blurred Big Footer Text */}
        

        {/* TOP ROW — Logo + Description + Social Icons */}
        <Box className="relative z-10 flex flex-col sm:flex-row sm:items-start gap-10 sm:gap-16">
          {/* Logo & Description */}
          <Box className="flex-1 max-w-sm">
            <Box className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/hebtai.svg"
                alt="HEBT AI"
                
              />
              
            </Box>

            <Text
              as="h5"
              className="!text-[#FFFFFF94]  text-[14px] mb-6 max-w-xl leading-[150%] justify-content"
            >
              HEBT AI is a next generation SDLC automation platform that helps
              teams build, test, and deploy applications at lightning speed with
              enterprise-grade precision.
            </Text>

            {/* Social Icons */}
            <Box className="flex gap-4">
              <img src="/assets/images/twitter.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
              <img src="/assets/images/instagram.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
              <img src="/assets/images/linkedin.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
              <img src="/assets/images/youtube.svg" className="w-6 h-6 opacity-70 hover:opacity-100 transition" />
            </Box>
          </Box>

          {/* Footer Columns */}
          <Box
            className="
              flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
              gap-10 text-white relative z-10
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
              <ul className="space-y-2 text-white/70 text-sm">
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
        <Box className="text-center lg:mt-4 py-8">
  <img 
    src="/assets/images/footerhebt.svg"  
    alt="hebt" 
    className="mx-auto"
  />
</Box>


        {/* BOTTOM ROW */}
        <Box
          className="
            relative z-10 pt-8
            flex flex-col sm:flex-row justify-between items-center
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

      </SectionContainer>
    </footer>
  );
}
