import React, { Component } from 'react'
import { choice } from './helpers'
import './Box.css'

class Box extends Component {
  state={
      color: choice(this.props.allColors)
  }
  changeColor = () => {
      let newColor;
      do{
        newColor = choice(this.props.allColors);
      } while (newColor === this.state.color);
      
      this.setState({ color: newColor })
  }
  handleClick = () => {
    this.changeColor()
  }
  render(){
      return (
          <div className='Box'
               style={ {backgroundColor: this.state.color} }
               onClick={this.handleClick}
          /> 
      )
  }
}

export default Box;