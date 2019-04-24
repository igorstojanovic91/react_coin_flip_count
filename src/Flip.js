import React, { Component } from 'react'
import Coin from './Coin'

class Flip extends Component {
    static defaultProps = {
        title: `Let's flip a coin`,
        imgs: ["https://tinyurl.com/react-coin-heads-jpg", "https://tinyurl.com/react-coin-tails-jpg"]
    }
    constructor(props) {
        super(props)
        this.state = {
            flipCount: 0,
            headCount: 0,
            tailCount: 0
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin() {
        return Math.random() < 0.5 ? 0 : 1
    }

    
    render() {
        console.log(this.props)
        return ( 
        <div>
            <h1>{this.props.title}</h1>
            <Coin img={this.props.imgs[this.flipCoin()]} test="test" />
            <button onClcik={this.flipCoin}>Flip me!</button>
        </div>

        )
    }
}

export default Flip