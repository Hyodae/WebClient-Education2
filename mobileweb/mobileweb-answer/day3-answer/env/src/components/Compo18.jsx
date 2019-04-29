import React, {Component} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 다음의 <form>을 submit 처리하는 컴포넌트를 만드세요.
 * a) 아래의 조건을 만족해야 합니다.
 *    - 최소 3자리 문자 입력
 *    - "~" 문자가 반드시 포함
 * 
 * b) 'a' 조건을 만족하지 않는 경우, 폼 하단에 오류 메세지를 출력하세요.
 * c) 조건에 만족하지 않는 경우, submit 버튼은 비활성되며 만족시 활성화 되어야 합니다.
 */
class Compo18 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }

        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
    }

    checkValue(value) {
        if (value.length < 3) {
            return `최소 3개 문자 입력이 필요합니다. 현재 ${value.length} 문자 입력됨.`
        }

        if (!value.includes("~")) {
            return `입력값에 '~' 문자가 포함되어야 합니다.`
        }

        return null;
    }

    submit(event) {
        const value = event.target.elements.username.value;
        const error = this.state.error;

        if (error) {
            console.log(`오류: ${error}`);
        } else {
            console.log(`성공: ${value}`);
        }

        event.preventDefault();
    }
    
    change(event) {
        const value = event.target.value;
        
        this.setState({
            error: this.checkValue(value)
        });
    }
    
    render() {
        const error = this.state.error;

        return (
            <div>
                <h1>이름 입력</h1>
                <form onSubmit={this.submit}>
                    이름?: <input type="text" onChange={this.change} name="username" />
                    
                    {error ? (<div style={{color: 'red', marginTop: "10px"}}>{error}</div>) : null}
                    
                    <br /><button disabled={Boolean(error)} type="submit" style={{fontSize:"1.2em", margin: "5px"}}>Submit</button>
                </form>
            </div>
        )
    }
}
    
ReactDOM.render(<Compo18 />, document.getElementById("app"));