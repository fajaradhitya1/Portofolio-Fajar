"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

export default function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <p className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.05,
            duration: 0.3,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
