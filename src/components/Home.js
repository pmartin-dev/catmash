import React,{Component} from 'react';
import axios from 'axios';
import ScoreChat from './ScoreChat'

const API_URL = "https://latelier.co/data/cats.json"

class Home extends React.Component {

    constructor(props){
        super(props);
        this.initChats();
    }
 

    initChats(){
        
        // axios.get(`${API_URL}`,{headers:{crossDomain: true}}).then(response => {
        //     // this.setState({chats:response.images})
        //     console.log(response)
        // }).catch(error => {console.log('error:',error)})

        //choix chat gauche
        const chats = [...this.props.state.images];
        let choixgauche = Math.floor(Math.random() * Math.floor(chats.length));
        let chatgauche = chats[choixgauche];

        //on retire le chat de gauche pour ne pas l'avoir de nouveau à droite
        chats.splice(choixgauche,1);

        //choix chat droite
        let choixdroite = Math.floor(Math.random() * Math.floor(chats.length));
        let chatdroite = chats[choixdroite];

        // maj du state
        this.props.initChats(chatgauche, chatdroite);
    }

    handleClickLeft(){
        let scores = this.props.state.scores;
        let id = this.props.state.chatgauche.id;
        const index = scores.findIndex(element => element.id === id);
        if (index === -1){
            scores.push({"id":id, "score":1});
        } else {
            scores[index].score += 1;
        }

        this.props.clickLeft(scores);
        this.initChats();
    }

    handleClickRight(){
        let scores = this.props.state.scores;
        let id = this.props.state.chatdroite.id;
        const index = scores.findIndex(element => element.id === id);
        if (index === -1){
            scores.push({"id":id, "score":1});
        } else {
            scores[index].score += 1;
        }

        this.props.clickRight(scores);
        this.initChats();
    }


    


    render(){

        return (
            <div className="presentationchats">
                <div className="gauche">
                    <img alt={this.props.state.chatgauche.id} src={this.props.state.chatgauche.url} onClick={this.handleClickLeft.bind(this)}></img>
                    <ScoreChat listeScores={this.props.state.scores} id={this.props.state.chatgauche.id}/>
                </div>
                <div className="droite">
                    <img alt={this.props.state.chatdroite.id} src={this.props.state.chatdroite.url} onClick={this.handleClickRight.bind(this)}></img>
                    <ScoreChat listeScores={this.props.state.scores} id={this.props.state.chatdroite.id}/>
                </div>
            </div>
        )
    }
}

export default Home;