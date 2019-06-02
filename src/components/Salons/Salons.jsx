import React, {Component} from 'react';
import axios from 'axios';
import Salon from "../Salon";

export default class Salons extends Component {

    state = {
        salons: [],
    };

    componentDidMount() {
        axios.get('')
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
            });
    }

    displaySalon = () => {
        return this.state.salons.map(salon => <Salon prop={salon}></Salon>)
    };

    render() {
        return (
            <div className="salons">
                <h1>Salons</h1>
                <ul>
                    {
                        this.displaySalon()
                    }
                </ul>
            </div>
        )
    }
}
