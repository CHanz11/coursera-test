import React from "react";

function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(90deg, rgba(13, 27, 42, 1) 3%, rgba(28, 56, 85, 1) 72%)",
      padding: "30px 10%",
      zIndex: 1000,
      boxShadow: "0 0 20px rgba(1, 39, 39, 0.6)",
      fontFamily: "Poppins, sans-serif",
      fontSize: "0.9rem",
      color: "#bbb",
      marginTop: "80px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    }}>
      <p style={{ fontSize: "0.8rem", color: "#FFFFFF" }}>
        &copy; {new Date().getFullYear()} Christian Bagatua. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
