import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * SayHello는 Function component로 만드세요.
 * --> <h1>Hello</h1>
 * 
 * Compo04는 Class component로 만드세요.
 * --> <h2>World!</h2>
 * 
 * 각각을 export 한후, index.js에서 렌더링 하세요.
 */
export function SayHello() {
    return <h1>Hello</h1>;
}

export class Compo04 extends Component {
    render() {
        return (<h2>World!</h2>);
    }
}

ReactDOM.render(<div><SayHello /><Compo04 /></div>, document.getElementById("app"));