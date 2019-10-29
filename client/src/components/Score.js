import React from "react";
import ScoreChatFiltred from "./ScoreChatFiltred";

class Score extends React.Component {
  render() {
    const renderScore = element => {
      return (
        <div>
          <ScoreChatFiltred
            listeScores={this.props.state.scores}
            chat={element}
          />
        </div>
      );
    };

    return (
      <div>
        <h1>Scores</h1>
        <ul>
          {this.props.state.images.map(element => (
            <li key={element.id}>{renderScore(element)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Score;
