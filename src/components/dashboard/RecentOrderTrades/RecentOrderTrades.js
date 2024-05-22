import React, { useState } from 'react';
import TabbedWrapperHeader from 'components/ui/TabbedWrapperHeader/TabbedWrapperHeader';
import RecentOrders from './RecentOrders/RecentOrders';
import RecentTrades from './RecentTrades/RecentTrades';

const routeTabs = [
    {
        id: "recent-orders",
        title: "Order Book"
    },
    {
        id: "recent-trades",
        title: "Recent Trades"
    }
]

const RecentOrderTrades = () => {

    const [currentTab, setCurrentTab] = useState(routeTabs[0].id)
  

    const renderBasedOnTab = () => {
        switch (currentTab) {
            case "recent-orders":
                return <RecentOrders />
            case "recent-trades":
                return <RecentTrades />
            default:
                return ""
        }
    }

    return (
        <div className="cc__card">
            <TabbedWrapperHeader
                tabbedRoutes={routeTabs}
                handleClick={(val) => {
                    setCurrentTab(val)
                }}
                activeElement={currentTab}
            />
            <div className='render__wrapper'>
                {renderBasedOnTab()}
            </div>
        </div>
    );
};

export default RecentOrderTrades;