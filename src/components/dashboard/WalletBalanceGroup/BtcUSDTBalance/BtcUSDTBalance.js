import { imageLinks } from 'assets/images';
import React from 'react';
import { ReactSVG } from 'react-svg';
import "./BtcUSDTBalance.scss";

const BtcUSDTBalance = () => {
    return (
        <div className='btc__balance'>
            <ReactSVG src={imageLinks?.images?.btc_usd} />
            <span>BTC/USDT</span>
            <ReactSVG src={imageLinks?.icons?.caretDown} />
            <span className="btc__balance--amount">
                $20,634
            </span>
        </div>
    );
};

export default BtcUSDTBalance;