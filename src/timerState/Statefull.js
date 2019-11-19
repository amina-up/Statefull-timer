import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      hh: 0,
      mm: 0,
      ss: 0,
      ms: 0,
      condition: false
    };
    setInterval(() => {
      if (this.state.condition)
        this.setState({
          ms: this.state.ms + 1000,
          hh: parseInt(this.state.ms / 3600000),
          mm: parseInt((this.state.ms % 3600000) / 60000),
          ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
        });
    }, 1000);
  }

  cliked = () => this.setState({ condition: !this.state.condition });
  reset = () =>
    this.setState({
      condition: false,
      ms: 0,
      ss: 0,
      mm: 0,
      hh: 0
    });

  render() {
    return (
      <div className="clock">
        <div className="list-time">
          <div>{String(this.state.hh).padStart(2, "0")}:</div>
          <div>{String(this.state.mm).padStart(2, "0")}:</div>
          <div>{String(this.state.ss).padStart(2, "0")}</div>
        </div>

        <div className="times-letter">
          <div className="letter"> HH</div>
          <div className="letter">MM</div>
          <div className="letter">SS</div>
        </div>

        <div>
          <div className="button">
            <button onClick={this.cliked} className="btn">
              {this.state.condition ? "Pause" : "Start"}
            </button>
            <button onClick={this.reset} className="btn">
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;
