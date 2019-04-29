import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * <div>를 반환하고, class와 style 속성은 props로 적용되는 컴포넌트를 만드세요.
 * - childNode로 props.text를 출력하세요.
 * - 2개 이상의 박스를 렌더링하게 만드세요.
 */
export default class Compo08 extends Component {
    render() {
        return (<div className={this.props.className} style={this.props.style}>
            {this.props.text}
        </div>);
    }
}

class App extends Component {
    render() {
        return <div id="container">
            <Compo08 text="I'm box 1" className="box" />
            <Compo08 text="I'm box 2" className="box" style={{marginTop: "10px"}}/>
        </div>;
    }
}

ReactDOM.render(<App />, document.getElementById("app"));