import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

export default function Section5() {
  return (
    <section className="w-full bg-black text-white px-16 py-24 overflow-hidden perspective-1000">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-16"
      >
        <MessageSquareQuote className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-semibold tracking-wide">
          Testimonials
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <TiltCard
          delay={0}
          image="/person1.jpg"
          text="We used to spend hours screening resumes manually, and still missed strong candidates. RecruiterAI reduced our screening time drastically and ensured we only met high-quality applicants. It completely changed our hiring workflow."
          name="John Davis"
          role="Head of Talent, GrowthLabs"
        />
        <TiltCard
          delay={0.2}
          image="/images/ChatGPT Image Feb 6, 2026, 03_47_15 PM.png"
          text="As a startup founder, I don't have a dedicated HR team. RecruiterAI gave us a structured hiring process without adding complexity. We now hire faster and with much more confidence."
          name="Ananya Sharma"
          role="Founder & CEO, NextScale AI"
        />
        <TiltCard
          delay={0.4}
          image="/images/ChatGPT Image Feb 6, 2026, 03_57_39 PM.png"
          text="Scheduling interviews across multiple time zones was a nightmare for our remote team. RecruiterAI automated everything — from screening to calendar coordination — and helped us cut hiring time almost in half."
          name="Daniel Lee"
          role="CTO, CloudBridge Technologies"
        />
      </div>
    </section>
  );
}

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

function TiltCard({ image, text, name, role, delay }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-[480px] rounded-2xl bg-[#111] group overflow-hidden border border-white/10"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 block"
      >
        {/* IMAGE BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: `url('${image}')` }}
        />

        {/* DARK GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="mb-8"
          >
            <p className="text-gray-200 text-lg leading-relaxed font-light italic">
              "{text}"
            </p>
          </motion.div>

          <div className="flex justify-between items-end border-t border-white/20 pt-6">
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-[#A5D8FF] text-sm font-medium">{role}</p>
            </div>
            {/* DECORATIVE ELEMENT */}
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
