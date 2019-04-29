import React, {Component, useState, useContext} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 아래의 컴포넌트를 useHook을 사용하는 컴포넌트로 변경해 보세요.
 */
const TextContext = React.createContext();

// class Compo11 extends Component {
//     constructor() {
//         super();
//         this.state = {text: "Hello World!"};
//     }

//     render() {
//         return <TextContext.Provider value={this.state.text}>
//                 <First />
//             </TextContext.Provider>;
//     }
// }

// const First = () => (
//     <div><h1>First</h1> <Second /></div>
// );

// const Second = () => (
//     <div><h2>Second</h2> <Third /></div>
// );

// const Third = () => (
//     <div>
//         <h3>Third</h3> Text: <TextContext.Consumer>{value => value}</TextContext.Consumer>
//     </div>
// );

function Compo11() {
    const [text, setText] = useState("Hello World!");

    return <TextContext.Provider value={text}>
            <First />
        </TextContext.Provider>;
}

const First = () => (
    <div><h1>First</h1> <Second /></div>
);

const Second = () => (
    <div><h2>Second</h2> <Third /></div>
);

const Third = () => {
    const context = useContext(TextContext);

    return (
        <div>
            <h3>Third</h3> Text: {context}
        </div>
    );
};

ReactDOM.render(<Compo11 />, document.getElementById("app"));