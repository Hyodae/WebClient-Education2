import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 아래의 배열을 다음과 같은 형태의 목록으로 출력하는 컴포넌트를 만드세요.
 * --> <li id="apple">사과</li> ...
 */
const allItems = [
    {id: "apple", value: "사과"},
    {id: "orange", value: "오렌지"},
    {id: "grape", value: "포도"},
    {id: "pear", value: "배"},
    {id: "banana", value: "바나나"}
];

export default class Compo15 extends React.Component {
    render() {
        return (
            <ul>
                {allItems.map((v, i) => (
                    // key 속성이 없는 경우, 해당 요소를 unique 하게 ref 할수 없어 오류가 발생
                    <li key={v.id} id={v.id}>
                        {v.value}
                    </li>
                ))}
            </ul>
        )
    }
}

ReactDOM.render(<Compo15 />, document.getElementById("app"));