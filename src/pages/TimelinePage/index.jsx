import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Timeline, TimelineCard } from "../../components";

import "./index.css";

const TimelinePage = () => {
  const [cards, setCards] = useState([]);
  const [dots, setDots] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function loadGame() {
      const response = await fetch(`http://localhost:5432/games/timeline/${id}`);
      const gameData = await response.json();
      console.log("game data", gameData);
      const cardData = gameData.cards;
      setCards(cardData);
      console.log("cards", cards);
    }
    loadGame();
  }, []);

  function displayCards() {
    return cards.map((card) => (
      <TimelineCard
        key={card}
        id={card.card_id}
        order={card.card_order}
        imgPath={card.card_img_path}
        date={card.card_date}
        description={card.card_description}
      />
    ));
  }

  return (
    <main className="timeline-main">
      <Timeline dots={dots} setDots={setDots} />
      {displayCards()}
    </main>
  );
};

export default TimelinePage;
