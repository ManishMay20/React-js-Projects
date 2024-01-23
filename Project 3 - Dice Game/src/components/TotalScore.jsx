import React from "react";
import styled from "styled-components";

const TotalScore = ({ totalScore }) => {
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  width: 300px;
  text-align: center;
  line-height: 0px;
  h1 {
    font-size: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
