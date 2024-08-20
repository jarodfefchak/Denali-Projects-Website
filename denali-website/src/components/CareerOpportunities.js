import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CareerOpImage from "../images/CareerOpportunities.jpg";
import Header from "./Header";
import Footer from "./Footer";
import CareerList from "./CareerList";
import NoCareers from "./NoCareers";
import "./CareerOpportunities.css";

function CareerOpportunities() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Careers.json"); // Adjust the path if necessary
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
        const response = await axios.get("/data/Text.json"); // Adjust the path if necessary
        setJsonData2(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Career Opportunities - Denali Projects";
  }, []);

  if (!jsonData) {
    return;
  }
  if (jsonData.length === 0) {
    return (
      <div>
        <motion.div
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Header />
          <NoCareers />
          <Footer />
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Header />
        <div className="titleImageOP">
          <img src={CareerOpImage} alt="Career Opportunities" className="titleImageOPImg" />
        </div>
        <div className="contentOP">
          <div className="navBarOP">
            <p className="navBarTextOP">
              {jsonData2 && jsonData2.length > 0
                ? jsonData2[0].currentPostings
                : "No current postings available."}
            </p>
          </div>
          <div className="jobListingsOP">
            <CareerList />
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
}

export default CareerOpportunities;
