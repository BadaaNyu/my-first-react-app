import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Menu.css';
import {OverlayPanel} from 'primereact/overlaypanel';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';


export default class Menu extends Component {
    state = {
        newPseudo: '',
    };

    setPseudo = () => {
        this.props.setPseudo(
            {
                connected: true,
                pseudo: this.state.newPseudo,
            }
        );
        this.props.setMessage({
            severity: 'success',
            summary: 'Success',
            detail: 'registered on the server'
        });
    };

    disconnect = () => {
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
                    <div className="rm-2">
                        <Button id="button-pseudo" className="btn btn-primary" label="Validate"
                                onClick={this.setPseudo}/>
                    </div>
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
                    <a className="link" onClick={(e) => this.op.toggle(e)}>{this.props.getPseudo()}</a>
                </div>
                <OverlayPanel className="ui-g-8" ref={(el) => this.op = el} showCloseIcon={false} dismissable={true}>
                    {this.displayConnectionBtn()}
                </OverlayPanel>
            </div>
        )
    }
}
