import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../js/animations";
import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm"; // <--- import it

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.4, ease: "easeIn" } },
};

function Contact() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ padding: "100px 10%", color: "white", fontFamily: "Poppins, sans-serif" }}
    >
      <AnimatedSection animation={slideUp} delay={0.2}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#00E6FF" }}>
          Contact Me
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "50px" }}>
          Let's work together! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
      </AnimatedSection>

      {/* Contact Form component */}
      <ContactForm />
    </motion.div>
  );
}

export default Contact;
