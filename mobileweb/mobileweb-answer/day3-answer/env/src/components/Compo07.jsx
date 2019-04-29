import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) 아래와 같은 구조의 DOM을 생성하고, 
 *    --> <div style="background-color:#eee">메세지: <input type="text"></div>
 * 2) 타이머를 이용해, 1초 뒤에 input 요소에 "Hello World" 값이 추가되도록 만드세요.
 * 
 * - 처음은 .createRef()를 사용해서 
 * - 다음은 refs callback으로 
 */
export default class Compo07 extends Component {
    /* constructor(props) {
        super(props);
        this.inputNode = React.createRef();
    } */

    setValue() {
        //this.inputNode.current.querySelector("input").value = "Hello World";
        this.inputNode.querySelector("input").value = "Hello World";
    }

    render() {
        setTimeout(this.setValue.bind(this), 1000);

        return (<div ref={node => this.inputNode = node} style={{backgroundColor:"#eee"}}>
            메세지: <input type="text" />
        </div>);
    }
}

ReactDOM.render(<Compo07 />, document.getElementById("app"));