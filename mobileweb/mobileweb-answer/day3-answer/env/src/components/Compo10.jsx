import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 현재 시간을 출력하는 컴포넌트를 만드세요.
 * 1) 1초마다 시간이 변경되어 렌더링 되어야 합니다.
 * 2) 호출횟수가 호출될 때 마다 증가되어 출력되어야 합니다.
 */
export default class Compo10 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), count: 0};
    }

    updateTime() {
        this.setState((state, props) => ({
            date: new Date(),
            count: state.count + 1
        }));
    }

    render() {
        setTimeout(() => {
            //console.log("render called!");
            this.updateTime();
        }, 1000);

        return (<div>
                <span>현재시간: {this.state.date.toTimeString()}</span><br />
                <span>호출횟수: {this.state.count}</span>
            </div>);
    }
}

ReactDOM.render(<Compo10 />, document.getElementById("app"));