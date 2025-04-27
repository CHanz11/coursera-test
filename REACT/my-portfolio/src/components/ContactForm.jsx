import React from "react";

function ContactForm() {
  const inputStyle = {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #00E6FF",
    backgroundColor: "#222",
    color: "white",
    fontSize: "1rem",
    outline: "none",
  };

  const buttonStyle = {
    backgroundColor: "#00E6FF",
    border: "none",
    color: "#111",
    padding: "12px 30px",
    fontSize: "1rem",
    borderRadius: "30px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div style={{
      backgroundColor: "#111",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 230, 255, 0.2)",
      maxWidth: "800px",
      margin: "0 auto",
    }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "30px", color: "#00E6FF", textAlign: "center" }}>
        *Required Information
      </h2>

      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="full-name">FULL NAME *</label>
          <input type="text" id="full-name" name="full-name" required style={inputStyle} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="address">ADDRESS *</label>
          <input type="text" id="address" name="address" required style={inputStyle} />
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ flex: "1", minWidth: "200px", display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">EMAIL ADDRESS *</label>
            <input type="email" id="email" name="email" required style={inputStyle} />
          </div>

          <div style={{ flex: "1", minWidth: "200px", display: "flex", flexDirection: "column" }}>
            <label htmlFor="phone">PHONE NUMBER *</label>
            <input type="tel" id="phone" name="phone" required style={inputStyle} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="comment">QUESTION / COMMENT</label>
          <textarea id="comment" name="comment" style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}></textarea>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.9rem",
          marginTop: "10px"
        }}>
          <input type="checkbox" id="agree" name="agree" required style={{ marginRight: "10px" }} />
          <label htmlFor="agree">
            By submitting this form you agree to the terms of the <a href="#" style={{ color: "#00E6FF" }}>Privacy Policy</a>.
          </label>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button type="submit" style={buttonStyle}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
