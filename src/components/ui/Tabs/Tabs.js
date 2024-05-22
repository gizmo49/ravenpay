import React from 'react';
import "./Tabs.scss";


const Tabs = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <div className="tab__group">
            {
                tabs.map(({ label, value }, index) => (
                    <div className={`tab__group--item ${activeTab === value ? 'active' : ''}`} key={index}>
                        <span onClick={() => setActiveTab(value)}>{label}</span>
                    </div>
                ))
            }
        </div>

    );
};

export default Tabs;