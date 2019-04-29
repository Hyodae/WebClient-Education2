import React, { Component, createContext } from "react";

const Context = createContext();

// Context 안에는 Provider 와 Consumer 라는게 존재
const { Provider, Consumer: CounterConsumer } = Context;

class CounterProvider extends Component {
  state = {
    number: 0,
    name: "sclove-warren",
    isLoading: false,
    hasError: false
  };

  increase = step => this.setState({ number: this.state.number + step });
  decrease = step => this.setState({ number: this.state.number - step });
  reset = () => this.setState({ number: 0 });
  increaseAsync = step => {
    this.setState({ isLoading: true, hasError: false });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        hasError: false,
        number: this.state.number + step
      });
    }, 1000);
  };
  decreaseAsync = step => {
    this.setState({ isLoading: true, hasError: false });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        hasError: false,
        number: this.state.number - step
      });
    }, 1000);
  };
  resetAsync = step => {
    this.setState({ isLoading: true, hasError: false });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        hasError: false,
        number: 0
      });
    }, 1000);
  };
  render() {
    const value = {
      store: this.state,
      increase: this.increase,
      decrease: this.decrease,
      reset: this.reset,
      increaseAsync: this.increaseAsync,
      decreaseAsync: this.decreaseAsync,
      resetAsync: this.resetAsync
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CounterProvider, CounterConsumer };
