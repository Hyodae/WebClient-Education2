import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) 아래의 클래스 컴포넌트를 useState hook을 사용하도록 변경하세요.
 * 2) 값을 증가 또는 감소 시킬 수 있는 기능을 추가해 보세요.
 */
// export default class Compo19 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: 0};
//     }

//     render() {
//         return (
//         <div>
//             <p>You clicked {this.state.count} times.</p>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//                 Click me
//             </button>
//         </div>
//         );
//     }
// }

function Compo19() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    );
}

ReactDOM.render(<Compo19 />, document.getElementById("app"));