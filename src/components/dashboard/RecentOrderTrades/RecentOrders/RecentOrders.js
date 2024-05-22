import { imageLinks } from 'assets/images';
import axios from 'axios';
import { marketInfoType } from 'components/dashboard/WalletBalanceGroup/MarketInfo/enum';
import { Table } from 'components/ui/Table/Table';
import React, { useEffect, useState } from 'react';
import { getErrorMessage } from 'utils/helper';
import SVG from 'react-inlinesvg';
import OrdersFilters from 'components/ui/OrdersFilters/OrdersFilters';

const { HIGH_INFO } = marketInfoType;
const RecentOrders = () => {

    const [orderData, setOrderData] = useState([]);
    const [tableIsLoading, setTableIsLoading] = useState(false);
    const [errorMssg, setErrorMssg] = useState();


    const tableHeaders = [
        <>
            Price<br />
            <span>(USDT)</span>
        </>,
        <>
            Amounts<br />
            <span>(BTC)</span>
        </>,
        <>
            Total<br />
            <span className='d-visibility-none'>A</span>
        </>
    ];

    const tableData = orderData.map((order, index) => ({
        high: <span className='loss'>{order.high}</span>,
        email: <span data-parent-class={`${order.open > order.close ? 'loss__td' : ""}`}>{order.low}</span>,
        status: <span data-parent-class={`${order.open > order.close ? 'loss__td' : ""}`}>{order.open}</span>,
    }));
    const tableData2 = orderData.map((order) => ({
        high: <span data-parent-class={`${order.open > order.close ? 'gain__td' : ""}`} className='gain'>{order.open}</span>,
        email: <span data-parent-class={`${order.open > order.close ? 'gain__td' : ""}`}>{order.low}</span>,
        status: <span>{order.high}</span>,
    }));


    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                setErrorMssg();
                setTableIsLoading(true);

                const defaultOptions = {
                    fsym: "BTC",
                    tsym: "USDT",
                    limit: 4
                }
                const url = `https://min-api.cryptocompare.com/data/v2/histominute`

                const res = await axios.get(url, {
                    params: {
                        ...defaultOptions
                    }
                });
                if (res.status === 200) {
                    const apiData = res.data?.Data?.Data
                    setTableIsLoading(false);
                    setOrderData(apiData)
                }

            } catch (err) {
                setErrorMssg(getErrorMessage(err));
                setTableIsLoading(false);
            }

        }
        fetchOrderData()
    }, [])


    return (
        <div>
            <div className="mt-1">
                <OrdersFilters />
                <Table
                    headers={tableHeaders}
                    dataSource={tableData}
                    hasErrors={Boolean(errorMssg)}
                    isLoading={tableIsLoading}
                    tableError={errorMssg}
                />
                {!tableIsLoading && <div className='gain__neutral'>
                    <span className="gain">{orderData[0]?.high}</span>
                    <SVG
                        src={imageLinks?.icons?.[HIGH_INFO]}
                        className='icon'
                    />
                    <span className="neutral">
                        {orderData[0]?.open}
                    </span>
                </div>
                }

                <Table
                    headers={[]}
                    dataSource={tableData2}
                    hasErrors={Boolean(errorMssg)}
                    isLoading={tableIsLoading}
                    tableError={errorMssg}
                />
            </div>
        </div>
    );
};

export default RecentOrders;