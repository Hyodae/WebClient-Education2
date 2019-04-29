import React, {createElement} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * .createElement()만을 사용해 다음과 같이 구성된 element를 생성하세요.
 * <div class="green box"><span>나는 Box 입니다.</span></div>
 */
/* element.props = {
    children: "Hello World"
    className: "container"
} */
const element = createElement(
    "div", 
    // or { className: "container", children: "Hello World" },
    {
        className: "green box",
        children: createElement("span", {}, "나는 Box 입니다.")
    },
    //, createElement("span", {}, "자식노드")  // <-- children을 여기에 기술해도 된다.
);

export default element;

ReactDOM.render(element, document.getElementById("app"));

