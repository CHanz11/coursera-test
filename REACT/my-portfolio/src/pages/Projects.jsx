import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import { slideUp } from "../js/animations";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const dummyProjects = [
    {
      title: "Project One",
      image: "/images/about-2.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project Two",
      image: "/images/about.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "Project Three",
      image: "/images/contact.jpg",
      link: "https://example.com/project3",
    },
    {
      title: "Project Four",
      image: "/images/project-2.jpg",
      link: "https://example.com/project4",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "100px 10%", color: "white", fontFamily: "Poppins, sans-serif" }}>
      <AnimatedSection animation={slideUp} delay={0.2}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#00E6FF" }}>
          My Projects
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "50px" }}>
          A collection of websites and applications I've worked on—from frontend to backend, and everything in between.
        </p>
      </AnimatedSection>

      <AnimatedSection animation={slideUp} delay={0.4}>
        <Slider {...sliderSettings}>
          {dummyProjects.map((project, index) => (
            <div key={index} style={{ padding: "0 10px" }}>
              <div
                style={{
                  background: "#1a1a1a",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ padding: "20px" }}>
                  <h3 style={{ color: "#00E6FF", marginBottom: "10px" }}>{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "10px",
                      padding: "10px 20px",
                      backgroundColor: "#00E6FF",
                      color: "#000",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "background 0.3s",
                    }}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </AnimatedSection>
    </div>
  );
}

export default Projects;