import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) "+" 버튼을 클릭하면, 목록(allItems 배열)이 순서대로 노출됩니다.
 *    a) 노출은 다음과 같이 출력 되어야 합니다.
 *       "-" 버튼 / 과일명 / 수량입력 <input> 요소
 *    b) 목록이 모두 출력되면, "+" 버튼이 비활성되어 더이상 클릭되지 않아야 합니다.
 * 
 * 2) "-" 버튼 클릭시 해당 요소가 삭제 됩니다.
 */
const allItems = [
    {id: "apple", value: "사과"},
    {id: "orange", value: "오렌지"},
    {id: "grape", value: "포도"},
    {id: "pear", value: "배"},
    {id: "banana", value: "바나나"}
];

export default class Compo16 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem() {
        this.setState(({items}) => ({
            items: [
                ...items,
                allItems.find(i => !items.includes(i))
            ]
        }));
    }

    removeItem(item) {
        this.setState(({items}) => ({
            items: items.filter(i => i !== item)
        }));
    }

    render() {
        const items = this.state.items;
        const style = {fontSize: "1.2em", margin: "5px"};

        return (
            <ol>
                <button disabled={items.length >= allItems.length} onClick={this.addItem} style={style}>+</button>
                {items.map((i, index) => (
                    // key 속성이 없는 경우, 해당 요소를 unique 하게 ref 할수 없어 오류가 발생
                    <li key={i.id}>
                        <button onClick={() => this.removeItem(i)} style={{backgroundColor: "red", color: "#fff", ...style}}>-</button> 
                        {i.value} &rarr; 
                        수량: <input style={{width: "30px"}} />
                    </li>
                ))}
            </ol>
        )
    }
}

ReactDOM.render(<Compo16 />, document.getElementById("app"));