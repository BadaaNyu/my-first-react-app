import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Salons from "./components/Salons";
import About from "./components/About";
import TopLadder from "./components/TopLadder";


class App extends Component {


    constructor(props, context) {
        super(props,context);
        this.setPseudo = this.setPseudo.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.getPseudo = this.getPseudo.bind(this);
        this.getConnected = this.getConnected.bind(this);
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
        this.setMessage({severity: 'success', summary: 'Pseudo seted', detail: 'you are connected'});
    };


    //CONNECTION MANAGEMENT

    getPseudo() {
        return this.state.pseudo;
    };

    getConnected() {
        return this.state.connected;
    };

    //ERROR MANAGEMENT


    setMessage(message) {
        console.log(message);
    };


    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Menu getConnected={this.getConnected()} getPseudo={this.getPseudo} setPseudo={this.setPseudo}
                              setMessage={this.setMessage}/>
                        <Route exact path="/" component={Home} />
                        <Route path="/salons" render={() =>
                            <Salons
                                getConnected={ this.getConnected}
                                getPseudo={this.getPseudo}/>
                        }>
                        </Route>
                        <Route path="/about" component={About}/>
                        <Route path="/topLadder" component={TopLadder}/>
                    </div>
                </Router>
            </div>
        );
    }

}

export default App;
