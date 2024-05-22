import React from 'react';
import { imageLinks } from 'assets/images';
import SVG from 'react-inlinesvg';
import "./MarketInfo.scss";


const MarketInfo = ({ type, tag, infoValue, gain }) => {
    return (
        <div className='market__info'>
            <div className='market__info--top'>
                <SVG 
                    src={imageLinks?.icons?.[type]} 
                    className='icon'
                />
                <span>
                    {tag}
                </span>
            </div>
            <div className='market__info--bottom'>
                <span className={gain ? "gain" : ""}>
                    {infoValue}
                </span>
            </div>
        </div>
    );
};

export default MarketInfo;