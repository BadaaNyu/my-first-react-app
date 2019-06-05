import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Salons from "./components/Salons";
import About from "./components/About";
import TopLadder from "./components/TopLadder";
import {Messages} from 'primereact/messages';


class App extends Component {


    constructor(props, context) {
        super(props);
        this.setPseudo = this.setPseudo.bind(this);
    }

    state = {
        pseudo: 'disconnected',
        connected: false,
    };

    setPseudo(props) {
        this.setState(
            {
                connected: props.connected,
                pseudo: props.pseudo,
            }
        );
    };


    //CONNECTION MANAGEMENT

    getPseudo = () => {
        return this.state.pseudo;
    };

    getConnected = () => {
        return this.state.connected;
    };

    //ERROR MANAGEMENT


    setMessage(message) {
        console.log(message);
        if (this.messages) {
            this.messages.show({
                severity: message.severity,
                summary: message.summary,
                detail: message.errorDetail
            });
        }
    };

    getMessage = () => {
        console.log(this.messages);
        return this.messages;
    };


    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Menu getConnected={this.getConnected()} getPseudo={this.getPseudo} setPseudo={this.setPseudo}
                              setMessage={this.setMessage}/>
                        <Messages ref={(el) => this.getMessage = el}/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/salons" component={Salons}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topLadder" component={TopLadder}/>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
