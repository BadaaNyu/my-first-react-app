import React, {Component} from 'react';
import axios from 'axios';
import Salon from "../Salon";
import {Table, Button, Alert} from "react-bootstrap";
import Board from "../Board";


export default class Salons extends Component {


    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    state = {
        salons: [],
        actualSalon: undefined,
    };

    componentDidMount() {
        this.refreshSalons();
    }

    refreshSalons() {
        /*        axios.get('http://192.168.0.33:8080/salons/getAllSalons')
                    .then(response => {
                        console.log(response);
                        this.setState(
                            {
                                salons: response.data
                            }
                        )
                    })
                    .catch(function (error) {
                        console.log(error);
                    });*/
        this.setDemoSalons();
        console.log(this.state.salons)
    }

    setDemoSalons() {
        var newArray = this.state.salons.slice();
        newArray.push(
            {
                id: '1',
                name: 'salon 1',
            }
        );
        newArray.push(
            {
                id: '2',
                name: 'salon 2',
            }
        );
        newArray.push(
            {
                id: '3',
                name: 'salon 3',
            }
        );
        this.setState(
            {
                salons: newArray,
            }
        );
        console.log(this.state.salons)
    }

    joinSalon = props => {
        this.setState(
            {
                actualSalon: props,
            }
        )
    };

    displaySalon = () => {
        return this.state.salons.map(salon => <Salon getConnected={this.props.getConnected}
                                                     getPseudo={this.props.getPseudo} joinSalon={this.joinSalon}
                                                     key={salon.name} salon={salon}/>)
    };

    render() {
        return <div>
            {
                this.props && !this.props.getConnected() &&
                <Alert variant='primary'>Connect yourself to join a salon</Alert>
            }
            {
                !this.state.actualSalon && <div className="salons">
                    <h1>Salons</h1>
                    <Table>
                        <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Product Name</th>
                            <th>SKU</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.displaySalon()
                        }
                        </tbody>
                    </Table>
                </div>
            }
            {
                this.state.actualSalon && <div>
                    <Button onClick={this.leaveSalon}>Leave Salon</Button>
                    <p>actual salon = {this.state.actualSalon}</p>
                    <Board getPseudo={this.props.getPseudo}/>
                </div>
            }
        </div>
    }

    leaveSalon = () => {
        this.setState(
            {
                actualSalon: undefined,
            }
        )
    }
}
