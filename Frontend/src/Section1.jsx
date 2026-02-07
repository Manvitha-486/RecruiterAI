
import React from "react"
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-white">

      {/* BACKGROUND IMAGE - SCALING */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* NAVBAR - SLIDE DOWN */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-20"
      >
        <div className="flex items-center">
          {"RecruiterAI".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.5 + (index * 0.05), // Delayed after nav entry
                ease: "easeOut"
              }}
              className={`text-xl font-bold tracking-tight inline-block ${index >= 9 ? "text-purple-400" : "text-white"
                }`}
            >
              {char}
            </motion.span>
          ))}
        </div>

        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#">Features</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
        </div>

        <button className="border border-purple-400 px-6 py-2 rounded-full hover:bg-purple-500 transition">
          Get Started
        </button>
      </motion.nav>

      {/* CENTER CONTENT - STAGGERED FADE UP */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold"

        >
          Every Hire, Faster and Better
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-xl text-gray-300 text-base md:text-lg"
        >
          Stop losing great candidates to slow, manual hiring processes. Let AI
          handle the heavy lifting while you focus on building your team.
        </motion.p>
      </div>

      {/* TESTIMONIALS (Hidden on mobile/tablet to prevent overlap) */}

      {/* TOP LEFT */}
      {/* TOP LEFT */}
      <FloatingBubble
        position="top-[20%] left-[2%] md:left-[5%]"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
        text={`Sarah K.
Founder at TechStart.

Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.`}
      />

      {/* TOP RIGHT */}
      <FloatingBubble
        position="top-[20%] right-[2%] md:right-[5%]"
        side="right"
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
        text={`Rahul M.
Hiring Manager at GrowthCo.

Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.`}
      />

      {/* BOTTOM LEFT */}
      <FloatingBubble
        position="bottom-[20%] left-[2%] md:left-[5%]"
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
        text={`Priya S.
CEO at InnovateLabs

I'm the CEO, product lead AND now doing HR? There's zero time to read 200 resumes properly.`}
      />

      {/* BOTTOM RIGHT */}
      <FloatingBubble
        position="bottom-[20%] right-[2%] md:right-[5%]"
        side="right"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
        text={`Amit T.
Head of HR at ScaleUp

Our best candidate accepted another offer while we were still scheduling interviews.`}
      />

    </section>
  );
}
function FloatingBubble({ position, image, text, side = "left" }) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`absolute ${position} hidden lg:flex items-center`}
    >
      <div className={`relative flex items-center ${isLeft ? "" : "flex-row-reverse"}`}>

        {/* AVATAR */}
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10">
          <img src={image} className="w-full h-full object-cover" />
        </div>

        {/* SVG CONNECTOR */}
        <svg
          className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isLeft ? "left-14" : "right-14"
            }`}
          width="140"
          height="70"
        >
          {/* Gradient */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#A5D8FF" />
              <stop offset="100%" stopColor="#B197FC" />
            </linearGradient>
          </defs>

          {/* MAIN LINE */}
          <motion.path
            d={isLeft
              ? "M0 35 C 40 35, 70 0, 140 35"
              : "M140 35 C 100 35, 70 0, 0 35"}
            fill="transparent"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            animate={{
              strokeDashoffset: [0, -20]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear"
            }}
          />

          {/* FLOW DOT (data travelling) */}
          <motion.circle
            r="3"
            fill="#B197FC"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              offsetPath: `path('${isLeft
                ? "M0 35 C 40 35, 70 0, 140 35"
                : "M140 35 C 100 35, 70 0, 0 35"}')`
            }}
          />
        </svg>

        {/* MESSAGE BOX */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`max-w-xs border border-purple-400 rounded-xl p-4 text-sm text-gray-200 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.15)] ${isLeft ? "ml-28" : "mr-28"
            }`}
        >
          {text}
        </motion.div>
      </div>
    </motion.div>
  );
}
