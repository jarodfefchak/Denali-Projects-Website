import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "./sendResume.css";

function SendResume() {
  const [jsonData, setJsonData] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [FLname, setFLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isValidPhoneNumber, setValidPhoneNumber] = useState(false);
  const [resume, setResume] = useState(null);
  const [showFillFieldsAlert, setShowFillFieldsAlert] = useState(false);
  const [showInvalidPhoneAlert, setShowInvalidPhoneAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    document.title = "Send Resume - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Text.json`);
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const checkFormValidity = () => {
    if (FLname.trim() !== "" && email.trim() !== "" && resume !== null) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [FLname, email, phone, resume, isValidPhoneNumber]);

  if (!jsonData) {
    return;
  }

  const handleNameChange = (event) => {
    setFLname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value;
    validPhoneNumber(phoneNumber);
    setPhone(phoneNumber);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const validPhoneNumber = (phone) => {
    const regex = /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    setValidPhoneNumber(regex.test(phone));
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setShowFillFieldsAlert(true);
      return;
    }

    if (!isValidPhoneNumber) {
      setShowInvalidPhoneAlert(true);
      return;
    }

    if (isFormValid && isValidPhoneNumber) {
      try {
        const resumeBase64 = await convertFileToBase64(resume);
        const templateParams = {
          name: FLname,
          email: email,
          phone: phone,
          message: message,
          uploaded_resume: resumeBase64,
        };
        emailjs
          .send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_SEND_RESUME_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then((response) => {
            console.log("Email sent!", response.status, response.text);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }
    setShowSuccessAlert(true);
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const closeFillFieldsAlert = () => {
    setShowFillFieldsAlert(false);
  };

  const closeInvalidPhoneAlert = () => {
    setShowInvalidPhoneAlert(false);
  };

  const closeSuccessAlert = () => {
    setShowSuccessAlert(false);
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <div className="layoutSR">
        <div className="contentSR">
          <p className="headerSR">Send Us Your Resume</p>
          <p className="textSR">
            <br />
            {jsonData[0].apply}
            <br />
            <br />
            <b>No Phone Calls Please!</b>
          </p>
        </div>
        <form className="formSR" onSubmit={handleSubmit}>
          <p className="inputHeadingSR">
            Personal Details <span style={{ color: "red" }}>*</span>
          </p>
          <label className="labelSR">
            <input
              className="input-fieldSR"
              type="text"
              value={FLname}
              onChange={handleNameChange}
              placeholder="First and Last Name"
            />
          </label>
          <label className="labelSR">
            <input
              className="input-fieldSR"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </label>
          <p className="inputHeadingSR">
            Phone <span style={{ color: "red" }}>*</span>
          </p>
          <label className="longlabelSR">
            <input
              className="input-field-largeSR"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
          </label>

          <p className="inputHeadingSR">Message</p>
          <textarea
            className="longlabelSR"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <p className="inputHeadingSR">
            Resume <span style={{ color: "red" }}>*</span>
          </p>
          <label className="resumeButton">
            <input
              type="file"
              onChange={handleResumeChange}
              accept=".pdfs"
            />
          </label>
          <br />
          <button className="buttonSR" type="submit">
            Submit
          </button>
        </form>
        {showFillFieldsAlert && (
          <motion.div
            className="custom-alert-overlaySR"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="custom-alert-overlaySR">
              <div className="custom-alertSR">
                <p>Please fill in all fields.</p>
                <button onClick={closeFillFieldsAlert}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {showInvalidPhoneAlert && (
          <motion.div
            className="custom-alert-overlaySR"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="custom-alert-overlaySR">
              <div className="custom-alertSR">
                <p>Please enter a valid phone number in one of the following formats:
                </p>
                <ol className="phone-format-list">
                  <li>123-456-7890</li>
                  <li>123.456.7890</li>
                  <li>123 456 7890</li>
                  <li>(123) 456-7890</li>
                  <li>+1 123-456-7890</li>
                  <li>+1 (123) 456-7890</li>
                  <li>+12 123 456 7890</li>
                  <li>+123 123 456 7890</li>
                  <li>1234567890</li>
                  <li>(123)456-7890</li>
                  <li>+12-123-456-7890</li>
                  <li>+123-123-456-7890</li>
                </ol>
                <button onClick={closeInvalidPhoneAlert}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {showSuccessAlert && (
          <motion.div
            className="custom-alert-overlaySR"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="custom-alert-overlaySR">
              <div className="custom-alertSR">
                <p>Thank you for contacting Denali Projects.</p>
                <button onClick={closeSuccessAlert}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SendResume;

