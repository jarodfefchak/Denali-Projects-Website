import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SolutionsList.css";

function SolutionsList({ solutionId }) {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Solutions/Solution${solutionId}.json`);
        setJsonData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [solutionId]);

  useEffect(() => {
    if (jsonData) {
      document.title = `${jsonData[0].section} - Denali Projects`;
    }
  }, [jsonData]);

  if (!jsonData) {
    return <p>Loading data...</p>;
  }

  return (
    <div>
      <h2>{jsonData[0].section}</h2>
      <br />
      <div className="projectSL">
        {jsonData.map((project, index) => (
          <div key={index} className="informationSL">
            <p><b>PROJECT:</b> {project.project}</p>
            <p><b>CLIENT:</b> {project.client}</p>
            <p><b>Location:</b> {project.location}</p>
            <p>{project.description}</p>
            <div className="rectangleSL" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsList;



