import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { zoomIn } from "../js/animations";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{
      padding: "100px 10%",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
      flexDirection: "row",
    }}>
      {/* Image on the left */}
      <AnimatedSection animation={zoomIn} delay={0.3}>
        <div style={{
          flex: "1 1 300px",
          display: "flex",
          justifyContent: "center"
        }}>
          <img
            src="/images/profile-2.jpg"
            alt="Christian Bagatua"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 20px rgba(0, 230, 255, 0.4)",
              border: "4px solid #00E6FF"
            }}
          />
        </div>
      </AnimatedSection>

      {/* Text on the right */}
      <AnimatedSection animation={zoomIn} delay={0.4}>
        <div style={{
          flex: "2 1 400px",
          textAlign: "left"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontFamily: "Orbitron, sans-serif",
            marginBottom: "20px",
            color: "#00E6FF"
          }}>
            About Me
          </h1>

          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Hi! I'm <strong>Christian G. Bagatua</strong>, a passionate and detail-oriented <strong>Computer Engineer</strong> based in Cebu City. 
            I currently work as a <strong>Quality Control Specialist at Proweaver Inc.</strong>, with experience in both software development and hardware prototyping. <br /><br />
            I specialize in web development using <strong>C#, ASP.NET Core MVC, HTML, CSS, JavaScript, PHP</strong> and enjoy building clean, user-friendly experiences. 
            I also love working with <strong>Arduino</strong> for fun prototypes and smart hardware solutions.
            <br /><br />
            <Link to="/contact" style={{ color: "#00E6FF", fontWeight: "bold", textDecoration: "underline" }}>
              Let’s connect
            </Link>{" "}
            and build something great together!
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
