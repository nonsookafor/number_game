import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"



class App extends Component {
  state = { 
    disable1: false,
    disable2: false,
    num1: 0,
    num2: 0,
    count1: 0,
    count2: 0,
    total: 0
   }

  randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  handleFirst = () => {
    console.log("increment", this.state.count1, this.state.count2)
    const number = this.randomNumber(1, 10)
    this.setState({num1: number})
    const summ = this.state.total + number
    this.setState({total: summ, count1: this.state.count1 + 1})
    if (this.state.count1 ===9) {
      this.setState({disable1: true})
    }
   }

  handleSecond = () => {
    console.log("decrement", this.state.count1, this.state.count2)
    const number = this.randomNumber(1, 10)
    this.setState({num2: number, total: this.state.total - number})
    this.setState({count2: this.state.count2 + 1})
    if (this.state.count2 ===9) {
      this.setState({disable2: true})
    }
   }
  

  printMessage = () => {
    if ((this.state.total === 0) && (this.state.disable1 === true) && (this.state.disable2 === true)) {
      return <h2 id="size">No one won</h2>;
    }
    if ((this.state.total > 0) && (this.state.disable1 === true) && (this.state.disable2 === true)) {
      return <h2 id="size">Player 1 won</h2>;
    }
    if ((this.state.total < 0) && (this.state.disable1 === true) && (this.state.disable2 === true)) {
      return <h2 id="size">Player 2 won</h2>;
    }
  }

  render() { 
    return ( 
      <div>
        <div id="first">
          <h1>Total<p class="badge m-4 badge-primary">{this.state.total}</p></h1>
        </div>
        <div id="second">
          <h1 id="forth">Player1</h1><span class="badge m-4 badge-primary">{this.state.num1}</span>
          <button type="button" onClick={this.handleFirst} disabled={this.state.disable1} class="btn btn-secondary"><span>Increment</span></button>
        </div>
        <div id="third">
          <h1 id="fifth">Player2</h1><span class="badge m-4 badge-primary">{this.state.num2}</span>
          <button type="button" onClick={this.handleSecond} disabled={this.state.disable2} class="btn btn-secondary"><span>Decrement</span></button>
        </div>
        <div>{this.printMessage()}</div>
      </div>
    );
  }
}
 
export default App;
