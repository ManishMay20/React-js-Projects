import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [currentDice, setCurrentDice] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const RandomNumber = Math.floor(Math.random() * (7 - 1) + 1);
    setCurrentDice(RandomNumber);
    if (selectedNumber == RandomNumber)
      setTotalScore((prev) => prev + RandomNumber);
    else setTotalScore((prev) => prev - 2);
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setTotalScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 20px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
