import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import alarm from './alarm-sound.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      breakLength: 5,
      sessionLength: 25,
      mode: "Session",
      running: false,
      started: false
    }
    this.timer = this.timer.bind(this);
    this.toggleRunning = this.toggleRunning.bind(this);
    this.refresh = this.refresh.bind(this);
    this.reset = this.reset.bind(this);
    this.playAlarm = this.playAlarm.bind(this);
    this.decrementBreak = this.decrementBreak.bind(this);
    this.incrementBreak = this.incrementBreak.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    
  }
  audio = document.getElementById("beep");

  //test setTimeout
  timer(){
    const timerID = setInterval(()=>{
      if(this.state.minutes >= 0 && this.state.seconds > 0 && this.state.running){
        this.setState({
          seconds: this.state.seconds - 1
        })
      } else if(this.state.minutes > 0 && this.state.seconds === 0 && this.state.running){
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59
        })
      } else if (this.state.minutes === 0 
        && this.state.seconds === 0 
        && this.state.running
        && this.state.mode === "Session"){
          this.playAlarm();
          this.setState({
            minutes: this.state.breakLength,
            seconds: 0,
            mode: "Break"
          })
      } else if (this.state.minutes === 0 
        && this.state.seconds === 0 
        && this.state.running
        && this.state.mode === "Break"){
          this.playAlarm();
          this.setState({
            minutes: this.state.breakLength,
            seconds: 0,
            mode: "Session"
        })
      } else {
        clearInterval(timerID)
      }
    }, 1000);
  }

  //toggle running
  toggleRunning(){
    if(this.state.running){
      console.log("running: " + this.state.running);
      this.setState({
        running: false,
      })
    } else {
      console.log("running: " + this.state.running);  
      this.timer();
        this.setState({
          running: true,
          started: true
        })
      }
    }

  //refreash button
  refresh(){
    if(this.state.mode === "Session"){
      this.setState({
        running: false,
        started: false,
        minutes: this.state.sessionLength,
        seconds: 0
      })
    } else if(this.state.mode === "Break"){
      this.setState({
        running: false,
        started: false,
        minutes: this.state.breakLength,
        seconds: 0        
      })
    }
  }

  //reset button
  reset(){
    const audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.pause();
    this.setState(
      {
        minutes: 25, 
        seconds: 0,
        breakLength: 5,
        sessionLength: 25,
        running: false,
        mode: "Session"
      }
    )
  }

  playAlarm(){
    console.log("playAlarm");
    const audio = document.getElementById("beep");
    audio.currentTime = 0;
    audio.play();
  }

  /*need to update increment and decrement functions so break length and 
  session length update the minutes and seconds.  Minutes and seconds may
  need to be changed to breakMinutes and sessionMinutes.
  */
  decrementBreak() {
		if(this.state.breakLength > 1 
      && this.state.started === false 
      && this.state.mode === "Break"){
        this.setState({
          breakLength: this.state.breakLength - 1,
          minutes: this.state.breakLength - 1,
          seconds: 0
        })
      } else if(this.state.breakLength > 1){
        this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }

  incrementBreak() {
    if(this.state.breakLength < 60 
      && this.state.running === false
      && this.state.mode === "Break"){
        this.setState({
          breakLength: this.state.breakLength + 1,
          minutes: this.state.breakLength + 1,
          seconds: 0
        })
      } else if(this.state.breakLength < 60){
        this.setState({
          breakLength: this.state.breakLength + 1
        })
      } 
  }

  decrementSession() {
    if(this.state.sessionLength > 1 
      && this.state.started === false
      && this.state.mode === "Session")
        {
          this.setState({
            sessionLength: this.state.sessionLength - 1,
            minutes: this.state.sessionLength - 1,
            seconds: 0
          })
        } else if(this.state.sessionLength > 1){
      this.setState({
        sessionLength: this.state.sessionLength - 1
      })    
    }
  }

  incrementSession() {
    if(this.state.sessionLength < 60 
      && this.state.started === false
      && this.state.mode === "Session"){
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          minutes: this.state.sessionLength + 1,
          seconds: 0
        })
      } else if(this.state.sessionLength < 60){
      this.setState({
        sessionLength: this.state.sessionLength + 1
      })
    }
  }
    

  render() {
    return (
      <div className="App">
          <div id="title">
            <h3 style={{color: "white"}}>Pomodoro Clock by</h3>
            <h3><a href="https://tomporvaz.github.io/">Tom Porvaznik</a></h3>
          </div>
        <header className="timerBody">

          <Session 
            minutes={this.state.minutes} 
            seconds={this.state.seconds}
            mode={this.state.mode}
          />
          <div id="timerButtons">
            <button id="start_stop" 
              onClick={this.toggleRunning} 
              alt="Start/Stop" className="start-refresh">
                <i class="fas fa-play"></i>
                <i class="fas fa-pause"></i>
            </button>
            <button id="refresh" onClick={this.refresh} className="start-refresh" alt="Refresh">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>
           <div id="controls">
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
          </div>
            <button id="reset" onClick={this.reset}>Reset</button>
            <audio id="beep" src={alarm}></audio>
        </header>
      </div>
    );
  }
}

function Session (props) {
  return (
    <div>
      <h3 id="timer-label">{props.mode}</h3>
      <h1 id="time-left">{("0" + props.minutes).slice(-2)}:{("0" + props.seconds).slice(-2)}</h1>
    </div>
  );
}

function BreakControls (props) {
  return(
    <div id="breakControls" className="controls">
      <h4 id="break-label">Break Length</h4>
      <p id="break-length">{props.breakLength}</p>
      <button id="break-decrement" className="control-button" onClick={props.decrement}>-</button>
      <button id="break-increment" className="control-button" onClick={props.increment}>+</button>
    </div> 
  );
}

function SessionControls (props) {
  return(
    <div id="sessionControls" className="controls">
      <h4 id="session-label">Session Length</h4>
      <p id="session-length">{props.sessionLength}</p>
      <button id="session-decrement" className="control-button" onClick={props.decrement}>-</button>
      <button id="session-increment" className="control-button" onClick={props.increment}>+</button>
    </div>
  )
}

export default App;
