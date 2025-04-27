import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedSection({ children, animation, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8, delay }}
      variants={animation}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
