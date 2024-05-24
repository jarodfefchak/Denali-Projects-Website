import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Results() {
    const [hasBeenVisible, setHasBeenVisible] = useState({ first: false, second: false, third: false });

    return (
        <div style={background}>
            <p style = {{fontSize:"60pt",margin:"50px",}}><b>Our Results</b></p>
            <div style={stats}>
                <div style = {counter}>
                <CountUp end={hasBeenVisible.first ? 2586 : 0} duration={8}>
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
                <p>Projects to Date</p>
                </div>
                <div style = {counter}>
                <CountUp end={hasBeenVisible.second ? 53 : 0} duration={4} >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor
                            onChange={(isVisible) => {
                                if (isVisible && !hasBeenVisible.second) {
                                    setTimeout(() => {
                                        start();
                                        setHasBeenVisible((prev) => ({ ...prev, second: true }));
                                    },250);
                                }
                            }}
                            delayedCall
                        >
                            <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                     
                </CountUp>
                <p>Successful Partnerships</p>
                </div>
                <div style = {counter}>
                    <CountUp end={hasBeenVisible.third ? 96 : 0} duration={6} formattingFn={(value) => `${value}%`}>
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
                <p>Retention Rate</p>
                </div>
            </div>
        </div>
    );
}

export default Results;

const background = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#6a696b',
    color:"white",
};

const stats = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:"50px",
};

const counter ={
    flexDirection:"column",
    textAlign:"center",
    fontSize:"30pt"
};
