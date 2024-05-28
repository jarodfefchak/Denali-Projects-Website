import React, { useEffect } from "react";
import{ useState } from "react";
import {Link} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import BradImg from "../images/AboutUs/BradMeaney.jpg";
import JarodImg from "../images/AboutUs/JarodFefchak.jpg";
import DeanImg from "../images/AboutUs/DeanKirkby.jpg";

function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  const [hover,setHover] = useState(false);
  const button = {
    color: "white",
    backgroundColor:"#374f59",
    border: "0px",
    borderRadius:"15px",
    width:"300px",
    height:"75px",
    fontSize: "25pt",
    cursor: "pointer",
    ...(hover?{
      boxShadow: "1px 1px 20px #000000",
    }:null),
  };
  return (
    <div>
      <Header />
      <div style={content}>
        <p style={{ fontSize: "50pt" }}>
          <b>Inside Denali </b>
        </p>
        <p style={{ fontSize: "30pt" }}>About Us</p>
        <p>
          Since our inception, Denali has had the pleasure and experience to
          work with numerous midstreamers and producers in the Western Canadian
          oil and gas sector. The range of these projects has varied in scope,
          including FEED studies & routine MOCs to new green field facilities.
          Denali prides itself on being an efficient and valuable service
          provider to our clients.
        </p>
        <p>
          Many elements of various projects fit well with Denali's areas of
          expertise. Our core team has considerable experience with Brownfield
          projects. Denali has completed multiple FEED, detailed design and MOC
          projects. Through our experience with energy projects, we have gained
          a deep understanding and knowledge base of different facilities,
          processes, and operations, and have developed excellent working
          relationships with our clients’ management, operations and
          construction teams; With this knowledge and experience, Denali can
          provide valuable insight into real, implementable solutions, while
          considering operational concerns for any project.{" "}
        </p>
        <p>
          {" "}
          Denali is a great fit to work with your project team and Operations
          staff to provide the quality FEED deliverables required for our
          clients to evaluate the economics of the project while using a lean,
          fit-for-purpose project team.
        </p>
        <p>
          Contact us to learn more about how we can provide our services to your
          next project.
        </p>
        <p>
          <b>
            Fueling Success Together: EPC Solutions for the Oil & Gas Industry
          </b>
        </p>
        <Link to="/Contact">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={button}
          >
            Contact Us
          </button>
        </Link>
        <p
          style={{ fontSize: "27px", marginBottom: "0px", marginLeft: "100px" }}
        >
          Executive Team
        </p>

        <div style={images}>
          <div style={img}>
            <img
              src={BradImg}
              alt="Brad Meaney"
              height="300px"
              style={{ paddingBottom: "15px" }}
            />
            <p style={{ margin: "0px" }}>Brad Meaney</p>
            <p style={{ margin: "0px" }}>Principle</p>
            <p style={{ margin: "0px" }}>Instumentation Lead</p>
          </div>
          <div style={img}>
            <img
              src={JarodImg}
              alt="Jarod Fechak"
              height="300px"
              style={{ paddingBottom: "15px" }}
            />
            <p style={{ margin: "0px" }}>Jarod Fefchak</p>
            <p style={{ margin: "0px" }}>Principle</p>
            <p style={{ margin: "0px" }}>Electrical Lead</p>
          </div>
          <div style={img}>
            <img
              src={DeanImg}
              alt="Dean Krikby"
              height="300px"
              style={{ paddingBottom: "15px" }}
            />
            <p style={{ margin: "0px" }}>Dean Kirkby</p>
            <p style={{ margin: "0px" }}>Principle</p>
            <p style={{ margin: "0px" }}>Engineering Lead</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default AboutUs;
const content = {
  padding: "150px",
};
const images = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
};
const img = {
  textAlign: "center",

  margin: "75px",
};
