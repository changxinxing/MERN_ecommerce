import React, { useEffect, useState } from 'react'
import { totalsale } from '../Actions/index'
import { useDispatch } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

export default function Saletotals() {
    const dispatch = useDispatch();
    const [salesdata, setSalesdata] = useState([]);
    useEffect(() => {
        dispatch(totalsale())
            .then((res) => {
                let date_obj = new Date();
                let date = date_obj.getDate();
                let date_last = date - 5;
                let month = date_obj.getMonth() + 1;
                let year = date_obj.getFullYear();
                var data = [];
                for (var i = 0; i < 6; i++) {
                    if(date_last >9){
                        data[i] = { day: year + "-0" + month + "-" + date_last, sale: parseInt(res.payload[0].totals[year + "-0" + month + "-" + date_last].sales, 10) };
                    }
                    else{
                        data[i] = { day: year + "-0" + month + "-0" + date_last, sale: parseInt(res.payload[0].totals[year + "-0" + month + "-0" + date_last].sales, 10) };
                    }
                    date_last = date_last + 1;
                }
                setSalesdata(data);
            })
    }, [salesdata])
    return (
        <div className="px-4 py-4 mx-3 my-3 bg-white">
            <Paper>
                <Chart data={salesdata}>
                    <ArgumentAxis />
                    <ValueAxis max={7000} />
                    <BarSeries valueField="sale" argumentField="day" />
                    <Title text="Everyday Sales for This Week" />
                    <Animation />
                </Chart>
            </Paper>
        </div>
    )
}
