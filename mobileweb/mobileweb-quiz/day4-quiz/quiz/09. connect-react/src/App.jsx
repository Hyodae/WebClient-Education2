import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./createStore";
import "./App.css";
import CounterContainer from "./CounterContainer";
import MessagerContainer from "./MessagerContainer";

// Provide로 store props에 store 전달.
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h2>React와 Redux 연결하기</h2>
          <CounterContainer />
          <MessagerContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
