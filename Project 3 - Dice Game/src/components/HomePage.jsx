import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  align-items: center;
  display: flex;

  .content {
    h1 {
      font-size: 96px;
      line-height: 10px;
    }
  }
  .btn {
    float: right;
  }
`;

const HomePage = ({ toggle }) => {
  return (
    <Wrapper>
      <div>
        <img src="/images/dices 1.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button className="btn" onClick={toggle}>
          PlayNow
        </Button>
      </div>
    </Wrapper>
  );
};

export default HomePage;
