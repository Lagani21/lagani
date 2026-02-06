"use client";

import { motion } from "framer-motion";

export default function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-12 sm:py-16 px-4 sm:px-6 ${className}`}>
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl font-medium text-white mb-6 text-left">
          {title}
        </h2>
        <div className="text-white text-base sm:text-lg leading-relaxed font-light text-left">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
