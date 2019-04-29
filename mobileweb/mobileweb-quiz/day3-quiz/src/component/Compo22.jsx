import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 문서 title 변경을 custom hook으로 변경해 재사용이 가능하도록 만들어 보세요.
 */
function Compo22() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times.`
    });

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

ReactDOM.render(<Compo22 />, document.getElementById("app"));