import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./CareersPage.css"

const CareersPage = () => {
  const [hover, setHover] = useState(false);
  const [jsonData, setJsonData] = useState(null);
    const [jsonData2, setJsonData2] = useState(null);
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
      return;
    }
  return (
    <div style ={background}>
      <div className="text">
        <p className="header">
          <b>{jsonData[0].homeCareer}</b>
        </p>
        <p>{jsonData2[0].futureTextLine1}</p>
        <p>
        {jsonData2[0].futureTextLine2}
        </p>
      </div>
      <Link to="/CareerOpportunities">
        <button 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} 
          className={`buttonCP ${hover ? 'button-hover' : ''}`}
        >
         Career Opportunities
        </button>
      </Link>
    </div>
  );
};

export default CareersPage;

const background={
  color: "black",
  backgroundColor: "#f6f6f6",
  margin: '0px',
  padding: '0px',
}