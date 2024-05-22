import React from "react";
import "./TabbedWrapperHeader.scss";

const TabbedWrapperHeader = ({ tabbedRoutes, activeElement, handleClick }) => {
    return (
        <div className='tabbed__header' role='tablist'>
            {tabbedRoutes.map((tab, index) => (
                <div
                    key={index}
                    className={`tabbed__element ${tab.id === activeElement ? 'active' : ''}`}
                    onClick={() => handleClick(tab.id)}>
                    <span>{tab.title}</span>
                </div>
            ))}
        </div>
    );
};

export default TabbedWrapperHeader;
