import React from "react";

const ScoreChatFiltred = ({ chat, listeScores }) => {
  let score = 0;
  const index = listeScores.findIndex(element => element.id === chat.id);

  if (index !== -1) {
    score = listeScores[index].score;
  }

  return (
    <div>
      {score > 0 && (
        <div>
          <img alt={chat.id} src={chat.url}></img>
          <p className="scorenote">
            {score} <i className="fas fa-heart"></i>
          </p>
        </div>
      )}
    </div>
  );
};

export default ScoreChatFiltred;
