import React from 'react';
import BtcUSDTBalance from './BtcUSDTBalance/BtcUSDTBalance';
import MarketInfo from './MarketInfo/MarketInfo';
import { marketInfoType } from './MarketInfo/enum';

const WalletBalanceGroup = () => {

    const marketData = [
        {
            type: marketInfoType?.CHANGE_INFO,
            tag: `24h change`,
            value: `520.80 +1.25%`,
            gain: true
        },
        {
            type: marketInfoType?.HIGH_INFO,
            tag: `24h High`,
            value: `520.80 +1.25%`
        },
        {
            type: marketInfoType?.LOW_INFO,
            tag: `24h Low`,
            value: `520.80 +1.25%`,
        },
        {
            type: marketInfoType?.VOLUME_INFO,
            tag: `24h Volume`,
            value: `520.80 +1.25%`,
        }

    ]

    return (
        <section>
            <div className='cc__card'>
                <div className="row">
                    <div className="col-xl-3 col-lg-4">
                        <BtcUSDTBalance />
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="row market__row">
                            {
                                marketData.map((mkData, index) => {
                                    return (
                                        <div className="col-md-3 col-6">
                                            <MarketInfo
                                                type={mkData?.type}
                                                tag={mkData?.tag}
                                                infoValue={mkData?.value}
                                                gain={mkData?.gain}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WalletBalanceGroup;