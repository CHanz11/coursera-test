import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e1e1e, #232323);  
  color: white;
  font-family: "Arial", sans-serif; 
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: bold;
  overflow: hidden;
`;

const ProfileImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  border: 4px solid white;
`;

const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
  };

function Hero(){
    return(
      <HeroContainer>
        <Title
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: "easeOut" }}   
        >
            Hello, I'm <span style={{ color: "#ffcc00" }}>Christian Bagatua</span>
        </Title>
        <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
        >
            Computer Engineer | Web Developer
        </motion.p>
        <ProfileImage
            src="images/profile.png"
            alt="Profile"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        />
      </HeroContainer>
    );
  }

  export default Hero;