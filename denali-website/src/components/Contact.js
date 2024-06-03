import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Contact.css";

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
      <div className="contentC">
        <div className="textC">
          <p className="no-marginC">Contact Us</p>
          <p className="no-marginC">Denali Projects</p>
          <p className="no-marginC">#1500, 700 - 4th Avenue SW</p>
          <p className="no-marginC">Calgary, AB T2P 3J4</p>
          <p className="no-marginC">Phone +1 (403) 984-6610</p>

          <form
            className="formC"
            action="mailto:alisongartnermg@gmail.com"
            method="get"
            encType="multipart/form-data"
          >
            <p className="large-textC">Personal Information</p>
            <label className="labelC">
              <input
                className="input-shortC"
                type="text"
                name="name"
                placeholder="First Name"
                required
              />
            </label>
            <label className="labelC">
              <input
                className="input-shortC"
                type="text"
                name="Last Name"
                placeholder="Last Name"
                required
              />
            </label>
            <label className="labelC">
              <input
                className="input-longC"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <p className="large-textC">Message</p>
            <label className="labelC">
              <textarea
                className="textareaC"
                name="message"
                autoResizeEnabled={true}
              />
            </label>
          </form>
        </div>
        <div className="iframe-containerC">
          <p>Our Office</p>
          <p className="no-marginC">#1500, 700 - 4th Avenue SW</p>
          <p>Calgary, AB T2P 3J4</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4218.223674639591!2d-114.07818068628151!3d51.04993390290784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe521a5d8f7%3A0xd9dccb4dd492ed30!2s700%204%20Ave%20SW%2C%20Calgary%2C%20AB%20T2P%203J4!5e0!3m2!1sen!2sca!4v1716931062195!5m2!1sen!2sca"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
