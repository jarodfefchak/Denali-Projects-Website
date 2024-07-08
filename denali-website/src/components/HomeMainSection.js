import React, { useEffect, useState } from "react";
import "./HomeMainSection.css";
import axios from "axios";

function HomeMainSection() {
  const [jsonData, setJsonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/Headings.json");
        setJsonData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return ;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!jsonData) {
    return null;
  }

  return (
    <div className="headImageHM" loading="lazy">
      <p className="mainTextHM">
        {jsonData[0].Main}
      </p>
    </div>
  );
}

export default HomeMainSection;
