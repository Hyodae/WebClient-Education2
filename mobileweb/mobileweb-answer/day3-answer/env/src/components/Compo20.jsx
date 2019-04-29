import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

/**
 * @todo
 * 1) useEffect Hook를 사용한 function 컴포넌트를 작성하세요.
 *    a) window resize시마다 윈도우 너비값을 출력 
 *    b) 너비값이 200px 이하면, 컴포넌트를 제거
 * 2) 'useState' hook에서 작성한 카운트 증가 코드를 사용해 페이지가 새로고침 되더라도 카운트가 유지 되도록 작성하세요.
 */
function Compo20(props) {
    const [width, setWidth] = useState(props.width);

    useEffect(() => {
        const handler = e => {
            const w = window.innerWidth;

            setWidth(w);

            if (w < 200) {
                ReactDOM.unmountComponentAtNode(document.getElementById("app"));
            }
        }

        window.addEventListener("resize", handler);

        return () => {
            window.removeEventListener("resize", handler);
        }
    }, []);

    return (
        <>
            <h3>현재 window 너비값</h3>
            <h1>{width}</h1>
        </>
    );

    const initCount = () => Number(window.localStorage.getItem("count") || 0);
    const [count, setCount] = useState(initCount);

    useEffect(() => {
        window.localStorage.setItem("count", count);
    });

    
    // return (
    //     <div>
    //         <p>You clicked <span style={{display: "inline-block", fontSize: "30px"}}>{count}</span> times.</p>
    //         <button onClick={() => setCount(prev => prev + 1)}>+</button>
    //         <button onClick={() => setCount(prev => prev - 1)}>-</button>
    //     </div>
    // );
}


ReactDOM.render(<Compo20 width={window.innerWidth} />, document.getElementById("app"));