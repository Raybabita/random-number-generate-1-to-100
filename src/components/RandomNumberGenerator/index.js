// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onRandomNumber = () => {
    const randomNumberGenerate = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: randomNumberGenerate})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.onRandomNumber}
            >
              Generate
            </button>

            <p className="display-number">{randomNumber}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
