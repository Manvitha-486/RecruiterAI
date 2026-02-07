import React, { useState } from 'react';
import { HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Section6() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does AI screening work?",
      answer:
        "RecruiterAI uses advanced machine learning to analyze resumes, identify skill patterns, and rank candidates based on real hiring signals. Instead of manually reviewing hundreds of applications, you instantly see the most relevant talent prioritized for your role."
    },
    {
      question: "Does RecruiterAI integrate with our existing ATS?",
      answer:
        "Yes — RecruiterAI connects seamlessly with modern ATS platforms. Sync pipelines, automate candidate workflows, and enhance your existing hiring system without changing your current processes."
    },
    {
      question: "What's the pricing structure?",
      answer:
        "Pricing scales with your hiring needs. Whether you are hiring occasionally or continuously, RecruiterAI provides flexible plans focused on delivering measurable hiring efficiency."
    },
    {
      question: "How long does setup take?",
      answer:
        "Setup typically takes less than a day. Connect your tools, define hiring criteria, and the AI begins screening and organizing candidates immediately."
    },
    {
      question: "Is candidate data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption, secure infrastructure, and strict access controls to ensure candidate data remains fully protected and compliant."
    }
  ];

  return (
    <section className="w-full bg-[#000000] text-white px-6 md:px-16 py-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="w-8 h-8 text-[#B197FC]" />
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">FAQ</h2>
        </div>
      </motion.div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto flex flex-col gap-4">

        {faqs.map((faq, index) => {

          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                layout: { duration: 0.4, ease: "easeInOut" }
              }}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
              className={`overflow-hidden cursor-default transition-colors duration-300
                ${isOpen ? "bg-[#505050]" : "bg-[#404040]"}
              `}
              style={{
                borderRadius: "12px",
                borderLeft: isOpen ? "4px solid #B197FC" : "4px solid transparent"
              }}
            >

              {/* QUESTION BAR */}
              <div
                className="w-full px-8 py-6 flex justify-between items-center text-lg font-medium"
              >
                {faq.question}
              </div>

              {/* ANSWER WITH SMOOTH ANIMATION */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      type: "tween",
                      duration: 0.4,
                      ease: "easeInOut"
                    }}
                    className="px-8 pb-6 text-[#E0E0E0] text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

      {/* FOOTER TEXT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-20 text-lg opacity-80"
      >
        <p>Have any Questions?</p>
        <p className="mt-2">
          Write to us at →{" "}
          <span className="font-semibold text-[#B197FC] hover:underline cursor-pointer">
            recruiterAI@gmail.com
          </span>
        </p>
      </motion.div>

    </section>
  );
}
