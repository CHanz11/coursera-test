import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, rgba(13, 27, 42, 1) 3%, rgba(28, 56, 85, 1) 72%);
  padding: 10px 20px;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(1, 39, 39, 0.6);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;

  img {
    max-height: 50px;
    width: auto;
    display: block;
  }
`;

const Navigation = styled.nav`
  position: relative;
  z-index: 20;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(13, 27, 42, 0.98);
    padding: 20px;
    border-radius: 10px;
    display: ${({ open }) => (open ? "flex" : "none")};
    width: 200px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  }
`;

const NavItem = styled.li``;

const NavAnchor = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: #ffffff;
  padding: 5px 10px;
  border: 2px solid transparent;
  transition: 0.3s;

  &:hover {
  text-shadow:
    0 0 5px #00e6ff,
    0 0 10px #00e6ff,
    0 0 20px #00e6ff,
    0 0 40px #00e6ff;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  margin-left: 20px;
  z-index: 30;
  position: relative;
  width: 25px;
  height: 20px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    border-radius: 5px;
    transition: 0.4s ease;

    &:nth-child(1) {
      top: ${({ open }) => (open ? "9px" : "0")};
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      top: 9px;
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      top: ${({ open }) => (open ? "9px" : "18px")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(5px);
  opacity: ${({ active }) => (active ? "1" : "0")};
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 10;
`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Header>
        <Container>
          <Logo>
            <Link to="/" onClick={closeMenu}>
              <img src="/images/main-logo.png" alt="ChanDesigns Logo" />
            </Link>
          </Logo>
          <Navigation>
            <NavLinks open={menuOpen}>
              <NavItem><NavAnchor to="/" onClick={closeMenu}>Home</NavAnchor></NavItem>
              <NavItem><NavAnchor to="/about" onClick={closeMenu}>About Me</NavAnchor></NavItem>
              <NavItem><NavAnchor to="/projects" onClick={closeMenu}>Projects</NavAnchor></NavItem>
              <NavItem><NavAnchor to="/contact" onClick={closeMenu}>Contact Me</NavAnchor></NavItem>
            </NavLinks>
            <Hamburger open={menuOpen} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </Hamburger>
          </Navigation>
        </Container>
      </Header>
      <Overlay active={menuOpen} onClick={closeMenu} />
    </>
  );
}

export default Navbar;
