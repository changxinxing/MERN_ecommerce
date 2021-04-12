import React, { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import {totalproducts} from '../Actions/index'
import { CanvasJSChart } from 'canvasjs-react-charts'

export default function ProductTotal() {
    const dispatch = useDispatch();
    const [productdata, setProductData] = useState([{title:'',value:0,label:0},{title:'',value:0,label:0},{title:'',value:0,label:0},{title:'',value:0,label:0}])
    useEffect(()=>{
        dispatch(totalproducts())
        .then((res)=>{
            setProductData(res.payload);
        })
    },[productdata])
    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title:{
            text: "Products Statics"
        },
        data: [{
            type: "bar",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}</strong>",
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: productdata[0].total, label: "Affiliate" },
                { y: productdata[1].total, label: "Gruped" },
                { y: productdata[2].total, label: "Simple" },
                { y: productdata[3].total, label: "Variant" },
            ]
        }]
    }
    return (
        <div className = "px-4 py-4 mx-3 my-3 bg-white">
            <CanvasJSChart options = {options} />
        </div>
    )
}
