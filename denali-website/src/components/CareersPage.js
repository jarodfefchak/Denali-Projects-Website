import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./CareersPage.css";

const CareersPage = () => {
  const [hover, setHover] = useState(false);
  const [data, setData] = useState({ headings: null, text: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [headingsResponse, textResponse] = await Promise.all([
          axios.get(`/data/Headings.json`),
          axios.get(`/data/Text.json`)
        ]);
        setData({ headings: headingsResponse.data, text: textResponse.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data.headings || !data.text) {
    return null;
  }

  return (
    <div style={background}>
      <div className="text">
        <p className="header">
          <b>{data.headings[0].homeCareer}</b>
        </p>
        <p className="sub-header">{data.text[0].futureTextLine1}</p>
        <br></br>
        <p>{data.text[0].futureTextLine2}</p>
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

const background = {
  color: "black",
  backgroundColor: "#f6f6f6",
  margin: '0px',
  padding: '0px',
};
