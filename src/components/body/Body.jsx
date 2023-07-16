import React from "react";
import "./body.css";

const cardData = [
  {
    id: 1,
    image: "image1.jpg",
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: "image2.jpg",
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "image3.jpg",
    title: "Card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: "image4.jpg",
    title: "Card 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: "image5.jpg",
    title: "Card 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: "image6.jpg",
    title: "Card 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    image: "image7.jpg",
    title: "Card 7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    image: "image7.jpg",
    title: "Card 8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    image: "image7.jpg",
    title: "Card 9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

function Body() {
  return (
    <div className="card_body">
      <div className="card-container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.image} alt={`Image ${card.id}`} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
