import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import reCAPTCHA from "react-google-recaptcha";
import applyImage from "../images/Apply.jpg";
import "./Apply.css";

function Apply() {
  useEffect(() => {
    document.title = "Apply - Denali Projects";
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Header />
      <div className="layoutAP">
        <div className="contentAP">
          <p className = "headerAP">
            Apply to (blank position they are choosing)
          </p>
          <p className = "textAP" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <form className="formAP" action="mailto:alisongartnermg@gmail.com" method="get" enctype="multipart/form-data">
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Personal Details
          </p>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              name="name"
              placeholder="First and Last Name"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="email"
              name="email"
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
              name="address1"
              placeholder="Street Address"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              name="address2"
              placeholder="Address Line 2"
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              name="city"
              placeholder="City"
              required
            />
          </label>
          <label className="labelAP">
            <input
              className="input-fieldAP"
              type="text"
              name="province"
              placeholder="Province"
              required
            />
          </label>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="text"
              name="postalCode"
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
              name="phone"
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
              name="APEGA"
              placeholder="Optional"
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Do you currently reside in Alberta?
          </p>
          <label className="longlabelAP">
            <select className="input-field-largeAP" required>
              <option value="ablertaNo">No</option>
              <option value="albertaYes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0", fontSize: "22px", fontWeight: 500 }}>
            Are you legally entitled to work in Canada?
          </p>
          <label className="longlabelAP">
            <select className="input-field-largeAP" required>
              <option value="legalToWorkNo">No</option>
              <option value="legalToWorkYes">Yes</option>
            </select>
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            Resume
          </p>
          <p style={{ marginBottom: "0px", fontSize: "16px" }}>
            Only PDF files accepted
          </p>
          <label className="labelAP">
            <input
              className="input-field-largeAP"
              type="file"
              name="resume"
              accept=".pdf"
              required
            />
          </label>
          <p style={{ marginBottom: "0px", fontSize: "22px", fontWeight: 500 }}>
            LinkedIn Profile Address
          </p>
          <label className="longlabelAP">
            <input
              className="input-field-largeAP"
              type="url"
              name="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
            />
          </label>
          <reCAPTCHA />
          <button
            className={`buttonAP ${hover ? "button-hover" : ""}`}
            type="submit"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
