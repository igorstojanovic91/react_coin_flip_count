import React, { Component } from 'react'

class Coin extends Component {

    render() {
        console.log(this.props)
        let str = `Out of ${this.props.flipCount}, there have been ${this.props.headCount} heads and ${this.props.tailCount} tails`

        let img = this.props.img !== undefined 
        ? <img className="Coin-image" src={this.props.img !== '' ? this.props.img : null} alt="Coin"/>
        : <div></div>

        return (
            <div>
                {img}
                <p>{str}</p>
            </div>
        )
    }
}

export default Coin;