"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/constants/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-2  mb-16 md:mb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light mb-12 tracking-tight">My Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"  >
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="interactive group block relative overflow-hidden bg-white/5 aspect-[4/5] rounded-md border border-white/10"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              
              {/* Info Bar (30% Height) */}
              <div className="absolute bottom-0 left-0 w-full h-[10%] bg-black/80 backdrop-blur-md flex flex-col justify-center p-6 text-white border-t border-white/10">
                <span className="text-[10px] tracking-[0.3em] uppercase mb-1 text-white font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-light tracking-tight truncate">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
