import React from 'react';
import "./ChartToolTip.scss";

const ChartToolTip = ({ toolTipData }) => {
    return (
        <div className='chart__tooltip'>
               <div className='chart__tooltip--tip'>
                BTC/USDT
            </div>
            <div className='chart__tooltip--tip'>
                O: <span>{toolTipData[0]}</span>
            </div>
            <div className='chart__tooltip--tip'>
                H: <span>{toolTipData[1]}</span>
            </div>

            <div className='chart__tooltip--tip'>
                L: <span>{toolTipData[2]}</span>
            </div>

            <div className='chart__tooltip--tip'>
                C: <span>{toolTipData[3]}</span>
            </div>
        </div>
    );
};

export default ChartToolTip;