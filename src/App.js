import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      breakLength: 5,
      sessionLength: 25,
      running: false
    }
    this.timer = this.timer.bind(this);
    this.toggleRunning = this.toggleRunning.bind(this);
    this.reset = this.reset.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
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
        minutes: 25, 
        seconds: 0,
        breakLength: 5,
        sessionLength: 25,
        running: false
      }
    )
  }

  /*need to update increment and decrement functions so break length and 
  session length update the minutes and seconds.  Minutes and seconds may
  need to be changed to breakMinutes and sessionMinutes.
  */
  decrementBreak() {
		if(this.state.breakLength > 1 && !this.state.running){
        this.setState({
        breakLength: this.state.breakLength - 1,
        minutes: this.state.breakLength - 1,
        seconds: 0
      })
    }
  }

  incrementBreak() {
    if(this.state.breakLength < 59){
      this.setState({
        breakLength: this.state.breakLength + 1
      })
    }
  }

  decrementSession() {
    if(this.state.sessionLength > 1){
      this.setState({
        sessionLength: this.state.sessionLength - 1
      })
    }
  }

  incrementSession() {
    if(this.state.sessionLength < 59){
      this.setState({
        sessionLength: this.state.sessionLength + 1
      })
    }
  }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Session minutes={this.state.minutes} seconds={this.state.seconds}/>
          <button id="start_stop" onClick={this.toggleRunning}>Start/Stop</button>
          <button id="reset" onClick={this.reset}>Reset</button>
          <BreakControls 
            breakLength={this.state.breakLength}
            decrement={this.decrementBreak}
            increment={this.incrementBreak}
            />
            <SessionControls 
              sessionLength={this.state.sessionLength}
              decrement={this.decrementSession}
              increment={this.incrementSession}
              />
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

function BreakControls (props) {
  return(
    <div>
      <h4 id="break-label">Break Length</h4>
      <p id="break-length">{props.breakLength}</p>
      <button id="break-decrement" onClick={props.decrement}>-</button>
      <button id="break-increment" onClick={props.increment}>+</button>
    </div> 
  );
}

function SessionControls (props) {
  return(
    <div>
      <h4 id="session-label">Session Length</h4>
      <p id="session-length">{props.sessionLength}</p>
      <button id="session-decrement" onClick={props.decrement}>-</button>
      <button id="session-increment" onClick={props.increment}>+</button>
    </div>
  )
}

export default App;
