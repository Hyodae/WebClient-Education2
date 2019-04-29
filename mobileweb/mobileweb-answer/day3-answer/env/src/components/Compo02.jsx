import React from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * Hello와 Msg가 자식노드인 element를 반환하세요.
 */
const Hello = <h1>Hello!</h1>;
const Msg = () => <h2>만나서 반가워요~!</h2>;

const element = (
    <div>
        {Hello}
        <Msg />
    </div>
);

export default element;

ReactDOM.render(element, document.getElementById("app"));