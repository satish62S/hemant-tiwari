"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "9779768344799";
    const text = `Hello Hemant!\n\nName: ${formData.name}\nContact: ${formData.contact}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 p-8 md:p-16 items-center rounded-[2.5rem] border border-white/10 backdrop-blur-2xl shadow-2xl mt-0 lg:mt-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white ml-1">Your Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Write your name" 
            required
            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/20"
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white ml-1">Contact Info (Email/Phone)</label>
          <input 
            type="text" 
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Write your email or phone" 
            required
            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 placeholder:text-white/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-white ml-1">Message</label>
          <textarea 
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..." 
            required
            className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-white transition-all duration-300 resize-none placeholder:text-white/20"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-transparent hover:text-white border border-white transition-all duration-500"
        >
          Send Message via WhatsApp
        </button>
      </form>
      <h3 className="text-center mt-8 text-white/60 font-light italic border-l-2 border-white/20 pl-6 max-w-md">Let us work together to create magic.</h3>
    </motion.div>
  );
}
