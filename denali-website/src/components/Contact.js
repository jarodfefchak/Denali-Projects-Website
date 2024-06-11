import React, { useEffect, useState } from "react";
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
  const [hover, setHover] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    checkFormValidity();
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    checkFormValidity();
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    checkFormValidity();
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkFormValidity();
  };
  const checkFormValidity = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      message.trim() !== "" &&
      email.trim() !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
  const handleEmailMessage = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setShow(true);
    }
  };

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <div>
      <Header />
      <div className="contentC">
        <div className="textC">
          <p className="no-marginHeaderC">Contact Us</p>
          <p className="no-marginC">Denali Projects</p>
          <p className="no-marginC">info@denaliprojects.com</p>
          <p className="no-marginC">Phone +1 (403) 984-6610</p>

          <form className="formC">
            <p className="large-textC">Personal Information</p>
            <label className="labelC">
              <input
                className="input-shortC"
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                required
              />
            </label>
            <label className="labelC">
              <input
                className="input-shortC"
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                required
              />
            </label>
            <label className="labelC">
              <input
                className="input-longC"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
            </label>
            <p className="large-textC">Message</p>
            <label className="labelC">
              <textarea
                className="textareaC"
                value={message}
                onChange={handleMessageChange}
                autoResizeEnabled={true}
              />
            </label>
            <br></br>
            <button
              className={`buttonC ${hover ? "button-hover" : ""}`}
              type="submit"
              onClick={handleEmailMessage}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Submit
            </button>
          </form>
          {show && (
            <div className="custom-alert-overlay">
              <div className="custom-alert">
                <p>Please fill in all fields before submitting.</p>
                <button onClick={closeAlert}>Close</button>
              </div>
            </div>
          )}
        </div>
        <div className="iframe-containerC">
          <p className="no-marginHeaderC">Our Office</p>
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

