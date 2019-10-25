import React from 'react';
import './App.css';
import Menu  from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Score from './components/Score';


class App extends React.Component {
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

  handleInitChat(chatgauche, chatdroite){
    this.setState({chatgauche, chatdroite});
  }

  handleClickLeft(scores){
    this.setState({scores})
  }

  handleClickRight(scores){
    this.setState({scores})
  }
 

  render(){

    return (
      <BrowserRouter>
        <div className="App">
          <Menu/>
          <Route exact path='/' render={(props) => <Home {...props} component={Home} state={this.state} initChats={this.handleInitChat.bind(this)} clickRight={this.handleClickRight.bind(this)} clickLeft={this.handleClickLeft.bind(this)}/>} />
          <Route path='/score' component={Score}/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
