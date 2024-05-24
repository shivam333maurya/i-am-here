"use client";
import { Fragment } from "react";
import { WelcomePage } from "@/components/pages";
import { Card } from "@/components/ui";

export default function Welcome() {
  const cardsData = [
    {
      title: "Card Title 1",
      description: "This is a description for card 1.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Card Title 2",
      description: "This is a description for card 2.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Card Title 3",
      description: "This is a description for card 3.",
      imageUrl: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];
  return (
    <Fragment>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-4 bg-gray-900">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </div>
      <WelcomePage />
    </Fragment>
  );
}
