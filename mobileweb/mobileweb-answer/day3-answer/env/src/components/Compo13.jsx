import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * - 현재 시간을 출력하는 컴포넌트를 만드세요.
 * - <button>을 클릭하면, 현재 시간으로 출력하도록 만드세요.
 */
export default class Compo13 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <label style={{ fontSize: "2em", display: "block" }}>
                    {this.state.date.toLocaleString()}
                </label>

                <button onClick={this.update} style={{fontSize: "1.2em", padding: "5px"}}>
                    현재 시간 보기
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Compo13 />, document.getElementById("app"));