import React, { Component } from "react";
import Messager from "./components/Messager";
import { MessagerConsumer } from "./context/MessagerContext";

class MessagerContainer extends Component {
  render() {
    return (
      <MessagerConsumer>
        {value => {
          return (
            <Messager
              messages={value.store.messages}
              onPush={value.push}
              onPop={value.pop}
            />
          );
        }}
      </MessagerConsumer>
    );
  }
}

export default MessagerContainer;
