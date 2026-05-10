"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const roles = [
  "Photographer",
  "Videographer",
  "Graphic Designer",
  "Vlogger",
  "Content Creator",
];

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setSpeed(50);
      } else {
        setDisplayedText((prev) => currentRole.slice(0, prev.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, speed]);

  return (
    <section id="about" className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4 font-medium">
              About Me
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 lg:mb-6 leading-tight">
              Hello, I am <span className="font-bold text-white">Hemant Tiwari</span>
            </h1>
            
            <div className="h-10 md:h-12 mb-6 md:mb-8">
              <p className="text-xl md:text-2xl text-white/80 font-light italic">
                I am a{" "}
                <span className="text-white font-medium border-r-2 border-white pr-1 animate-pulse">
                  {displayedText}
                </span>
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>
                With over a decade of experience behind the lens and at the drafting table, I specialize in capturing the raw beauty of human emotion and the breathtaking grandeur of the natural world. My work is a blend of technical precision and artistic intuition, aimed at telling stories that resonate deeply and endure.
              </p>
              <p>
                Whether it's a cinematic wedding film, a high-impact brand campaign, or an intimate portrait session, my goal is always the same: to reveal the extraordinary within the ordinary. I believe every project is an opportunity to push creative boundaries and deliver visual excellence that speaks louder than words.
              </p>
            </div>

            <motion.div 
              className="mt-8 md:mt-10 flex justify-center lg:justify-start gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white">100+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">Images</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white">3+ year</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">with camera.</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white">100%</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/40">Passion</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-10" />
            
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/myself.jpeg"
                alt="Hemant Tiwari - Professional Photographer & Content Creator"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-2xl" />
            </div>
            
            {/* Minimalist floating tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-brand-dark text-white p-6 rounded-xl shadow-xl hidden md:block"
            >
              <p className="text-sm font-light tracking-widest uppercase">Worldwide photographer</p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-tighter"></p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
