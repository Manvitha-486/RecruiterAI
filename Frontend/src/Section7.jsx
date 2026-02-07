import React from 'react';
import { motion } from "framer-motion";

export default function Section7() {

  return (
    <section className="relative w-full bg-[#000000] text-white py-15
     px-4 overflow-hidden ">


      {/* ================= PREMIUM GLOW BACKGROUND ================= */}

      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px]
        bg-[#D0BCFF]/10 left-1/2 -translate-x-1/2 top-[-200px]"
      />

      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px]
        bg-[#A5D8FF]/10 right-[-200px] bottom-[-200px]"
      />

      {/* ================= CONTENT ================= */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >

        {/* HEADLINE */}

        <motion.h2
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl font-bold mb-6"
        >
          Ready to{" "}
          <span className="bg-gradient-to-r from-[#A5D8FF] via-[#D0BCFF] to-[#B197FC] text-transparent bg-clip-text">
            Hire Better, Faster?
          </span>
        </motion.h2>

        {/* SUBHEADLINE */}

        <p className="text-lg text-[#737373] mb-14">
          Join 500+ companies hiring smarter with AI
        </p>

        {/* ================= BUTTONS ================= */}

        <div className="flex justify-center gap-8">

          {/* PRIMARY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              relative px-10 py-4 rounded-full font-semibold
              bg-[#3B82F6]
              shadow-lg
              overflow-hidden
              transition
            "
          >
            {/* glow sweep */}
            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition
              bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />

            Start Free Trial
          </motion.button>

          {/* SECONDARY BUTTON */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-10 py-4 rounded-full font-semibold
              border border-[#B197FC]
              text-white
              hover:bg-[#404040]
              transition
            "
          >
            Schedule Demo
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}
