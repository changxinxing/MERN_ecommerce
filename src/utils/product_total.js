import React, { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import {totalproducts} from '../Actions/index'
import { PieChart } from 'react-minimal-pie-chart';

export default function ProductTotal() {
    const dispatch = useDispatch();
    const [productdata, setProductData] = useState([{title:'',value:0,label:0},{title:'',value:0,label:0},{title:'',value:0,label:0},{title:'',value:0,label:0}])
    useEffect(()=>{
        dispatch(totalproducts())
        .then((res)=>{
            setProductData(res.payload);
        })
    },[productdata])
    return (
        <div>
            <PieChart data={[
                { title: productdata[0].name, value: productdata[0].total, label: 1, color: '#E38627' },
                { title: productdata[1].name, value: productdata[1].total, label: 2, color: '#C13C37' },
                { title: productdata[2].name, value: productdata[2].total, label: 3, color: '#6A2135' },
                { title: productdata[3].name, value: productdata[3].total, label: 4, color: '#6A2135' },]} style={{ height: '400px' }} />;
        </div>
    )
}
