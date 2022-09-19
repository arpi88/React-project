import React from "react";
import "./style.css";
class Counter extends React.Component {
  state = {
    count: 0,
  };

  hundleMinus = () => {
    this.setState({
      count: this.setState.count + 1,
    });
  };
  hundlePlus = () => {
    this.setState({
      count: this.setState.count - 1,
    });
  };

  render() {
    return (
      <div classNmae="counter-div">
        <button className="button" onClick={this.hundlePlus}>
          +
        </button>
        <span className="span">{this.state.count}</span>
        <button className="button" onClick={this.hundleMinus}>
          -
        </button>
      </div>
    );
  }
}
export default Counter;
