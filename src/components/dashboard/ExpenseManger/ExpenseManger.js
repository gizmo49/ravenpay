import React, { useState } from 'react';
import TabbedWrapperHeader from 'components/ui/TabbedWrapperHeader/TabbedWrapperHeader';
import Empty from 'components/ui/Empty/Empty';


const ExpenseManger = () => {
    const routeTabs = [
        {
            id: "open-orders",
            title: "Open Orders"
        },
        {
            id: "positions",
            title: "Positions"
        },
        {
            id: "order-history",
            title: "Order History"
        },
        {
            id: "trade-history",
            title: "Trade History"
        }
    ]

    const [currentTab, setCurrentTab] = useState(routeTabs[0].id)

    return (
        <div className="cc__card mb-5">
            <TabbedWrapperHeader
                tabbedRoutes={routeTabs}
                handleClick={(val) => {
                    setCurrentTab(val)
                }}
                activeElement={currentTab}
            />
            <div className='render__wrapper'>
                <div className="row justify-content-center">
                    <div className="col-md-6 my-5">
                    <Empty headline={routeTabs.find(({ id }) => (id === currentTab))?.title} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpenseManger;