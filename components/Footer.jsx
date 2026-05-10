"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: <Instagram size={20} />, href: "https://www.instagram.com/storyby_hemantt/" },
    { name: "Facebook", icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61578154348886" },
    { name: "WhatsApp", icon: <MessageCircle size={20} />, href: "https://wa.me/9778044451" },
    { name: "TikTok", icon: <span className="text-sm font-bold">TT</span>, href: "https://tiktok.com" },
  ];

  return (
    <footer id="footer" className="py-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo and About */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              HT.
            </Link>
            <p className="text-brand-light/60 font-light leading-relaxed max-w-xs">
              Hemant Tiwari Photography — Capturing life's cinematic moments. Professional creator available for global projects.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">Contact</h4>
            <div className="space-y-6">
              <a 
                href="mailto:dontiwaridon@gmail.com" 
                className="group flex items-center space-x-3 text-xl font-light hover:text-white/60 transition-colors interactive"
              >
                <Mail size={18} className="text-white/40" />
                <span>dontiwaridon@gmail.com</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="tel:+9779768344799" 
                className="group flex items-center space-x-3 text-xl font-light hover:text-white/60 transition-colors interactive"
              >
                <Phone size={18} className="text-white/40" />
                <span>+977 9768344799</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">Socials</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-brand-light/60 hover:text-white transition-colors interactive group"
                >
                  <span className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                    {social.icon}
                  </span>
                  <span className="font-light">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-white/20 uppercase font-medium">
          <p>© {currentYear} Hemant Tiwari Photography. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
