import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./noCareers.css";

function NoCareers() {
  const [hover, setHover] = useState(false);
  const [jsonData, setJsonData] = useState(null);

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

  if (!jsonData) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <div className="contentNC">
        <p className="textNC">
          {jsonData[0].noPostings}
        </p>
        <Link to="/SendResume">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`buttonNC ${hover ? "button-hoverNC" : ""}`}
          >
            Send Us Your Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoCareers;
