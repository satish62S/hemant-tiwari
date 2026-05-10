"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { label: "Work", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-40 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter interactive">
          HT.
        </Link>

        <nav className="flex items-center space-x-4 md:space-x-8 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] md:text-sm font-light tracking-widest uppercase hover:opacity-60 transition-opacity interactive text-white whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <a 
            href="https://wa.me/9768344799?text=hello%20hemant%20tiwari%20i%20want%20to%20book%20a%20photoshoot"
            target=" "
            rel="noopener noreferrer"
            className="interactive px-4 py-2 text-xs md:text-sm bg-white text-black rounded-full hover:bg-transparent hover:text-white hover:scale-105 transition-all border border-white whitespace-nowrap"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
