import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import axios from 'axios';
import './Results.css';

function Results() {
    const [hasBeenVisible, setHasBeenVisible] = useState({ first: false, second: false, third: false });
    const [jsonData, setJsonData] = useState(null);
    const [jsonData2, setJsonData2] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/data/Headings.json`);
            setJsonData(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/data/Results.json`);
            setJsonData2(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        fetchData();
      }, []);
    
      if (!jsonData || !jsonData2) {
        return <p>Loading data...</p>;
      }
    return (
        <div style={background}>
            <p className="titleR"><b>{jsonData[0].results}</b></p>
            <div className="statsR">
                <div className="counterR">
                    <div className="countR">
                        <CountUp end={hasBeenVisible.first ? jsonData2[0].number : 0} duration={20}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor
                                    onChange={(isVisible) => {
                                        if (isVisible && !hasBeenVisible.first) {
                                            setTimeout(() => {
                                                start();
                                                setHasBeenVisible((prev) => ({ ...prev, first: true }));
                                            }, 250);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </div>
                    <p className="descriptionR">{jsonData2[0].category}</p>
                </div>
                <div className="counterR">
                    <div className="countR">
                        <CountUp end={hasBeenVisible.second ? jsonData2[1].number : 0} duration={6}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor
                                    onChange={(isVisible) => {
                                        if (isVisible && !hasBeenVisible.second) {
                                            setTimeout(() => {
                                                start();
                                                setHasBeenVisible((prev) => ({ ...prev, second: true }));
                                            }, 250);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </div>
                    <p className="descriptionR">{jsonData2[1].category}</p>
                </div>
                <div className="counterR">
                    <div className="countR">
                        <CountUp end={hasBeenVisible.third ? jsonData2[2].number : 0} duration={8} formattingFn={(value) => `${value}%`}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor
                                    onChange={(isVisible) => {
                                        if (isVisible && !hasBeenVisible.third) {
                                            setTimeout(() => {
                                                start();
                                                setHasBeenVisible((prev) => ({ ...prev, third: true }));
                                            }, 250);
                                        }
                                    }}
                                    delayedCall
                                >
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                    </div>
                    <p className="descriptionR">{jsonData2[2].category}</p>
                </div>
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
