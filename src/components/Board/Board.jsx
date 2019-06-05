import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import './Board.css';
import Cell from "../Cell";

export default class Board extends Component {


    state = {
        length: 10,
        height: 10,
        players: [
            {
                name: 'bobby-bwebwe',
                positionX: 5,
                positionY: 5,
            },
            {
                name: 'bobby-sage',
                positionX: 4,
                positionY: 5,
            },
            {

                name: this.props.getPseudo(),
                positionX: 5,
                positionY: 4,
            }
        ],
    };

    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction, false);
    }

    escFunction = (event)=> {
        console.log(event);
        console.log(this);
        if (event.keyCode === 37) {
            this.goLeft();
        }
        if (event.keyCode === 38) {
            //KeyUp
            this.goUp();
        }
        if (event.keyCode === 39) {
            //KeyRight
            this.goRight();
        }
        if (event.keyCode === 40) {
            this.goDown();
        }
    };

    goUp = () => {
        let positionX = this.state.players[2].positionX;
        let positionY = this.state.players[2].positionY;
        if (positionY > 0) {
            positionY -= 1;
        }
        this.setState(
            {
                players: [
                    {
                        name: 'bobby-bwebwe',
                        positionX: 5,
                        positionY: 5,
                    },
                    {
                        name: 'bobby-sage',
                        positionX: 4,
                        positionY: 5,
                    },
                    {

                        name: this.props.getPseudo(),
                        positionX: positionX,
                        positionY: positionY,
                    }
                ],
            }
        )
    };

    goDown = () => {
        let positionX = this.state.players[2].positionX;
        let positionY = this.state.players[2].positionY;
        if (positionY < this.state.height - 1) {
            positionY += 1;
        }
        this.setState(
            {
                players: [
                    {
                        name: 'bobby-bwebwe',
                        positionX: 5,
                        positionY: 5,
                    },
                    {
                        name: 'bobby-sage',
                        positionX: 4,
                        positionY: 5,
                    },
                    {

                        name: this.props.getPseudo(),
                        positionX: positionX,
                        positionY: positionY,
                    }
                ],
            }
        )
    };

    goLeft = () => {
        let positionX = this.state.players[2].positionX;
        let positionY = this.state.players[2].positionY;
        if (positionX > 0) {
            positionX -= 1;
        }
        this.setState(
            {
                players: [
                    {
                        name: 'bobby-bwebwe',
                        positionX: 5,
                        positionY: 5,
                    },
                    {
                        name: 'bobby-sage',
                        positionX: 4,
                        positionY: 5,
                    },
                    {

                        name: this.props.getPseudo(),
                        positionX: positionX,
                        positionY: positionY,
                    }
                ],
            }
        )
    };

    goRight = () => {
        let positionX = this.state.players[2].positionX;
        let positionY = this.state.players[2].positionY;
        if (positionX < this.state.length - 1) {
            positionX += 1;
        }
        this.setState(
            {
                players: [
                    {
                        name: 'bobby-bwebwe',
                        positionX: 5,
                        positionY: 5,
                    },
                    {
                        name: 'bobby-sage',
                        positionX: 4,
                        positionY: 5,
                    },
                    {

                        name: this.props.getPseudo(),
                        positionX: positionX,
                        positionY: positionY,
                    }
                ],
            }
        )
    };

    render() {
        return (
            <div className="board">
                <Table className="table table-bordered">
                    {
                        this.displayBoard()
                    }
                </Table>
            </div>
        )
    }

    displayBoard() {
        let board = [];
        for (let i = 0; i < this.state.length; ++i) {
            board.push(<tr key={i + 1000}>{this.displayRow(i)}</tr>);

        }
        return board;
    }

    displayRow(currentRow) {
        let row = [];
        for (let i = 0; i < this.state.height; ++i) {
            row.push(<td key={i}><Cell getPseudo={this.props.getPseudo} players={this.state.players}
                                       currentRow={currentRow} currentColumn={i}/></td>);
        }
        return row;
    }
}
