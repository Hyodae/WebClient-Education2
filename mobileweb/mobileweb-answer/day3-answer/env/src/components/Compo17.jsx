import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 다음의 <form>을 submit시, 입력된 값을 아래 방법들을 사용해 console에 출력하세요.
 * - 네이티브 이벤트 객체로 접근해 출력
 * - name 속성으로 접근해 출력
 * - ref 속성을 통해 출력
 */
export default class Compo17 extends React.Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(event) {
        // 네이티브 이벤트 객체를 통해 접근하는 경우
        console.log(event.target[0].value);
        
        // name 속성으로 접근하는 경우
        console.log(event.target.elements.username.value);

        // ref 속성을 통해 전달한 경우
        console.log(this.inputNode.value);

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                Name: <input type="text" name="username" ref={node => {this.inputNode = node}} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

ReactDOM.render(<Compo17 />, document.getElementById("app"));