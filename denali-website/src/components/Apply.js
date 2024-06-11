import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Apply.css";

function Apply() {
  const { jobTitle } = useParams();

  useEffect(() => {
    document.title = "Apply - Denali Projects";
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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

  const checkFormValidity = () => {
    if (
      FLname.trim() !== "" &&
      email.trim() !== "" &&
      address1.trim() !== "" &&
      city.trim() !== "" &&
      province.trim() !== "" &&
      postalCode.trim() !== "" &&
      phone.trim() !== "" &&
      isValidPhoneNumber &&
      resume !== null
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleNameChange = (event) => {
    setFLname(event.target.value);
    checkFormValidity();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    checkFormValidity();
  };

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
    checkFormValidity();
  };

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    checkFormValidity();
  };

  const handleProvinceChange = (event) => {
    setProvince(event.target.value);
    checkFormValidity();
  };

  const handlePostalChange = (event) => {
    setPostalCode(event.target.value);
    checkFormValidity();
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    validPhoneNumber(event.target.value);
    checkFormValidity();
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
    checkFormValidity();
  };

  const validPhoneNumber = (phone) => {
    const regex =
      /^(\+\d{1,3}[- ]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    setValidPhoneNumber(regex.test(phone));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    if (!isValidPhoneNumber) {
      alert(
        "Please enter a valid phone number. Here are some possible valid formats:\n\n" +
          "- 123-456-7890\n" +
          "- (123) 456-7890\n" +
          "- 123 456 7890\n" +
          "- 123.456.7890\n" +
          "- +1 (123) 456-7890"
      );
    }

    if (!isFormValid) {
      alert(
        "Please ensure all of the following fields are filled out before submitting: \n\n" +
          "- First and Last Name\n" +
          "- Email\n" +
          "- Street Address\n" +
          "- City\n" +
          "- Province\n" +
          "- Postal Code\n" +
          "- Phone\n" +
          "- Resume Attachment\n"
      );
    }
    // Handle form submission logic here
  };

  return (
    <div>
      <Header />
      <div className="layoutAP">
        <div className="contentAP">
          <p className="headerAP">Apply to {decodeURIComponent(jobTitle)}</p>
          <p className="textAP">
            Denali Projects offers exciting opportunities for professional
            growth, allowing individuals to work on elaborate and complex
            projects that shape the future of the energy industry. With a strong
            emphasis on collaboration, sustainability, and excellence, employees
            are empowered to contribute their unique skills and ideas, ensuring
            a fulfilling and impactful career. Apply at Denali Projects today!
          </p>
        </div>
        <form className="formAP" onSubmit={handleSignup}>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Personal Details
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={FLname}
              onChange={handleNameChange}
              placeholder="First and Last Name"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Contact Details
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={address1}
              onChange={handleAddress1Change}
              placeholder="Street Address"
              required
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
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              value={province}
              onChange={handleProvinceChange}
              placeholder="Province"
              required
            />
          </label>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={postalCode}
              onChange={handlePostalChange}
              placeholder="Postal Code"
              required
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Phone
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
              required
            />
          </label>

          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            APEGA Membership Number
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              value={APEGA}
              onChange={handleAPEGAChange}
              placeholder="Optional"
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Do you currently reside in Alberta?
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={alberta}
              onChange={handleAlbertaChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0", fontSize: "22px", fontWeight: 500 }}>
            Are you legally entitled to work in Canada?
          </p>
          <label className="longlabelAP">
            <select
              className="input-field-largeAP"
              value={legalToWork}
              onChange={handleLegalToWorkChange}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            LinkedIn Profile URL
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="url"
              value={url}
              onChange={handleUrlChange}
              placeholder="Optional"
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Resume
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="file"
              onChange={handleResumeChange}
              accept=".pdf"
              required
            />
          </label>
          <button className="buttonAP" type="submit" onClick={handleSignup}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
