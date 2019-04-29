import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Messager extends PureComponent {
  static propTypes = {
    messages: PropTypes.array
  };
  static defaultProps = {
    messages: []
  };
  render() {
    const { onPush, onPop } = this.props;
    return (
      <>
        <button onClick={onPush}>Push Message</button>
        <button onClick={onPop}>Pop Message</button>
        <ul>
          {this.props.messages.map((message, i) => (
            <li key={i} className="message">
              {message}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Messager;
