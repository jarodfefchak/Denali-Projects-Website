import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Results.css';

function Results() {
    const [hasBeenVisible, setHasBeenVisible] = useState({ first: false, second: false, third: false });

    return (
        <div style={background}>
            <p className="titleR"><b>Our Results</b></p>
            <div className="statsR">
                <div className="counterR">
                    <div className="countR">
                        <CountUp end={hasBeenVisible.first ? 2586 : 0} duration={6}>
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
                    <p className="descriptionR">Projects to Date</p>
                </div>
                <div className="counterR">
                    <div className="countR">
                        <CountUp end={hasBeenVisible.second ? 53 : 0} duration={4}>
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
                    <p className="descriptionR">Successful Partnerships</p>
                </div>
                <div className="counterR">
                    <div className="countR">
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
                    </div>
                    <p className="descriptionR">Retention Rate</p>
                </div>
            </div>
        </div>
    );
}

export default Results;

const background = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#404040',
    color: "#f5f5f5",
};
