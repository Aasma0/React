import React, { Component } from "react";
import './App.css';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,  // State managed by React
      timer: 0,  // Timer value
      intervalId: null,  // To store the interval ID
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count -1,
    }));
  }

  startTimer() {
    if (this.state.intervalId === null) {
      const intervalId = setInterval(() => {
        this.setState((prevState) => ({
          timer: prevState.timer + 1
        }));
      }, 1000);
      this.setState({ intervalId });
    }
  }

  stopTimer() {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalId !== null) {
      clearInterval(this.state.intervalId);
    }
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button className="btnFirst" onClick={this.increment}>Increase</button>
        <button className="btnSecond" onClick={this.decrement}>Decrease</button>
        <h1>Timer: {this.state.timer}</h1>
        <button className="btnFirst" onClick={this.startTimer}>Start Timer</button>
        <button className="btnSecond" onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Counter;
