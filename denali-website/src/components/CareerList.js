import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h1>Career Titles and Locations</h1>
      <ul>
        {jsonData.map((career) => (
          <li key={career.id}>
            <strong>{career.title}</strong> - {career.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CareerList;
