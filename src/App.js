import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Salons from "./components/Salons";
import About from "./components/About";
import TopLadder from "./components/TopLadder";


class App extends Component {

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Menu/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/salons" component={Salons} />
                        <Route path="/about" component={About} />
                        <Route path="/topLadder" component={TopLadder} />
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
