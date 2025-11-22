"use client";

import Box from "@/components/common/box";
import Text from "@/components/common/text";

export default function Footer() {
  return (
    <footer
      className="
        mt-20 
        w-screen 
        relative left-1/2 right-1/2 
        -ml-[50vw] -mr-[50vw]
      "
    >
      <div className="w-full bg-[#0F0F0E] rounded-[20px] overflow-hidden">
        <div
          className="
            w-full
            mx-auto 
            px-6 sm:px-10 lg:px-20   /* RESPONSIVE PADDING */
            py-10 md:py-12 lg:py-14 
            flex flex-col 
            gap-14 lg:gap-16
            relative
          "
        >
          {/* TOP ROW */}
          <Box
            className="
              grid 
              grid-cols-1 
              lg:grid-cols-[350px_1fr]
              gap-12 lg:gap-16
              relative z-10
            "
          >
            {/* LOGO + DESCRIPTION */}
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

            {/* FOOTER COLUMNS */}
            <Box
              className="
                grid 
                grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
                gap-10 
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

          {/* MIDDLE IMAGE */}
          <Box className="text-center pt-6">
            <img
              src="/assets/images/footerhebt.svg"
              alt="hebt"
              className="mx-auto w-[180px] sm:w-[220px]"
            />
          </Box>

          {/* BOTTOM ROW */}
          <Box
            className="
              flex flex-col sm:flex-row 
              justify-between items-center
              gap-6
              pt-6
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
