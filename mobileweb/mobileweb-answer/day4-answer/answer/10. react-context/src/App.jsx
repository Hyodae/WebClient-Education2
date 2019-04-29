import React, { Component } from "react";
import "./App.css";
import { CounterProvider } from "./context/CounterContext";
import { MessagerProvider } from "./context/MessagerContext";
import CounterContainer from "./CounterContainer";
import MessagerContainer from "./MessagerContainer";

// Provide로 store props에 store 전달.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React의 Context 사용하기</h2>
        <CounterProvider>
          <CounterContainer />
        </CounterProvider>
        <MessagerProvider>
          <MessagerContainer />
        </MessagerProvider>
      </div>
    );
  }
}

export default App;
