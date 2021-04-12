import React from 'react'
import { Line } from '@ant-design/charts';
import { CanvasJSChart } from 'canvasjs-react-charts'

export default function Chart() {
    const data = [
        { day: '2021-04-05', value: 5 },
        { day: '2021-04-06', value: 8 },
        { day: '2021-04-07', value: 6 },
        { day: '2021-04-08', value: 7 },
        { day: '2021-04-09', value: 9 },
        { day: '2021-04-10', value: 11 },
      ];

      const options = {
        theme: "dark2",
        animationEnabled: true,
        exportFileName: "New Year Resolutions",
        exportEnabled: true,
        title:{
            text: " "
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}</strong>",
            indexLabel: "{y} visitors",
            indexLabelPlacement: "inside",
            dataPoints: [
                { y: 7, label: '2021-04-05' },
                { y: 8, label: '2021-04-06' },
                { y: 7, label: '2021-04-07' },
                { y: 6, label: '2021-04-08' },
                { y: 9, label: '2021-04-09' },
                { y: 11, label: '2021-04-10' },
            ]
        }]
    }
    
      const config = {
        data,
        height: 400,
        xField: 'day',
        yField: 'value',
        point: {
          size: 9,
          shape: 'diamond',
        },
      };
    return(
      <div className = "px-4 py-4 mx-3 my-3 bg-white">
          <div>
              <h3 className = "text-center mb-spt font-normal">Everyday Visitors</h3>
              <Line {...config} />              
          </div>
          <div className = "mt-4">
            <CanvasJSChart options = {options} />
          </div>          
        </div>
    ) 
}
