import React, {Component} from 'react';

export default class Cell extends Component {
    render() {
        return (
            <div className="cell">
                {
                    this.props.players && this.props.players.map((player, key) =>
                        this.displayPlayer(player)
                    )
                }
            </div>
        )
    }

    displayPlayer( player ) {
        if(player.positionY === this.props.currentRow
        && player.positionX === this.props.currentColumn){
            return <p>{player.name}</p>
        }
    }

}
