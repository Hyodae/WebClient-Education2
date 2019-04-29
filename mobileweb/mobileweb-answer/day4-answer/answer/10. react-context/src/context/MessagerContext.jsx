import React, { Component, createContext } from "react";

const Context = createContext();

// Context 안에는 Provider 와 Consumer 라는게 존재
const { Provider, Consumer: MessagerConsumer } = Context;

class MessagerProvider extends Component {
  state = {
    messages: []
  };
  push = () =>
    this.setState({
      messages: [...this.state.messages, `메시지를 추가합니다 ${Date.now()}`]
    });
  pop = () =>
    this.setState({
      messages: this.state.messages.slice(1)
    });
  render() {
    const value = {
      store: this.state,
      push: this.push,
      pop: this.pop
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { MessagerProvider, MessagerConsumer };
