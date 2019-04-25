import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {

    render() {
        let str = `Out of ${this.props.flipCount}, there have been ${this.props.headCount} heads and ${this.props.tailCount} tails`
        let img = this.props.img !== undefined 
        ? <img className="Coin-image" src={this.props.img} alt="Coin"/>
        : <img />

        return (
            <div>
                {img}
                <p>{str}</p>
            </div>
        )
    }
}

export default Coin;