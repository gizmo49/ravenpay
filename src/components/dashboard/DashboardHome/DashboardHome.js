import React from 'react';
import WalletBalanceGroup from '../WalletBalanceGroup/WalletBalanceGroup';
import MarketChart from '../MarketChart/MarketChart';
import BuySellCrypto from '../BuySellCrypto/BuySellCrypto';
import ExpenseManger from '../ExpenseManger/ExpenseManger';


const DashboardHome = () => {
    return (
        <>
            <WalletBalanceGroup />
            <div className="row">
                <div className="col-lg-9">
                    <MarketChart />
                    <ExpenseManger />
                </div>
                <div className="col-lg-3 ps-md-0">
                    <BuySellCrypto />
                </div>
            </div>
        </>
    );
};

export default DashboardHome;