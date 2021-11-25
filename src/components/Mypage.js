import React from "react";
import styled from "styled-components";

const Chart = styled.div`
  display: flex;
  justify-content: center;
  height: 261px;
  width: 100%;
  border-radius: 0px;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  height: 24px;
  width: 100%;
  font-size: 20px;
`;
const Mypage = () => {
  return (
    <div>
      <Chart>그래프 그릴거고..</Chart>
      <Text>'사용자'님의 거북목 평균 횟수는 6.7회입니다.</Text>
    </div>
  );
};
export default Mypage;
