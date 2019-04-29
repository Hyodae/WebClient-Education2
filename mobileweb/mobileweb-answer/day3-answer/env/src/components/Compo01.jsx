import React from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * sum 함수에 value1과 value2를 인자로 전달해, 반환되는 값을
 * 출력하는 React Component를 작성하세요.
 */

function sum(a, b) {
    return a + b;
}

const value1 = 5;
const value2 = 5;

const element = (
    <div>값의 합은: {sum(value1, value2)}</div>
);

export default element;

ReactDOM.render(element, document.getElementById("app"));