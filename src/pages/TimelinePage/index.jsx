import React, { useState, useEffect } from "react";
import { Timeline, TimelineCard } from "../../components";
import "./index.css";

const TimelinePage = () => {
  const [cards, setCards] = useState([]);
  const [dots, setDots] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    async function loadCards() {
      const response = await fetch("http://localhost:3000/games/timeline");
      const cardData = response.json();
      setCards(cardData);
    }
    loadCards();
  }, []);

  function displayCards() {
    return cards.map((card) => (
      <TimelineCard
        key={card}
        id={card.id}
        order={card.order}
        imgPath={card.imgPath}
        date={card.date}
        description={card.description}
      />
    ));
  }

  return (
    <main className="timeline-main">
      <Timeline dots={dots} setDots={setDots} />
      <div className="card-container">{displayCards()}</div>
    </main>
  );
};

export default TimelinePage;
