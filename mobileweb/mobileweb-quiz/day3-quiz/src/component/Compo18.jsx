import React, {Component} from "react";

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
export default class Compo18 extends React.Component {
    render() {
        return (
            <div>
                <h1>이름 입력</h1>
                <form>
                    이름?: <input type="text" />
                  
                    <br /><button type="submit" style={{fontSize:"1.2em", margin: "5px"}}>Submit</button>
                </form>
            </div>
        );
    }
}
