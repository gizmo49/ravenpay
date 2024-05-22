import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { unixToDate } from 'utils/helper';
import ChartToolTip from './ChartToolTip/ChartToolTip';
import ChartControl from './ChartControl/ChartControl';

const Chart = () => {
   
    const [candleStickData, setCandleStickData] = useState([]);
    const [barchatData, setBarChatData] = useState([]);
    const [toolTipData, setToolTipData] = useState([]);
    const [activeSchedule, setActiveSchedule] = useState("D")

    const options = {
        chart: {
            type: 'candlestick',
            height: 290,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        grid: {
            borderColor: "#1C2127",
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00C076',
                    downward: '#FF6838'
                }
            }
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13,
                color: '#555C63',
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true
            }
        },
        tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const wr = w?.config?.series?.[seriesIndex]?.data?.[dataPointIndex]
                setToolTipData(wr.y)
                return ''
            },
        },
    }
    // ohlc
    const series = [{
        data: candleStickData
    }]


    const seriesBar = [{
        name: 'volume',
        data: barchatData
    }];

    const optionsBar = {
        chart: {
            height: 160,
            type: 'bar',
            brush: {
                enabled: true,
                target: 'candles'
            },
            selection: {
                enabled: true,
                fill: {
                    color: '#ccc',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
            }
        },
        colors: [
            function ({ value, seriesIndex, w, dataPointIndex }) {
                const wr = w?.config?.series?.[seriesIndex]?.data?.[dataPointIndex]?.gain
                if (wr === true) {
                    return '#31413C'
                } else {
                    return '#4A2C25'
                }
            }
        ],
        grid: {
            borderColor: "#1C2127",
        },
        stroke: {
            width: 0
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13,
                color: '#555C63',
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: true
            }
        },
        yaxis: {
            opposite: true,
            labels: {
                show: true
            }
        }
    };



    useEffect(() => {
        const fetchExangeData = async () => {
            try {
                const defaultOptions= {
                    fsym: "BTC",
                    tsym: "USDT",
                    limit: 100
                }
                const urlPath = activeSchedule === "M" ?  "histominute" : (activeSchedule === "2H" || activeSchedule === "4H") ? "histohour" : "histoday";

                const url = `https://min-api.cryptocompare.com/data/v2/${urlPath}`
                const res = await axios.get(url, {
                    params: {
                        ...defaultOptions
                    }
                });
                if (res.status === 200) {
                    const candlestickData = [];
                    const barChatData = [];

                    const apiData = res.data?.Data?.Data
                    await apiData.forEach((dt) => {
                        candlestickData.push(
                            {
                                x: unixToDate(dt.time),
                                y: [dt.open, dt.high, dt.low, dt.close]
                            }
                        );
                        barChatData.push(
                            {
                                x: unixToDate(dt.time),
                                y: Math.round((dt.volumefrom) * 10) / 10,
                                gain: dt.open < dt.close
                            }
                        )
                    })
                    setCandleStickData(candlestickData);
                    setBarChatData(barChatData);

                    // console.log("data", Data);
                }
            } catch (error) {
                console.log("error", error)
            }

        }
        fetchExangeData()
    }, [activeSchedule])

    return (
        <div className="cc__card">
            <ChartControl {...{ activeSchedule, setActiveSchedule }} />
            <div class="chart-box">
                <ChartToolTip toolTipData={toolTipData} />
                <div id="chart-candlestick">
                    <ReactApexChart options={options} series={series} type="candlestick" height={290} />
                </div>
                <div id="chart-bar">
                    <ReactApexChart options={optionsBar} series={seriesBar} type="bar" height={160} />
                </div>
            </div>
        </div>
    );

}


export default Chart;