import React from 'react';
import "./ChartControl.scss";

const scheduleRange = [
    {
        label: "1H",
        value: "M"
    },
    {
        label: "2H",
        value: "2H"
    },
    {
        label: "4H",
        value: "4H"
    },
    {
        label: "1D",
        value: "D"
    },
    {
        label: "1W",
        value: "W"
    },
    {
        label: "1M",
        value: "MNT"
    }
]

const ChartControl = ({ activeSchedule, setActiveSchedule }) => {
    return (
        <div className="chart__control--group">
            <div className='chart__time'>
                <div className='chart__time--tip px-0'>
                    Time
                </div>
                {
                    scheduleRange.map(({ label, value }, index) => (
                        <div className={`chart__time--tip ${activeSchedule === value ? 'active' : ''}`} key={index}>
                            <span onClick={() => setActiveSchedule(value)}>{label}</span>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default ChartControl;