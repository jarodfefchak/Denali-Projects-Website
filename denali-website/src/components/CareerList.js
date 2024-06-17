import React, { useEffect, useState } from "react";
import axios from "axios";
import NoCareers from "./NoCareers";
import { Link } from "react-router-dom";
import "./CareerList.css";

function CareerList() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Careers.json");
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

  if (Object.keys(jsonData).length === 0) {
    return <NoCareers />;
  }

  return (
    <div className="careersCL">
      <h1 className="headerCL">Current Postings</h1>
      <div className="postingsCL">
        {jsonData.map((career) => (
          <div key={career.id} className="careerItemCL">
            <p className="careerTitleCL">{career.title}</p>
            <p className="textCL">
              <b>Location: </b>
              {career.location}
            </p>
            <p className="textCL">
              <b>Description: </b>
              {career.description}
            </p>
            <p className="textCL">
              <b>Responsibilities:</b>
            </p>
            <ul>
              {career.responsibilities.map((resp, index) => (
                <li key={index} className="textCL">
                  {resp}
                </li>
              ))}
            </ul>
            <p className="textCL">
              <b>Minimum Requirements:</b>
            </p>
            <ul>
              {career.minimum_requirements.map((req, index) => (
                <li key={index} className="textCL">
                  {req}
                </li>
              ))}
            </ul>
            <p className="textCL">
              <b>Preferred Assets:</b>
            </p>
            <ul>
              {career.preferred.map((req, index) => (
                <li key={index} className="textCL">
                  {req}
                </li>
              ))}
            </ul>
            <Link to={`/apply/${encodeURIComponent(career.title)}`}>
              <button className="applyButtonCL">Apply</button>
            </Link>
            <hr style={{ height: "1px", border: "none", color: "black", backgroundColor: "black" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerList;


