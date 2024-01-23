import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const NumberSelectorHandler = (value) => {
    console.log(value);
    setSelectedNumber(value);
    setError("");
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numbers.map((value, i) => {
          return (
            <Box
              isSelected={value == selectedNumber}
              key={i}
              onClick={() => NumberSelectorHandler(value)}
            >
              {value}
            </Box>
          );
        })}
      </div>
      <p>Select a number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    margin: 10px;
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div`
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
