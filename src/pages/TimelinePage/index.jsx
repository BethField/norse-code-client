import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Timeline, TimelineCard } from "../../components";

import "./index.css";

const TimelinePage = () => {
  const [cards, setCards] = useState([]);
  const [dots, setDots] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const { id } = useParams();

  useEffect(() => {
    async function loadGame() {
      const response = await fetch(`http://localhost:5432/games/timeline/${id}`);
      const gameData = await response.json();
      const cardData = gameData.cards;
      setCards(cardData);
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
    <main className="timeline-page">
      <Typography sx={{ position: "absolute", color: "white", marginTop: "5px" }}>
        Place the cards in the correct order on the timeline
      </Typography>
      <div className="timeline-container">
        <Timeline dots={dots} setDots={setDots} />
      </div>
      <div className="card-container">
        <div className="card-scroll-box">{displayCards()}</div>
      </div>
    </main>
  );
};

export default TimelinePage;
