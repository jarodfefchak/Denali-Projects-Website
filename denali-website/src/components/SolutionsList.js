import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SolutionsList() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Solutions/Solution1.json"); // Adjust the path
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
      <h2>(solution from link clicked on)</h2>
      <br></br>
      <div style={project}>
        {jsonData.map((project) => (
          <div style={information}>
            <p style={{ marginBottom: "0px" }}>PROJECT: {project.project}</p>
            <p style={{ marginBottom: "0px" }}>CLIENT: {project.client}</p>
            <p>Location: {project.location}</p>
            <p>{project.description}</p>
            <div style={rectangle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsList;
const project = {};
const information = {
  paddingTop:"25px",
  paddingBottom:"25px",

};
const rectangle = {
  display: "inline-block",
  width: "30vw",
  height: "2px",
  background: "#374f59"
  }