import React, {Component} from "react";

/**
 * @todo
 * 다음의 <form>을 submit시, 입력된 값을 아래 방법들을 사용해 console에 출력하세요.
 * - 네이티브 이벤트 객체로 접근해 출력
 * - name 속성으로 접근해 출력
 * - ref 속성을 통해 출력
 */
export default class Compo17 extends React.Component {
    render() {
        return (
            <form>
                Name: <input type="text" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
