import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  };
  static defaultProps = {
    count: 0
  };

  render() {
    const {
      count,
      onIncrease,
      onDecrease,
      onReset,
      onIncreaseAsync,
      onDecreaseAsync,
      onResetAsync
    } = this.props;

    return (
      <div>
        <div className="counter">
          <span>카운트 : </span>
          <span>{count}</span>
        </div>
        <div>
          <button onClick={() => onIncrease(1)}>increase</button>
          <button onClick={() => onDecrease(1)}>decrease</button>
          <button onClick={onReset}>reset</button>
        </div>
        <div>
          <button className="async" onClick={() => onIncreaseAsync(1)}>
            increaseAsync
          </button>
          <button className="async" onClick={() => onDecreaseAsync(1)}>
            decreaseAsync
          </button>
          <button className="async" onClick={onResetAsync}>
            resetAsync
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
