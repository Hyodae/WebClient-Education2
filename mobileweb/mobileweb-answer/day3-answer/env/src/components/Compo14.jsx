import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 스톱워치를 만들어 주세요.
 * '시작' 버튼과 '초기화' 버튼의 노출되며, 각각 클릭시 다음과 같이 동작해야 합니다.
 * 시간은 millisecond로 표현되어야 합니다.
 * 
 * - '시작' 버튼:
 *   a) 클릭시 시간이 진행되며, 버튼은 '정지'로 변경
 *   b) '정지' 클릭시, 시간이 정지됨
 * 
 * - '초기화' 버튼:
 *   클릭시 시간영역의 값이 0으로 초기화
 *   초기화 버튼의 기능은 현재 스톱워치가 진행중인 상태이거나, 정지된 상태 모두 상관없이 동작
 */
export default class Compo14 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lapse: 0, running: false};

        this.start = this.start.bind(this);
        this.clear = this.clear.bind(this);
    }

    start() {
        this.setState(state => {
            if (state.running) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.lapse;

                this.timer = setInterval(() => {
                    this.setState({
                        lapse: Date.now() - startTime,
                    });
                });
            }

            return {
                running: !state.running
            };
        });
    }

    clear() {
        clearInterval(this.timer);
        this.setState({ lapse: 0, running: false });
    }
    
    render() {
        const {lapse, running} = this.state;
        const buttonStyles = {
            border: "1px solid #ccc",
            background: "#fff",
            fontSize: "2em",
            padding: 15,
            margin: 5,
            width: 200,
        };

        return (
            <div style={{textAlign: "center"}}>
                <label style={{ fontSize: "5em", display: "block" }}>
                    {lapse}ms
                </label>

                <button onClick={this.start} style={buttonStyles}>
                    {running ? "정지" : "시작"}
                </button>
                
                <button onClick={this.clear} style={buttonStyles}>
                    초기화
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Compo14 />, document.getElementById("app"));