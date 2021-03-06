import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) 컴포넌트의 라이프 사이클 마다 다음의 순서대로 console에 메세지를 출력하도록 만드세요.
 *    --> constructor --> render --> mounted --> render --> updated --> unmount
 * 2) componentDidUpdate 시점에 component를 unmount 하도록 만드세요.
 */
class Compo12 extends React.Component {
    constructor() {
        super();
        this.state = {text: "Hello"};
        console.log("constructor");
    }

    componentDidMount() {
        console.log("mounted");
    }

    componentDidUpdate() {
        console.log("updated");

        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
    }

    componentWillUnmount() {
        console.log("unmount");
    }

    render() {
        console.log("render");

        if (this.state.text === "Hello") {
            setTimeout(() => {
                this.setState({text: "Hello Again!"});
            }, 1000);
        }

        return <div>{this.state.text}</div>;
    }
}

ReactDOM.render(<Compo12 />, document.getElementById("app"));