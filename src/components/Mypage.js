import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

const Mypage = () => {
  return (
<Line id="chart" width="1000px" height="500px"
  data={{
    labels: ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }}
  options={{ responsive: false}}
/>
  )
}

export default Mypage;