import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Denali Projects";
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <Header />
      <div style={content}>
        <div style={text}>
          <p style={{ marginBottom: "0px" }}>Contact Us</p>
          <p style={{ marginBottom: "0px" }}>Denali Projects</p>
          <p style={{ marginBottom: "0px" }}>#1500, 700 - 4th Avenue SW</p>
          <p style={{ marginBottom: "0px" }}>Calgary, AB T2P 3J4</p>
          <p style={{ marginBottom: "0px" }}>Phone +1 (403) 984-6610</p>

          <form
            style={form}
            action="mailto:alisongartnermg@gmail.com"
            method="get"
            enctype="multipart/form-data"
          >
            <p
              style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}
            >
              Personal Information
            </p>
            <label style={label}>
              <input
                style={{ width: "17vw" }}
                type="text"
                name="name"
                placeholder="First Name"
                required
              />
            </label>
            <label style={label}>
              <input
                style={{ width: "17vw" }}
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </label>
            <label style={label}>
              <input
                style={{ width: "34vw" }}
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <p
              style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}
            >
              Message
            </p>
            <label>
              <textarea name="message"   autoResizeEnabled={true} />
            </label>
          </form>
        </div>
        <div style={iFrame}>
          <p>Our Office</p>
          <p style={{ marginBottom: "0px" }}>#1500, 700 - 4th Avenue SW</p>
          <p>Calgary, AB T2P 3J4</p>
          <p> </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4218.223674639591!2d-114.07818068628151!3d51.04993390290784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe521a5d8f7%3A0xd9dccb4dd492ed30!2s700%204%20Ave%20SW%2C%20Calgary%2C%20AB%20T2P%203J4!5e0!3m2!1sen!2sca!4v1716931062195!5m2!1sen!2sca"
            title="Google Maps"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
const content = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  textAlign: "center",
};
const text = {
  margin: "150px",
};
const iFrame = {
  margin: "150px",
};
const form = {};
const label = {};
