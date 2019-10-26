import React from 'react';
import ScoreChat from './ScoreChat';

class Score extends React.Component{

    constructor(props){
        super(props);
        console.log("state",this.props.state);
    }


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
                    <li>{renderScore(element)}</li>
                )}
                </ul>
            </div>
        )}
}

export default Score;