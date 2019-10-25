import React from 'react'


const ScoreChat = (props) => {

    let score = 0;
    const {id, listeScores} = props;
    const index = listeScores.findIndex(element => element.id === id)

    if (index !== -1){
        score = listeScores[index].score;
    }


    return(
        <p>Score: {score}</p>
    )
}


export default ScoreChat;