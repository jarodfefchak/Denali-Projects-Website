import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import emailjs from "emailjs-com";
import Header from "./Header";
import Footer from "./Footer";
import "./Apply.css";

function Apply() {
  const [jsonData, setJsonData] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [FLname, setFLname] = useState("");
  const [email, setEmail] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [isValidPhoneNumber, setValidPhoneNumber] = useState(false);
  const [APEGA, setAPEGA] = useState("");
  const [alberta, setAlberta] = useState("No");
  const [legalToWork, setLegalToWork] = useState("No");
  const [url, setUrl] = useState("");
  const [resume, setResume] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const { jobTitle } = useParams();

  useEffect(() => {
    document.title = "Apply - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Text.json");
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const checkFormValidity = () => {
    if (
      FLname.trim() !== "" &&
      email.trim() !== "" &&
      address1.trim() !== "" &&
      city.trim() !== "" &&
      province.trim() !== "" &&
      postalCode.trim() !== "" &&
      resume !== null
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [
    FLname,
    email,
    address1,
    city,
    province,
    postalCode,
    phone,
    resume,
    isValidPhoneNumber,
  ]);

  const handleNameChange = (event) => {
    setFLname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  };

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
  };

  const handlePostalChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handlePhoneChange = (event) => {
    const phoneNumber = event.target.value;
    validPhoneNumber(phoneNumber);
    setPhone(phoneNumber);
  };

  const handleAPEGAChange = (event) => {
    setAPEGA(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAlbertaChange = (event) => {
    setAlberta(event.target.value);
  };

  const handleLegalToWorkChange = (event) => {
    setLegalToWork(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const validPhoneNumber = (phone) => {
    const regex =
      /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    setValidPhoneNumber(regex.test(phone));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Reset alerts before validation
    setShow(false);
    setShow2(false);
    setShow3(false);

    // Validate phone number
    if (!isValidPhoneNumber && isFormValid) {
      setShow(true);
    }

    // Validate form fields
    if (!isFormValid) {
      setShow2(true);
    }

    // If form is valid and phone number is valid, proceed with submission
    if (isFormValid && isValidPhoneNumber) {
      if (legalToWork === "Yes") {
        try {
          const resumeFile = event.target.elements.resume.files[0];
          const resumeBase64 = await convertFileToBase64(resumeFile);

          const templateParams = {
            job_title: decodeURIComponent(jobTitle),
            name: FLname,
            email: email,
            address: `${address1} ${address2}`,
            city: city,
            province: province,
            phone: phone,
            apega: APEGA,
            alberta: alberta,
            linkedin: url,
            uploaded_resume: resumeBase64,
          };

          // Send email using emailjs
          emailjs
            .send(
              process.env.REACT_APP_EMAILJS_SERVICE_ID,
              process.env.REACT_APP_EMAILJS_APPLICATION_TEMPLATE_ID,
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
      setShow3(true);
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const closeAlert = () => {
    setShow(false);
  };

  const closeAlert2 = () => {
    setShow2(false);
  };

  const closeAlert3 = () => {
    setShow3(false);
    window.location.href = "/";
  };

  return (
    <div>
      <Header />
      <div className="layoutAP">
        <div className="contentAP">
          <p className="headerAP">Apply to {decodeURIComponent(jobTitle)}</p>
          <p className="textAP">
            {jsonData && jsonData.length > 0 && jsonData[0].apply}
            <br></br>
            <br></br>
            <b>No Phone Calls Please!</b>
          </p>
        </div>
        <form className="formAP" onSubmit={handleSubmit}>
          <p className="inputHeadingAP">
            Personal Details <span style={{ color: "red" }}>*</span>
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={FLname}
              onChange={handleNameChange}
              placeholder="First and Last Name"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </label>
          <p className="inputHeadingAP ">
            Contact Details <span style={{ color: "red" }}>*</span>
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={address1}
              onChange={handleAddress1Change}
              placeholder="Street Address"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={address2}
              onChange={handleAddress2Change}
              placeholder="Address Line 2"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="City"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={province}
              onChange={handleProvinceChange}
              placeholder="Province"
            />
          </label>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={postalCode}
              onChange={handlePostalChange}
              placeholder="Postal Code"
            />
          </label>
          <p className="inputHeadingAP ">
            Phone <span style={{ color: "red" }}>*</span>
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
          </label>

          <p className="inputHeadingAP ">APEGA Membership Number</p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={APEGA}
              onChange={handleAPEGAChange}
            />
          </label>
          <p className="inputHeadingAP ">
            Do you currently reside in Alberta?{" "}
            <span style={{ color: "red" }}>*</span>
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={alberta}
              onChange={handleAlbertaChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p className="inputHeadingAP ">
            Are you legally entitled to work in Canada?{" "}
            <span style={{ color: "red" }}>*</span>
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={legalToWork}
              onChange={handleLegalToWorkChange}
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p className="inputHeadingAP ">LinkedIn Profile URL</p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="url"
              value={url}
              onChange={handleUrlChange}
            />
          </label>
          <p className="inputHeadingAP ">
            Resume <span style={{ color: "red" }}>*</span>
          </p>
          <label className="resumeButton">
            <input
              type="file"
              name="resume"
              onChange={handleResumeChange}
              accept=".pdf"
            />
          </label>
          <br></br>
          <div className="submitAP">
          <button className="buttonAP" type="submit">
            Submit
          </button>
          </div>
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
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
              <p>Please enter a valid phone number in one of the following formats:
                </p>
                <ol className="phone-format-listOP">
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
                <button onClick={closeAlert}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {show2 && !show && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
                <p>Please fill in all fields.</p>
                <button onClick={closeAlert2}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
        {show3 && (
          <motion.div
            className="custom-alert-overlay"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 0.5, ease: "easeOut" },
            }}
          >
            <div className="custom-alert-overlayOP">
              <div className="custom-alertOP">
                <p>Thank for your applying for a position at Denali Projects Ltd. We have received your application. If you are selected to continue to the interview process, our human resources department will be in contact with you. <i>Please no phone calls.</i></p>
                <button onClick={closeAlert3}>Close</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
