import React from 'react'
import { Line } from '@ant-design/charts';

export default function Chart() {
    const data = [
        { day: '2021-03-28', value: 3 },
        { day: '2021-03-29', value: 4 },
        { day: '2021-03-30', value: 7 },
        { day: '2021-03-31', value: 5 },
        { day: '2021-04-01', value: 8 },
        { day: '2021-04-02', value: 6 },
        { day: '2021-04-03', value: 7 },
        { day: '2021-04-04', value: 9 },
        { day: '2021-04-05', value: 11 },
      ];
    
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
            <h3 className = "text-center mb-spt font-normal">Everyday Visitors</h3>
            <Line {...config} />
        </div>
    ) 
}
