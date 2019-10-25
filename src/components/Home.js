import React,{Component} from 'react';
import axios from 'axios'

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
            }};
    }

    UNSAFE_componentWillMount(){
        this.initChats();
    }

    initChats(){
        console.log(this.state.images)
        // axios.get(`${API_URL}`,{headers:{crossDomain: true}}).then(response => {
        //     // this.setState({chats:response.images})
        //     console.log(response)
        // }).catch(error => {console.log('error:',error)})

        //choix chat gauche
        const chats = [...this.state.images];
        let choixgauche = Math.floor(Math.random() * Math.floor(chats.length));
        let chatgauche = chats[choixgauche];

        //choix chat droite
        let choixdroite = Math.floor(Math.random() * Math.floor(chats.length));
        let chatdroite = chats[choixdroite];

        //on évite d'avoir le même chat à gauche et à droite
        while(choixgauche === choixdroite){
            choixdroite = Math.floor(Math.random() * Math.floor(chats.length));
            chatdroite = chats[choixdroite];
        }

        // maj du state
        this.setState({chatgauche, chatdroite});

    }



    render(){
        return (
            <div className="presentationchats">
                <div className="gauche"><img alt={this.state.chatgauche.id} src={this.state.chatgauche.url}></img></div>
                <div className="droite"><img alt={this.state.chatdroite.id} src={this.state.chatdroite.url}></img></div>
            </div>
        )
    }
}

export default Home;