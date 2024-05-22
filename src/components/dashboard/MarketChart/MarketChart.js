import React from 'react';
import Chart from 'components/ui/Chart/Chart';
import RecentOrderTrades from '../RecentOrderTrades/RecentOrderTrades';

const MarketChart = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-8">
                    <Chart />
                </div>
                <div className="col-md-4 ps-lg-0">
                    <RecentOrderTrades />
                </div>
            </div>
        </section>
    );
};

export default MarketChart;