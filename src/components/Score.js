import React from 'react';
import ScoreChat from './ScoreChat';

class Score extends React.Component{


    render(){
        
        const renderScore = (element) => {
            return (
            <div>
                <img alt={element.id} src={element.url}></img>
                <ScoreChat listeScores={this.props.state.scores} id={element.id}/>
            </div>
            )}

        return(
            <div>
                <h1>Scores</h1>
                <ul>{this.props.state.images.map(element => 
                    <li key={element.id}>{renderScore(element)}</li>
                )}
                </ul>
            </div>
        )}
}

export default Score;