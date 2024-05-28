import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import reCAPTCHA from "react-google-recaptcha";
import applyImage from "../images/Apply.jpg";

function Apply() {
  useEffect(() => {
    document.title = "Apply - Denali Projects";
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const [hover,setHover] = useState(false);
  const button = {
    color: "white",
    backgroundColor:"#6e9277",
    paddingBottom:"35px",
    border: "0px",
    borderRadius:"7px",
    width:"100px",
    height:"20px",
    fontSize: "16pt",
    cursor: "pointer",
    ...(hover?{
      boxShadow: "1px 1px 10px #000000",
    }:null),
  };

  return (
    <div>
      <Header />
      {/* <div style={image}></div> */}
      <div style={layout}>
        <div style={content}>
          <p style={{ fontSize: "40pt" }}>
            Apply to (blank position they are choosing)
          </p>
          <p style={{ fontSize: "14pt", marginTop: "50px" }}>
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
        <form style={form} action="mailto:alisongartnermg@gmail.com" method="get" enctype="multipart/form-data">
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>Personal Details</p>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="text"
              name="name"
              placeholder="First and Last Name"
              required
            />
          </label>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>Contact Details</p>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="text"
              name="address1"
              placeholder="Street Address"
              required
            />
          </label>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="text"
              name="address2"
              placeholder="Address Line 2"
            />
          </label>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="text"
              name="city"
              placeholder="City"
              required
            />
          </label>
          <label style={label}>
            <input
              style={{ width: "300px" }}
              type="text"
              name="province"
              placeholder="Province"
              required
            />
          </label>
          <label style={label}>
            <input
              style={{ width: "610px" }}
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              required
            />
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>Phone</p>
          <label style={label}>
            <input
              style={{ width: "610px" }}
              type="tel"
              name="phone"
              required
            />
          </label>

          <p style = {{marginBottom:"0px",ffontSize:"22px", fontWeight:500}}>APEGA Membership Number</p>
          <label style={label}>
            <input
              style={{ width: "610px" }}
              type="text"
              name="APEGA"
              placeholder="Optional- But please include if you have one"
            />
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px",fontWeight:500}}>Do you currenlty reside in Alberta?</p>
          <label style={label}>
            <select style={{ width: "610px" }} required>
              <option value="ablertaNo">No</option>
              <option value="albertaYes">Yes</option>
            </select>
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>Are you legally entitled to work in Canada?</p>
          <label style={label}>
            <select style={{ width: "610px" }} required>
              <option value="legalToWorkNo">No</option>
              <option value="legalToWorkYes">Yes</option>
            </select>
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>Resume</p>
          <p style = {{marginBottom:"0px",fontSize:"16px"}}> Only PDF files accepted</p>
          <label style={label}>
            <input
              style={{ width: "610px" }}
              type="file"
              name="resume"
              accept=".pdf"
              required
            />
          </label>
          <p style = {{marginBottom:"0px",fontSize:"22px", fontWeight:500}}>LinkedIn Profile Address</p>
          <label style={label}>
            <input
              style={{ width: "610px" }}
              type="url"
              name="url"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              required
            />
          </label>
          <reCAPTCHA />
          <button style={button} type="submit" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
const layout = {
  display: "flex",
  felxDirection: "column",
  justifyContent: "space-between",
};
const content = {
  marginTop: "200px",
  marginLeft: "200px",
  marginRight: "100px",
  marginBottom: "200px",
  textalign: "center",
  maxWidth: "60vh",
};

const form = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "200px",
  marginRight: "200px",
  marginLeft: "100px",
  marginBottom: "200px",
  fontSize: "14pt",
};
const label = {
  padding: "5px",
  marginBottom:"15px"
};
