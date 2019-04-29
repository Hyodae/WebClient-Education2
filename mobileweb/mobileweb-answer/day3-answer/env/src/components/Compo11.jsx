import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) 상위 노드에서 하위노드로 state 값이 전달되는 컴포넌트를 만드세요.
 *    각각은 아래와 같이 하위 노드를 렌더링해야 합니다.
 *    - <First />: <div><h1>First <Second /></h1></div>
 *    - <Second />: <div><h2>Second</h1> <Thrid /></div>
 *    - <Third />: <div><h3>Third</h1> {전달된 값}</div>
 * 
 * 2) 1번 항목에서 만든 컴포넌트를 ContextAPI를 사용하도록 변경해 보세요.
 */
class Compo11 extends Component {
    constructor() {
        super();
        this.state = {text: "Hello World!"};
    }

    render() {
        // state가 변경되면, 모든 컴포넌트들의 값도 변경된다.
        // setTimeout(() => {
        //     this.setState({text: "abc"})
        // }, 1000);

        return <First text={this.state.text} />;
    }
}

const First = props => (
        <div><h1>First</h1> <Second text={props.text} /></div>
   );

const Second = props => (
        <div><h2>Second</h2> <Third text={props.text} /></div>
    );

const Third = props => (
        <div><h3>Third</h3> Text: {props.text}</div>
   );

/**
 * 2) 1번 항목에서 만든 컴포넌트를 ContextAPI를 사용하도록 변경해 보세요.
 */
/* const { Provider: MyProvider, Consumer: MyConsumer } = React.createContext();

class Compo11 extends Component {
    constructor() {
        super();
        this.state = {text: "Hello World!"};
    }

    render() {
        return <MyProvider value={this.state.text}>
                <First />
            </MyProvider>;
    }
}

const First = () => (
    <div><h1>First</h1> <Second /></div>
);

const Second = () => (
    <div><h2>Second</h2> <Third /></div>
);

const Third = () => (
    <div>
        <h3>Third</h3> Text: <MyConsumer>{value => value}</MyConsumer>
    </div>
); */

ReactDOM.render(<Compo11 />, document.getElementById("app"));