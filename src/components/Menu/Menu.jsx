import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Modal} from 'react-bootstrap';


export default class Menu extends Component {


    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    state = {
        show: false,
        newPseudo: '',
    };

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }


    setPseudo = () => {
        this.handleClose();
        this.props.setPseudo(
            {
                connected: true,
                pseudo: this.state.newPseudo,
            }
        );
    };

    disconnect = () => {
        this.handleClose();
        this.props.setPseudo(
            {
                connected: false,
                pseudo: "Disconnected",
            }
        );
    };

    displayConnectionBtn = () => {
        console.log(this);
        console.log(this.props.getConnected);
        if (!this.props.getConnected) {
            return <div>
                <form>
                    <label htmlFor="cb1" className="p-checkbox-label">Pseudo</label>
                    <InputText id="cb1" className="m-2" id="newPseudo" value={this.state.newPseudo}
                               onChange={(e) => this.setState({newPseudo: e.target.value})}/>
                    <Button id="button-pseudo" className="btn btn-primary" label="Validate"
                            onClick={this.setPseudo}/>
                </form>
            </div>
        } else {
            return <Button className="btn btn-primary" label="Disconnect" onClick={this.disconnect}/>;
        }
    };

    render() {
        return (
            <div className="flex-row">
                {console.log(this)}
                <div className="flex-large">
                    <Link className="link" to="/">Home</Link>
                </div>
                <div className="flex-large">
                    <Link className="link" to="/salons">Salons</Link>
                </div>
                <div className="flex-large">
                    <Link className="link" to="/about">About</Link>
                </div>
                <div className="flex-large">
                    <Link className="link" to="/topLadder">Top Ladder</Link>
                </div>
                <div className="flex-large">
                    <a className="link" onClick={this.handleShow}>{this.props.getPseudo()}</a>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        Login / Logout
                    </Modal.Header>
                    <Modal.Body>
                        {this.displayConnectionBtn()}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
