import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 1500,
      running: true
    }
    this.countdown = this.countdown.bind(this);
    this.timer = this.timer.bind(this);
    this.testSetTimeout = this.testSetTimeout.bind(this);

  }

  countdown(){
   // while(this.state.time > 0){
      
    //}
  }

  timer() {
    let output = this.state.time - 1;
    console.log("Subtracted 1");
    this.setState({
        time: output
      })
  }


  //test setTimeout
  testSetTimeout(){
    let index = 5;
    setInterval(()=>this.timer(), 1000);


    index--;
    
  }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Session time={this.state.time} />
          <button onClick={this.testSetTimeout}>Start/Stop</button>
        </header>
      </div>
    );
  }
}

function Session (props) {
  return <h1>{props.time}</h1>;

}

export default App;
