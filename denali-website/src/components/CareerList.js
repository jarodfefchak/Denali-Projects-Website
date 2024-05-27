import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

function CareerList() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Careers.json"); // Adjust the path
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
    <div style={careers}>
      <h1>Current Postings</h1>
      <div style ={postings}>
      {jsonData.map((career) => (
        <div className={career.title}>
          <p style={{fontSize:"30px"}}><b>{career.title}</b></p>
          <p><b>Location: </b>{career.location}</p>
          <p><b>Description: </b> {career.description}</p>
          <p><b>Responsibilities:</b></p>
          <ul>
            {career.Responsibilties.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          <p><b>Minimum Requirements:</b></p>
          <ul>
            {career.minimum_requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <Link to = "/Apply" >
          <button style = {{border:'none', borderRadius:10, background:"#6e9477",color:"white", padding:"5px",width:"75px"}}>Apply</button>
          </Link>
          <hr></hr>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CareerList;

const careers ={
marginLeft:"200px",
marginRight:"200px",
};

const postings ={
  margin:"50px",
};