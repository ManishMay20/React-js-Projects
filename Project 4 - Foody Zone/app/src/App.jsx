import "./App.css";
import styled from "styled-components";
import FoodCard from "./components/FoodCard";
import { useEffect, useRef, useState } from "react";

export const API_URL = "http://localhost:9000";

function App() {
  const [info, setInfo] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");
  useEffect(() => {
    fetchData();
  }, []);
  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue === "") setFilteredInfo(null);
    const filter = info?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredInfo(filter);
  };
  const filterFood = (type) => {
    if (type === "all") {
      setFilteredInfo(data);
      setSelectedBtn("all");
      return;
    }
    const filter = info?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredInfo(filter);
    setSelectedBtn(type);
  };

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setInfo(json);
    setFilteredInfo(json);
  };

  if (!info) return null;
  return (
    <>
      <MainContainer>
        <TopSection>
          <div className="logo">
            <img src="/images/Foody Zone.svg" alt="foody logo" />
          </div>
          <div>
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </TopSection>

        <ButtonSection>
          <Button onClick={() => filterFood("all")}>All</Button>
          <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button>
        </ButtonSection>
        <BodySection>
          <CardsContainer>
            {filteredInfo?.map((card) => (
              <FoodCard data={card} />
            ))}
          </CardsContainer>
        </BodySection>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div``;
const TopSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  input {
    background: transparent;
    border: 1px solid red;
    border-radius: 4px;
    color: white;
    padding: 10px 18px;
    font-size: 16px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 30px;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
`;

const BodySection = styled.div`
  background-image: url("/images/bg.png");
  height: calc(100vh - 170px);
  width: 100vw;
  background: cover;
`;

const CardsContainer = styled.div`
  max-width: 70%;
  padding-top: 30px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  gap: 10px;
`;
