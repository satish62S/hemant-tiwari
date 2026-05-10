"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const skills = [
  { name: "Photoshop", icon: "logos:adobe-photoshop", color: "#31A8FF" },
  { name: "Premiere Pro", icon: "logos:adobe-premiere", color: "#9999FF" },
  { name: "Lightroom", icon: "logos:adobe-lightroom", color: "#31A8FF" },
  { name: "After Effects", icon: "logos:adobe-after-effects", color: "#CF96FD" },
  { name: "Illustrator", icon: "logos:adobe-illustrator", color: "#FF9A00" },
  // { name: "Canva", icon: "logos:canva-icon", color: "#00C4CC" },
  // { name: "DaVinci Resolve", icon: "logos:davinci-resolve", color: "#2E86C1" },
  { name: "Figma", icon: "logos:figma", color: "#F24E1E" },
  // { name: "Capture One", icon: "simple-icons:captureone", color: "#FFFFFF" },
  // { name: "Audition", icon: "logos:adobe-audition", color: "#00E5FF" },
  // { name: "Bridge", icon: "logos:adobe-bridge", color: "#FF9A00" },
  // { name: "Express", icon: "logos:adobe-express", color: "#EB1000" },
  // { name: "InDesign", icon: "logos:adobe-indesign", color: "#FF3366" },
  // { name: "CapCut", icon: "simple-icons:capcut", color: "#000000" },
  // { name: "Snapseed", icon: "simple-icons:snapseed", color: "#4285F4" },
  // { name: "VSCO", icon: "simple-icons:vsco", color: "#000000" },
  // { name: "Adobe Stock", icon: "simple-icons:adobestock", color: "#ED1C24" },
  // { name: "Midjourney", icon: "simple-icons:midjourney", color: "#FFFFFF" },
];

export default function Skills() {
  return (
    <section className="py-24 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-white mb-4 font-medium">My Toolkit</h2>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight">I can handle</h1>
        </div>

        {/* The Enhanced Chrome Filter */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="colored-metallic" x="-50%" y="-50%" width="200%" height="200%">
              {/* Subtle blur to create the 3D 'bump' edge */}
              <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur" />
              <feSpecularLighting 
                in="blur" 
                surfaceScale="5" 
                specularConstant="1.2" 
                specularExponent="35" 
                lightingColor="#ffffff" 
                result="spec"
              >
                <fePointLight x="-5000" y="-10000" z="10000" />
              </feSpecularLighting>
              
              <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut" />
              
              {/* This layers the white light OVER the original brand colors */}
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
            </filter>
          </defs>
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15,
                rotateX: -10,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative group cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div 
                className="aspect-square rounded-2xl p-6 flex flex-col items-center justify-center border border-white/5 bg-gradient-to-b from-zinc-900 to-black backdrop-blur-md transition-all duration-500 group-hover:border-white/20"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Logo Box */}
                <div 
                  className="w-16 h-16 flex items-center justify-center relative"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <Icon 
                    icon={skill.icon} 
                    className="w-12 h-12 transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      // Apply the metallic filter + a sharp drop shadow for clarity
                      filter: "url(#colored-metallic) drop-shadow(0 10px 15px rgba(0,0,0,1))",
                    }}
                  />
                  
                  {/* Brand Glow for extra visibility */}
                  <div 
                    className="absolute inset-0 blur-[30px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <span className="mt-8 text-[9px] uppercase tracking-[0.5em] text-white font-bold group-hover:text-white transition-all duration-500">
                  {skill.name}
                </span>

                {/* Light Sweep Animation */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                   <motion.div 
                    animate={{ x: ["-150%", "300%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[40deg]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}