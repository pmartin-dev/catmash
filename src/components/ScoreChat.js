import React from 'react'


const ScoreChat = (props) => {

    let score = 0;
    const {id, listeScores} = props;
    const index = listeScores.findIndex(element => element.id === id)

    if (index !== -1){
        score = listeScores[index].score;
    }


    return(
        <p className="scorenote">{score} <i className="fas fa-heart"></i></p>
    )
}


export default ScoreChat;