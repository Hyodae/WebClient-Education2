import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * props로 다음의 속성들을 전달 받을 수 있도록 만드세요.
 * - style="background-color:green;color:yellow;width:200px;height:200px;"
 * - class="box"
 * - id="test-box"
 */
export default class Compo06 extends Component {
    render() {
        return (<div {...this.props}></div>);
    }
}

ReactDOM.render(
    <Compo06
        style={{
            backgroundColor: "green", 
            color: "yellow",
            width: "200px",
            height: "200px"
        }}
        className="box"
        id="text-box"
    />, document.getElementById("app"));