import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";
import axios from "axios";

const API_URL = "http://localhost:4000/";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getImages();
    this.getScores();

    this.state = {
      images: [
        {
          url: "http://24.media.tumblr.com/tumblr_m82woaL5AD1rro1o5o1_1280.jpg",
          id: "MTgwODA3MA"
        },
        {
          url: "http://24.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg",
          id: "tt"
        },
        {
          url: "http://25.media.tumblr.com/tumblr_m4bgd9OXmw1qioo2oo1_500.jpg",
          id: "bmp"
        }
      ],
      chatgauche: {
        url: "",
        id: ""
      },
      chatdroite: {
        url: "",
        id: ""
      },
      scores: []
    };
  }

  getImages() {
    axios
      .get(`${API_URL}images`)
      .then(response => {
        this.setState({ images: response.data });
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  getScores() {
    axios
      .get(`${API_URL}scores`)
      .then(response => {
        this.setState({ scores: response.data });
        console.log(this.state);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  increaseScore(id, newscore) {
    const options = { headers: { "X-Custom-Header": "value" } };

    axios
      .patch(`${API_URL}scores/${id}`, { score: newscore }, options)
      .then(response => {
        console.log("rep", response);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  addScore(id, newscore) {
    axios
      .post(`${API_URL}scores`, { score: newscore, id: id })
      .then(response => console.log("rep", response))
      .catch(error => {
        console.log("error:", error);
      });
  }

  handleInitChat(chatgauche, chatdroite) {
    this.setState({ chatgauche, chatdroite });
  }

  handleClickLeft(scores, id, newscore) {
    this.setState({ scores });

    if (newscore === 1) {
      this.addScore(id, newscore);
    } else {
      this.increaseScore(id, newscore);
    }
  }

  handleClickRight(scores, id, newscore) {
    this.setState({ scores });

    if (newscore === 1) {
      this.addScore(id, newscore);
    } else {
      this.increaseScore(id, newscore);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                component={Home}
                state={this.state}
                initChats={this.handleInitChat.bind(this)}
                clickRight={this.handleClickRight.bind(this)}
                clickLeft={this.handleClickLeft.bind(this)}
              />
            )}
          />
          <Route
            path="/score"
            render={props => (
              <Score {...props} component={Score} state={this.state} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
