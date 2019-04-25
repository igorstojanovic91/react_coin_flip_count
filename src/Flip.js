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
            tailCount: 0,
            result: ''
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin() {
        // 0 heads, 1 tails
        let side = (Math.random() < 0.5 ? 0 : 1)
        this.setState(curState => {
            return {
                flipCount: curState.flipCount+1,
                headCount: curState.headCount + (side === 0 ? 1 : 0),
                tailCount: curState.tailCount + (side === 1 ? 1 : 0),
                result: side
            }
        })
    } 
    
    render() {
        return ( 
        <div>
            <h1>{this.props.title}</h1>
            <Coin img={this.props.imgs[this.state.result]} 
            headCount={this.state.headCount}
            tailCount={this.state.tailCount}
            flipCount={this.state.flipCount}
             />
            <button onClick={this.flipCoin}>Flip me!</button>
        </div>

        )
    }
}

export default Flip