import React from 'react';
import './App.css';
import Menu  from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Score from './components/Score'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>
        <Route exact path='/' component={Home} />
        <Route path='/score' component={Score} />
      </div>
    </BrowserRouter>
  );
}

export default App;
