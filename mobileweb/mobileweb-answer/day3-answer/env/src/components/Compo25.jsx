import React, {Component} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

/**
 * @todo
 * 1) 다음의 스타일이 적용되는 <Button> element를 만들어 주세요.
      <button style='
          font-size: 1.2em;
          margin: 1em;
          padding: 0.25em 1em;
          border: 2px solid palevioletred;
          border-radius: 3px;
          background-color: white;'>

 * 2) 'bg' props 값이 설정되는 경우, 해당 값을 background-color로 사용하도록 해주세요.
 * 3) 1번 항목의 element를 확장한 <Anchor> element를 만들어 주세요.
 *    <a style='border: none;text-decoration: underline'>
 * 4) 아래의 코드가 빌드 작업(transpile) 없이 수행되는 HTML 페이지를 구성해 주세요.
 */

const Button = styled.button`
    font-size: 1.2em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    background-color: ${props => props.bg || "white"};
`;

const Anchor = styled(Button)`
    border: none;
    text-decoration: underline;
`

export default class Compo25 extends Component {
    render() {
        return <>
                <Button>버튼 1</Button>
                <Button bg="red">버튼 1</Button>
                <Anchor href="#">링크 입니다.</Anchor>
            </>;
    };
}
    
ReactDOM.render(<Compo25 />, document.getElementById("app"));