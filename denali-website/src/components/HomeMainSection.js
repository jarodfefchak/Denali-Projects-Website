import React, { useEffect, useState } from "react";
import "./HomeMainSection.css";
import axios from "axios";

function HomeMainSection() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Headings.json");
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
    <div className="headImageHM" loading= "lazy">
      <p className="mainTextHM">
       {jsonData[0].Main}
      </p>
    </div>
  );
}

export default HomeMainSection;
