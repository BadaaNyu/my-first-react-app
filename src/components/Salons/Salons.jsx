import React, {Component} from 'react';
import axios from 'axios';
import Salon from "../Salon";

export default class Salons extends Component {

    state = {
        salons: [],
        actualSalon: undefined,
    };

    componentDidMount() {
        this.refreshSalons();
    }

    refreshSalons(){
        axios.get('http://192.168.0.33:8080/salons/getAllSalons')
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
        console.log(this.state.salons)
    }

    joinSalon  = props => {
        this.setState(
            {
                actualSalon: props.actualSalon,
            }
        )
    };

    displaySalon = () => {
        return this.state.salons.map(salon => <Salon key={salon.name} salon={salon}/>)
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
