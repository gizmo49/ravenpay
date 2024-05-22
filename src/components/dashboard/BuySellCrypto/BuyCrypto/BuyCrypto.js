import React, { useState } from 'react';
import Empty from 'components/ui/Empty/Empty';
import BuyLimitForm from "./BuyLimitForm/BuyLimitForm.js";
import Tabs from 'components/ui/Tabs/Tabs.js';

const BuyCrypto = () => {
    const [activeTab, setActiveTab] = useState("limit")

    const tabs = [
        {
            label: "Limit",
            value: "limit"
        },
        {
            label: "Market",
            value: "market"
        },
        {
            value: "stop-limit",
            label: "Stop Limit"
        }
    ]

    const renderBasedOnTab = () => {
        switch (activeTab) {
            case "limit":
                return <BuyLimitForm />
            case "market":
                return <Empty headline={'Market'} />
            case "stop-limit":
                return <Empty headline={'Stop Limit'} />
            default:
                return ""
        }
    }
    return (
        <div>
            <Tabs {...{ activeTab, setActiveTab, tabs }} />
            <div>
                {renderBasedOnTab()}
            </div>
        </div>
    );
};

export default BuyCrypto;