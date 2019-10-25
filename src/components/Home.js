import React,{Component} from 'react';
import axios from 'axios';
import ScoreChat from './ScoreChat'

const API_URL = "https://latelier.co/data/cats.json"

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
                images: [
                    {
                        "url": "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
                        "id": "MTgwODA3MA"
                    },
                    {
                        "url": "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
                        "id": "tt"
                    },
                    {
                        "url": "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
                        "id": "bmp"
                    }]
            , 
            chatgauche:{
                "url":"",
                "id":""
            }, 
            chatdroite:{
                "url":"",
                "id":""
            },
            scores:[]};
    }

    UNSAFE_componentWillMount(){
        this.initChats();
    }

    initChats(){
        // axios.get(`${API_URL}`,{headers:{crossDomain: true}}).then(response => {
        //     // this.setState({chats:response.images})
        //     console.log(response)
        // }).catch(error => {console.log('error:',error)})

        //choix chat gauche
        const chats = [...this.state.images];
        let choixgauche = Math.floor(Math.random() * Math.floor(chats.length));
        let chatgauche = chats[choixgauche];

        //on retire le chat de gauche pour ne pas l'avoir de nouveau à droite
        chats.splice(choixgauche,1);

        //choix chat droite
        let choixdroite = Math.floor(Math.random() * Math.floor(chats.length));
        let chatdroite = chats[choixdroite];

        // maj du state
        this.setState({chatgauche, chatdroite});

    }

    handleClickLeft(){
        let scores = [...this.state.scores];
        let id = this.state.chatgauche.id;
        const index = scores.findIndex(element => element.id === id);
        if (index === -1){
            scores.push({"id":id, "score":1});
        } else {
            scores[index].score += 1;
        }

        this.setState({scores});
        this.initChats();
    }

    handleClickRight(){
        let scores = [...this.state.scores];
        let id = this.state.chatdroite.id;
        const index = scores.findIndex(element => element.id === id);
        if (index === -1){
            scores.push({"id":id, "score":1});
        } else {
            scores[index].score += 1;
        }

        this.setState({scores});
        this.initChats();
    }


    


    render(){
        return (
            <div className="presentationchats">
                <div className="gauche">
                    <img alt={this.state.chatgauche.id} src={this.state.chatgauche.url} onClick={this.handleClickLeft.bind(this)}></img>
                    <ScoreChat listeScores={this.state.scores} id={this.state.chatgauche.id}/>
                </div>
                <div className="droite">
                    <img alt={this.state.chatdroite.id} src={this.state.chatdroite.url} onClick={this.handleClickRight.bind(this)}></img>
                    <ScoreChat listeScores={this.state.scores} id={this.state.chatdroite.id}/>
                </div>
            </div>
        )
    }
}

export default Home;