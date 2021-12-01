import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Text = styled.div`
  text-align: center;
`

const Mypage = () => {
  return (
    <>
      <Line
        id="chart"
        width="1000px"
        height="500px"
        data={{
          labels: ["sun", "mon", "tue", "wed", "thur", "fri", "sat"],
          datasets: [
            {
              label: "average of alarm",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{ responsive: false }}
        />
        <Text><br/>사용자님의 거북목 평균 횟수는 6.7회입니다.</Text>
    </>
  );
};

export default Mypage;
