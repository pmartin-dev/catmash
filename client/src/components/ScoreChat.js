import React from "react";

const ScoreChat = ({ id, listeScores }) => {
  let score = 0;
  const index = listeScores.findIndex(element => element.id === id);

  if (index !== -1) {
    score = listeScores[index].score;
  }

  return (
    <p className="scorenote">
      {score} <i className="fas fa-heart"></i>
    </p>
  );
};

export default ScoreChat;
