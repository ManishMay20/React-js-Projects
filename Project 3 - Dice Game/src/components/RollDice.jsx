import React, { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  console.log(currentDice);
  return (
    <DiceConatiner>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/Dices/dice_${currentDice}.png`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceConatiner>
  );
};

export default RollDice;

const DiceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
    margin: 0px;
  }
  .dice {
    cursor: pointer;
  }
`;
