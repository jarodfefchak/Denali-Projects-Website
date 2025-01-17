import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SolutionsList.css";

function SolutionsList({ solutionId }) {
  const [jsonData, setJsonData] = useState(null);
  const [jsonData2, setJsonData2] = useState(null);

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
    const fetchData = async () => {
      try {
        const response = await axios.get(`/data/Solutions/paragraphs.json`);
        setJsonData2(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (jsonData) {
      document.title = `${jsonData[0].section} - Denali Projects`;
    }
  }, [jsonData]);

  if (!jsonData) {
    return;
  }
  if (!jsonData2) {
    return;
  }

  return (
    <div>
      <h2 className="subHeadingSL">{jsonData[0].section} </h2>
      <br />
      <p className="textSL">{jsonData2[0][solutionId]} </p>
      <p className="introSL">Key Projects</p>
      <div className="projectSL">
        {jsonData.map((project, index) => (
          <div key={index} className="informationSL">
            <p><b>PROJECT:</b> {project.project}</p>
            <p><b>DESIGN STAGES:</b> {project.design}</p>
            <p><b>DISCIPLINES:</b> {project.discipline}</p>
            <p><b>LOCATION:</b> {project.location}</p> 
            <p><br></br>
              {project.description.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <div className="rectangleSL" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsList;



