import React, { Component } from 'react'
import Flip from './Flip'

class Coin extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <img className="Coin-image" src={this.props.img} />
                
            </div>
        )
    }
}

export default Coin;