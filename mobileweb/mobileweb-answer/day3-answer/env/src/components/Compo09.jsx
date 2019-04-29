import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * @todo
 * 1) props로 다음의 값을 갖는 컴포넌트를 만드세요.
 *   - firstName, lastName, age
 * 
 * 2) 각 값의 속성에 대한 타입과 필수 여부는 다음과 같이 지정하세요.
 *   - firstName: string / required
 *   - lastName: string / required
 *   - age: number / required
 * 
 * 3) defaultProps를 아래 항목에 적용하세요.
 *   - firstName: "Hong"
 */
export class Compo09 extends React.Component {
    static get propTypes() {
        return {
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired
        }
    };

    static get defaultProps() {
        return {
            firstName: "Hong"
        }
    }

    render() {
        const {firstName, lastName, age} = this.props;

        return (
            <div>Hello {firstName} {lastName}, age: {age}!</div>
        );
    }
}

// 또는 별도로 타입을 지정하는 것도 가능하다.
/* Compo09.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
} */

ReactDOM.render(<Compo09 firstName="Jojo" lastName="Doe" age={12} />, document.getElementById("app"));