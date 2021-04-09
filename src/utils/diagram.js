import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { day: '2021-03-30', sale: 2.525 },
  { day: '2021-03-31', sale: 3.018 },
  { day: '2021-04-01', sale: 3.682 },
  { day: '2021-04-02', sale: 4.440 },
  { day: '2021-04-03', sale: 5.310 },
  { day: '2021-04-04', sale: 6.127 },
  { day: '2021-04-05', sale: 6.930 },
];
console.log(data[0].day);

export default class Diagram extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div className = "px-4 py-4 mx-3 my-3 bg-white">
          <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="sale"
            argumentField="day"
          />
          <Title text="Everyday Sales for This Week" />
          <Animation />
        </Chart>
      </Paper>
      </div>
    );
  }
}