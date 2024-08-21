import React, { useEffect, useState, useCallback } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import './Results.css';

function Results() {
  const [hasBeenVisible, setHasBeenVisible] = useState({ first: false, second: false, third: false });
  const [data, setData] = useState({ jsonData: null, jsonData2: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          axios.get(`/data/Headings.json`),
          axios.get(`/data/Results.json`)
        ]);
        setData({ jsonData: response1.data, jsonData2: response2.data });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleVisibilityChange = useCallback((isVisible, key) => {
    if (isVisible && !hasBeenVisible[key]) {
      setTimeout(() => {
        setHasBeenVisible(prev => ({ ...prev, [key]: true }));
      }, 250);
    }
  }, [hasBeenVisible]);

  if (loading) {
    return;
  }

  const { jsonData, jsonData2 } = data;

  return (
    <div style={background}>
      <p className="titleR"><b>{jsonData[0].results}</b></p>
      <div className="statsR">
        {jsonData2.map((item, index) => (
          <div className="counterR" key={index}>
            <div className="countR">
              <CountUp
                end={hasBeenVisible[index] ? item.number : 0}
                duration={index === 0 ? 15 : index === 1 ? 6 : 3}
                formattingFn={index === 2 ? value => `${value}%` : undefined}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor
                    onChange={isVisible => handleVisibilityChange(isVisible, index)}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p className="descriptionR">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;

const background = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#2e2e2e',
  color: "rgba(245, 245, 245, 0.938)",
};
