"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Machine Learning",
    items: ["PyTorch", "Hugging Face", "TensorFlow", "Scikit-learn"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Flask", "Django"],
  },
  {
    label: "Data & APIs",
    items: ["MongoDB", "PostgreSQL", "MySQL", "GraphQL"],
  },
  {
    label: "Frontend & Mobile",
    items: ["Next.js", "React", "Tailwind", "React Native", "Swift"],
  },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6">
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-xl sm:text-2xl font-medium text-white mb-6 text-left">
          Skills
        </h2>
        <div className="space-y-5 text-white text-base sm:text-lg leading-relaxed font-light text-left">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <span className="text-white text-sm font-medium">
                {group.label}
              </span>
              <p className="mt-1 text-white">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
