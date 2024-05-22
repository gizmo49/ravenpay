import React, { useState } from 'react';
import TabbedWrapperHeader from 'components/ui/TabbedWrapperHeader/TabbedWrapperHeader';
import BuyCrypto from './BuyCrypto/BuyCrypto.js';
import Empty from 'components/ui/Empty/Empty';

const routeTabs = [
    {
        id: "buy",
        title: "Buy"
    },
    {
        id: "sell",
        title: "Sell"
    }
]

const BuySellCrypto = () => {

    const [currentTab, setCurrentTab] = useState(routeTabs[0].id)


    const renderBasedOnTab = () => {
        switch (currentTab) {
            case "buy":
                return <BuyCrypto />
            case "sell":
                return <Empty headline={'Sell Crypto'} />
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

export default BuySellCrypto;