import React from 'react';
import './Salon.css';


export default class Salon extends React.Component {
    render() {
        console.log(this);
        return <li className="salon">
            <div>
                <p>{this.props.salon.name}</p>
                <button className="btn btn-danger" onClick={this.props.deleteSalon}>Delete</button>
            </div>
        </li>
    }

}
