import React from "react";
import { motion } from "framer-motion";

const platforms = [
  { name: "LinkedIn", color: "text-[#0a66c2]", font: "font-sans font-bold" },
  { name: "Naukri.com", color: "text-white", font: "font-serif italic font-bold" },
  { name: "Indeed", color: "text-[#2164f4]", font: "font-sans font-bold tracking-tight" },
  { name: "AngelList", color: "text-white", font: "font-mono font-bold" },
  { name: "Instahyre", color: "text-[#18A558]", font: "font-sans font-bold tracking-wide" },
  { name: "Wellfound", color: "text-white", font: "font-sans font-bold" },
  { name: "IIMJobs", color: "text-[#F15A29]", font: "font-sans font-extrabold" },
  { name: "Glassdoor", color: "text-[#0caa41]", font: "font-sans font-bold tracking-tighter" },
  { name: "Monster", color: "text-[#9f7aea]", font: "font-serif font-black" }, // Lighter purple for dark mode
  { name: "Cutshort", color: "text-[#22c55e]", font: "font-sans font-bold" },
];

export default function HireAnywhere() {
  return (
    <section className="bg-black text-white py-24 overflow-hidden border-t border-white/10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Post Once, Reach Everywhere
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          RecruiterAI automatically syncs your job postings across all major platforms.
        </p>
      </motion.div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden mask-gradient">

        {/* Shadow Masks for Fade Effect (Dark) */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max">
          <LogoTrack items={platforms} />
          <LogoTrack items={platforms} />
        </div>

      </div>
    </section>
  );
}

function LogoTrack({ items }) {
  return (
    <motion.div
      className="flex gap-16 px-8 items-center"
      animate={{ x: "-100%" }}
      transition={{
        duration: 30, // Slow scroll
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {items.map((platform, idx) => (
        <div
          key={idx}
          className="
            relative group flex items-center justify-center 
            px-4 py-2 min-w-[160px] cursor-pointer
            grayscale opacity-50
            hover:grayscale-0 hover:opacity-100 placeholder-logo-transition
            transition-all duration-300 transform hover:scale-110
          "
        >
          {/* Fallback Styled Text Logo */}
          <span className={`text-3xl whitespace-nowrap ${platform.font} ${platform.color} drop-shadow-sm`}>
            {platform.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
