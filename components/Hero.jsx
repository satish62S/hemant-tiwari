"use client";

import Image from "next/image";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  "/images/1.JPG",
  "/images/2.JPG",
  "/images/3.JPG",
  "/images/4.JPG",
  "/images/5.JPG",
];

export default function Hero() {
  const [upperIndex, setUpperIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  // Upper section auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setUpperIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Lower section auto-sliding animation
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <section className="container mx-auto px-6 pt-24 md:pt-32 pb-12 md:pb-24">
      {/* Upper Section: Flipped Layout (Content Left, Image Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
        
        {/* Upper Left: Content Area */}
        <div className="lg:col-span-5 flex flex-col justify-center p-8 md:p-12 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-medium"
          >
            Hemant Tiwari
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8"
          >
            Let my <br />
            <span className="font-bold italic">Photos Speaks.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 font-light leading-relaxed max-w-md mx-auto lg:mx-0"
          >
you know what pictues speaks louder than words.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
             <a href="#gallery" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest text-white border-b border-white/20 pb-2 hover:border-white transition-all group">
                View Portfolio
                <span className="group-hover:translate-x-2 transition-transform">→</span>
             </a>
          </motion.div>
        </div>

        {/* Upper Right: Restricted Sliding Photos Div */}
        <div className="lg:col-span-7 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={upperIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[upperIndex]}
                alt="Featured Photography"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-8 right-8 z-10">
             <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.3em] text-white border border-white/20">
                Live Selection
             </span>
          </div>
        </div>
      </div>

      {/* Lower Section: Auto-Sliding Editor's Choice */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
         <div className="flex items-center justify-between mb-8 px-2">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">Best Choice</h3>
            <div className="h-[1px] flex-grow mx-8 bg-white/10" />
         </div>
         
         <motion.div 
           animate={controls}
           className="flex gap-6 whitespace-nowrap"
           style={{ width: "fit-content" }}
         >
            {/* Duplicate images to create seamless loop */}
            {[...heroImages, ...heroImages].map((img, i) => (
               <motion.div 
                 key={i}
                 whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
                 transition={{ duration: 0.4 }}
                 className="flex-shrink-0 w-[280px] md:w-[350px] aspect-[16/10] relative rounded-2xl overflow-hidden shadow-xl border border-white/10 group cursor-pointer"
               >
                  <Image
                    src={img}
                    alt={`Best of ${i}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                     <span className="text-[10px] uppercase tracking-widest text-white font-medium">{(i % heroImages.length) + 1}</span>
                  </div> */}
               </motion.div>
            ))}
         </motion.div>
      </div>
    </section>
  );
}
