import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * props.name을 출력하는 컴포넌트를 만드세요.
 * 출력 값은 다음과 같습니다.
 * --> "<h1>Hello {props.name}!</h1>"
 */
export default class Compo05 extends Component {
    render() {
        return (<h1>Hello {this.props.name}!</h1>);
    }
}

ReactDOM.render(<Compo05 name="홍길동" />, document.getElementById("app"));