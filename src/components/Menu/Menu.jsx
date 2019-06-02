import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
        <div className="flex-row">
          <div className="flex-large">
            <Link className="link" to="/" >Home</Link>
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
        </div>
    )
  }
}
