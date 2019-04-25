import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {

    render() {
        let str = this.props.flipCount === 0 ? '' : `Out of ${this.props.flipCount} flips,
         there have been ${this.props.headCount > 1 ? `${this.props.headCount} heads` : `${this.props.headCount} head`}
         and ${this.props.tailCount > 1 ? `${this.props.tailCount} tails` : `${this.props.tailCount} tail`}`
        let img = this.props.img !== undefined 
        ? <img className="Coin-image" src={this.props.img} alt="Coin"/>
        : <img alt=""/>

        return (
            <div>
                {img}
                <p>{str}</p>
            </div>
        )
    }
}

export default Coin;