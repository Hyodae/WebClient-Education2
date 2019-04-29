import React, { Component } from "react";
import Counter from "./components/Counter";
import { CounterConsumer } from "./context/CounterContext";

class CounterContainer extends Component {
  render() {
    return (
      <CounterConsumer>
        {value => {
          return (
            <Counter
              count={value.store.number}
              onIncrease={value.increase}
              onDecrease={value.decrease}
              onReset={value.reset}
              onIncreaseAsync={value.increaseAsync}
              onDecreaseAsync={value.decreaseAsync}
              onResetAsync={value.resetAsync}
            />
          );
        }}
      </CounterConsumer>
    );
  }
}

export default CounterContainer;
