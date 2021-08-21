import React, { Component } from 'react'
import './App.css';
import Game from './Game'



const colors = ['#FFD9DA', '#EA638C', '#89023E', '#30343F', '#1B2021']

class App extends Component {
  render(){
    return (
      <div>
        <h1>Color Boxes</h1>
        <Game allColors={colors} />
      </div>
    )
  }
}

export default App;
