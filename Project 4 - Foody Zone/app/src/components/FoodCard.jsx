import React from "react";

import { API_URL } from "../App";
import styled from "styled-components";

const FoodCard = ({ data: foods }) => {
  // {
  //     "name": "Boilded Egg",
  //     "price": 10,
  //     "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  //     "image": "/images/egg.png",
  //     "type": "breakfast"
  //   },
  return (
    <CardStyle>
      <div className="img">
        <img src={API_URL + foods.image} />
      </div>
      <div className="sec2">
        <h2>{foods.name}</h2>
        <p>{foods.text}</p>
        <div className="btn">
          <button>$ {foods.price}</button>
        </div>
      </div>
    </CardStyle>
  );
};

export default FoodCard;

const CardStyle = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid white;
  width: 340px;
  height: 167;
  border-radius: 19.45px;
  padding: 10px;

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.2)
  );

  .img {
    width: 233px;
  }
  img {
    object-fit: cover;
    width: 100%;
    heigth: 100%;
  }
  .btn {
    display: flex;
    justify-content: end;
  }
  button {
    padding: 8px 18px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    margin-top: 10px;
  }
`;
