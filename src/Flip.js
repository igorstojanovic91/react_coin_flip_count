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
        Math.random() < 0.5 
        ? this.setState(curState => { 
                return {flipCount: curState.flipCount+1, headCount: curState.headCount+1, result: 0}
            })
        : this.setState(curState => { 
                return {flipCount: curState.flipCount+1, tailCount: curState.tailCount+1, result: 1}
            })
    } 

    
    render() {
        console.log(this.props)
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