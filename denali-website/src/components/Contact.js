import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);
  const [hover, setHover] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  useEffect(() => {
    document.title = "Contact Us - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Headings.json`);
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Text.json`);
        setJsonData2(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!jsonData || !jsonData2) {
    return null;
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    checkFormValidity();
    setErrors((prevErrors) => ({ ...prevErrors, firstName: false }));
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    checkFormValidity();
    setErrors((prevErrors) => ({ ...prevErrors, lastName: false }));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    checkFormValidity();
    setErrors((prevErrors) => ({ ...prevErrors, message: false }));
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    checkFormValidity();

    if (!validateEmail(inputEmail)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    }
  };

  const checkFormValidity = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      message.trim() !== "" &&
      validateEmail(email)
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleEmailMessage = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      setErrors({
        firstName: firstName.trim() === "",
        lastName: lastName.trim() === "",
        message: message.trim() === "",
        email: !validateEmail(email),
      });
      setShow(true);
    } else {
      sendEmail();
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setShow2(true);
    }
  };

  const closeAlert = () => {
    setShow(false);
  };

  const closeAlert2 = () => {
    setShow2(false);
    window.location.href = "/";
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const getErrorMessage = () => {
    let errorMessage = "Please fill in all fields correctly before submitting.";
    if (errors.email) {
      errorMessage += " The email address is invalid.";
    }
    return errorMessage;
  };

  return (
    <div>
       <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
      <Header />
      <div className="contentC">
        <div className="textC">
          <p className="no-marginHeaderC">{jsonData[0].contactUs1}</p>
          <p className="no-marginC">Denali Projects</p>
          <p className="no-marginC">{jsonData2[0].contactEmail}</p>
          <p className="no-marginC">{jsonData2[0].contactPhone}</p>

          <form className="formC" ref={form} onSubmit={handleEmailMessage}>
            <p className="large-textC">
              Personal Information <span style={{ color: "red" }}>*</span>
            </p>
            <label className="labelC">
              <input
                className={`input-shortC ${
                  errors.firstName ? "input-errorC" : ""
                }`}
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
              />
            </label>
            <label className="labelC">
              <input
                className={`input-shortC ${
                  errors.lastName ? "input-errorC" : ""
                }`}
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
              />
            </label>
            <label className="labelC">
              <input
                className={`input-longC ${errors.email ? "input-errorC" : ""}`}
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
              />
            </label>
            <p className="large-textC">
              Message <span style={{ color: "red" }}>*</span>
            </p>
            <label className="labelC">
              <textarea
                className={`textareaC ${
                  errors.message ? "textarea-errorC" : ""
                }`}
                name="message"
                value={message}
                onChange={handleMessageChange}
                autoResizeEnabled={true}
              />
            </label>
            <br />
            <button
              className={`buttonC ${hover ? "button-hover" : ""}`}
              type="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Submit
            </button>
          </form>
          {show && (
            <motion.div
              className="custom-alert-overlay"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.4 },
                y: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <div className="custom-alert">
                <p>{getErrorMessage()}</p>
                <button onClick={closeAlert}>Close</button>
              </div>
            </motion.div>
          )}
          {show2 && (
            <motion.div
              className="custom-alert-overlay"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.4 },
                y: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <div className="custom-alert">
                <p>Thank you for contacting Denali Projects.</p>
                <button onClick={closeAlert2}>Close</button>
              </div>
            </motion.div>
          )}
        </div>
        <div className="iframe-containerC">
          <p className="no-marginHeaderC">{jsonData[0].contactUs2}</p>
          <p className="no-marginC">{jsonData2[0].contactAddress}</p>
          <p className="no-marginC">{jsonData2[0].contactCity}</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4218.223674639591!2d-114.07818068628151!3d51.04993390290784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fdd5043c07f%3A0xdccb4dd492ed30!2s700%204%20Ave%20SW%2C%20Calgary%2C%20AB%20T2P%203J4!5e0!3m2!1sen!2sca!4v1716931062195!5m2!1sen!2sca"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
      </motion.div>
    </div>
  );
}

export default Contact;
