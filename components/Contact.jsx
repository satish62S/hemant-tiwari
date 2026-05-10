"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Side: Brand & Quote */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-12">
              <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/40 mb-4 font-medium">Get in Touch</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">Contact <br className="hidden md:block" /> Me</h1>
              <p className="text-lg md:text-xl text-white/60 font-light italic border-l-2 border-white/20 pl-6 max-w-md">
                "Photography is the story I fail to put into words."
              </p>
            </div>

            {/* Decorated Image */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/myself.jpeg"
                alt="Contact Hemant"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-sm tracking-widest uppercase font-bold">Hemant Tiwari</p>
                <p className="text-white/60 text-[10px] tracking-tighter">Professional Creator</p>
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-white/10 rounded-tl-3xl -z-10" />
          </motion.div>

          {/* Right Side: Form Component */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}
