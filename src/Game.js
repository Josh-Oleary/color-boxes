import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import './Game.css'

class Game extends Component {
   static defaultProps = {
       numBoxes: 18
   }
    render() {
         const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Box allColors={this.props.allColors} />
         ))
        return (
            <div className='BoxContainer'>{boxes}</div>
        )
         
    }

}

Game.propTypes = {
    colors: PropTypes.array.isRequired,
}

export default Game;