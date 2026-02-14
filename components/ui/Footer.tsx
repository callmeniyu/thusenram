"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Globe } from "lucide-react";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as any;

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full bg-black/80 backdrop-blur-sm border-t border-white/10 py-12 px-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Section */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-brand-yellow font-semibold text-lg flex items-center gap-2 justify-center md:justify-start">
              <MapPin className="h-5 w-5" /> Visit Us
            </h3>
            <div className="glass-panel p-6 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                C3-G-11, Block C3, Jalan Royal Lily 4,
                <br />
                Taman Royal Lily Cameron Highlands,
                <br />
                39000 Tanah Rata, Pahang
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-brand-yellow font-semibold text-lg flex items-center gap-2 justify-center md:justify-end">
              <span>Contact Us</span> <Phone className="h-5 w-5" />
            </h3>
            <div className="glass-panel p-6 rounded-xl space-y-3">
              <div className="space-y-2">
                <p className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                  05 4911960
                </p>
                <p className="text-gray-300 hover:text-white transition-colors cursor-pointer font-medium">
                  012 4843934
                </p>
              </div>
              <div className="pt-3 border-t border-gray-700">
                <div className="flex items-center gap-2 justify-center md:justify-end text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <Globe className="h-4 w-4" />
                  <span className="font-medium">www.thusenram.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Thusen Ram Hardware & Electrical. All
            rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
