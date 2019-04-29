import React, {Component} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./routingPage/Home";
import About from "./routingPage/About";
import Users from "./routingPage/Users";

/**
 * @todo
 * 'routingPage' 폴더에 있는 파일들을 import 하고, 각각에 대해 라우팅을 통해
 * 메뉴를 출력하는 컴포넌트를 만드세요.
 */
export default class Compo24 extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <nav>
                    <Link to="/">Home</Link> / 
                    <Link to="/about/">About</Link> / 
                    <Link to="/users/">Users</Link>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
            </div>
        </BrowserRouter>)};
}
    
ReactDOM.render(<Compo24 />, document.getElementById("app"));