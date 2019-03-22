import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
      running: false
    }
    this.timer = this.timer.bind(this);
    this.toggleRunning = this.toggleRunning.bind(this);
  }

  //test setTimeout
  timer(){
    
 
    const timerID = setInterval(()=>{
      console.log("this.state.time = " + this.state.time);
      if(this.state.time > 0 && this.state.running){
        this.setState({
          time: this.state.time - 1
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

  
    

  render() {
    let test = ()=>{
      console.log("Minutes = " + 238/60);
      console.log("Seconds = " + 238%60);
    }
    test();
    return (
      <div className="App">
        <header className="App-header">
          <Session time={this.state.time} />
          <button onClick={this.toggleRunning}>Start/Stop</button>
        </header>
      </div>
    );
  }
}

function Session (props) {
  return <h1>{props.time}</h1>;

}

export default App;
