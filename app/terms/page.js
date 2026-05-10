"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Terms of Service</h1>
            <p className="text-white/40 text-sm tracking-widest uppercase">Last Updated: May 2026</p>
          </div>

          <div className="space-y-8 text-white/70 font-light leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">2. Intellectual Property Rights</h2>
              <p>
                All images, text, and content on this website are the intellectual property of Hemant Tiwari Photography unless otherwise stated. Unauthorized use, reproduction, or distribution of these materials is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">3. Services</h2>
              <p>
                The services provided include but are not limited to professional photography, videography, and content creation. Specific terms for these services will be outlined in individual contracts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">4. User Conduct</h2>
              <p>
                Users agree to use the website for lawful purposes only and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">5. Limitation of Liability</h2>
              <p>
                Hemant Tiwari Photography will not be liable for any damages arising out of or in connection with the use of this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-medium text-white">6. Changes to Terms</h2>
              <p>
                We reserve the right to change these terms at any time. Your continued use of the site following any changes shall be deemed to be your acceptance of such change.
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
