import React, { useState, useEffect } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'
import axios from 'axios'

function Analytics() {
    const [products, setProducts] = useState([]);
    const [snum, setSnum] = useState();
    const [gnum, setGnum] = useState()
    const [anum, setAnum] = useState()
    const [vnum, setVnum] = useState()

    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        const S_Num = [];
        const G_Num = [];
        const A_Num = [];
        const V_Num = [];
        axios.get('http://localhost:8000/products/total')
            .then((response) => {
                const data = response.data
                setProducts(data);
                for (let index = 0; index < data.length; index++) {
                    if (data[index].type === "simple") {
                        S_Num.push("simple")                        
                    }
                    if (data[index].type === "grouped") {
                        G_Num.push("grouped")                        
                    }
                    if (data[index].type === "external") {
                        A_Num.push("external")                        
                    }
                    if (data[index].type === "variable") {
                        V_Num.push("variable")                        
                    }
                }
                setSnum(S_Num.length);  
                setGnum(G_Num.length);
                setAnum(A_Num.length);
                setVnum(V_Num.length);
            })
    }
    const totalNum = snum + gnum + anum + vnum;
    const snum_percent = ((snum/totalNum) * 100).toFixed(1);
    const gnum_percent = ((gnum/totalNum) * 100).toFixed(1);
    const anum_percent = ((anum/totalNum) * 100).toFixed(1);
    const vnum_percent = ((vnum/totalNum) * 100).toFixed(1);
   
    const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title:{
            text: "Products Overview"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: snum_percent, label: "Simple" },
                { y: gnum_percent, label: "Gruped" },
                { y: anum_percent, label: "Affiliate" },
                { y: vnum_percent, label: "Variant" },
            ]
        }]
    }
    return (
    <div>
        <CanvasJSChart options = {options} />
    </div>
    );
}

export default Analytics
