import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';



function SolutionsList(){
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

  return(
    <div style={list}>
      <h1>List</h1>
      <div style = {project}>
        {jsonData.map((project) => (
            <p>{project.project}</p>
        ))}
      </div>
    </div>
);
};

export default SolutionsList;
const project = {

};

const list ={

};