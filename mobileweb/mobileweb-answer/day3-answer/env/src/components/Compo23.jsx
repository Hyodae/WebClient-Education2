import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * <Row name="홍길동" /> function element를 구성하는 함수를 작성해 주세요.
 * a) 렌더링시 props.name 텍스트가 출력되어야 합니다.
 * b) 텍스트를 클릭하면 <input> 요소가 출력되어 텍스트 수정이 되어야 합니다.
 * c) 수정후, 수정된 텍스트가 출력되어야 합니다.
 */
function Row(props) {
    const [name, setName] = useState(props.name);

    function clickBlurHandler(e) {
        const target = e.target;

        target.style.display = "none";

        if (target.tagName === "INPUT") {
            target.previousSibling.style.display = "block";
        } else {
            target.nextSibling.style.display = "block";
            target.nextSibling.focus();
        }
    }

    function changeHandler(e) {
        setName(e.target.value);
    }

    return <>
        <h1 onClick={clickBlurHandler}>{name}</h1>
        <input value={name}
            onChange={changeHandler}
            onBlur={clickBlurHandler}
            style={{display: "none", fontSize: "1.5em", margin: "0.83em 0" }}
        />
    </>
}

function Compo23() {
    return (
        <section>
            <h3>텍스트를 클릭하면, 수정할 수 있습니다.</h3>
            <Row name="홍길동1" />
            <Row name="홍길동2" />
        </section>
    );
}

ReactDOM.render(<Compo23 />, document.getElementById("app"));