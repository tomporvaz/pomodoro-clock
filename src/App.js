import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      running: false
    }
    this.timer = this.timer.bind(this);
    this.toggleRunning = this.toggleRunning.bind(this);
    this.reset = this.reset.bind(this);
  }

  //test setTimeout
  timer(){
    const timerID = setInterval(()=>{
      if(this.state.minutes > 0 && this.state.seconds > 0 && this.state.running){
        this.setState({
          seconds: this.state.seconds - 1
        })
      } else if(this.state.minutes > 0 && this.state.seconds === 0 && this.state.running){
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59
        })
      } 
      else {
        clearInterval(timerID)
      }
    }, 1000);
  }

  //toggle running
  toggleRunning(){
    if(this.state.running){
      console.log("running: " + this.state.running);
      this.setState({
        running: false
      })
    } else {
      console.log("running: " + this.state.running);  
      this.timer();
        this.setState({
          running: true
        })
      }
    }

  //reset button
  reset(){
    this.setState(
      {
        minutes: 25, //reset these numbers to variables available from state
        seconds: 0,
        running: false
      }
    )
  }

  
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Session minutes={this.state.minutes} seconds={this.state.seconds}/>
          <button id="start_stop" onClick={this.toggleRunning}>Start/Stop</button>
          <button id="reset" onClick={this.reset}>Reset</button>
        </header>
      </div>
    );
  }
}

function Session (props) {
  return (
    <div>
      <h3 id="timer-label">Session</h3>
      <h1 id="time-left">{props.minutes}:{("0" + props.seconds).slice(-2)}</h1>
    </div>
  );
}

export default App;
