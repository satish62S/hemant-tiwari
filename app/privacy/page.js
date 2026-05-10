"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Privacy Policy</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase">Last Updated: May 2026</p>
          </div>

          <div className="space-y-8 text-white/70 font-light leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">1. Introduction</h2>
              <p>
                Welcome to Hemant Tiwari Photography. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">2. Data We Collect</h2>
              <p>
                I may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data includes first name, last name.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, browser type and version.</li>
                <li>Usage Data includes information about how you use our website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide services to you, to improve our website, and to contact you regarding your inquiries via WhatsApp or Email.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">5. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at: <br />
                <strong>Email:</strong> dontiwaridon@gmail.com <br />
                <strong>WhatsApp:</strong> +977 9768344799
              </p>
            </section>
          </div>

          <div className="pt-12">
            <Link href="/" className="text-white border-b border-white/20 pb-1 hover:border-white transition-colors uppercase tracking-widest text-xs">
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
