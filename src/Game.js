import React, { Component } from 'react'
import './Game.scss'

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.randomClickCellCreate = this.randomClickCellCreate.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.tick = this.tick.bind(this);
        this.state = {
            score: 0,
            cells: [],
            ms: 1000
        };

    }
    
    randomClickCellCreate() {
        const randomCell = Math.floor(Math.random() * (400 - 0 + 1)) + 0;
        const cells = []
        for(let i = 1; i <= 400; i++) {
            if(randomCell === i) {
                cells.push(<div onClick={this.clickHandler}
                    style={{backgroundColor: 'black'}} className="cell" key={i}></div>)
            } else {
                cells.push(<div className="cell" key={i}></div>)
            }
        }
        this.setState({cells: cells})
    }

    clickHandler() {
        this.setState({score: this.state.score + 1, ms: this.state.ms > 50 ? this.state.ms - 50 : 0})
        console.log(this.state.ms)
    }

    tick() {
        setInterval(this.randomClickCellCreate, this.state.ms)
    }

    componentDidMount() {
        this.tick()
    }

    render() {

        return (
            <div className="main">
                {this.state.score > 0 ? <h2>Очки: {this.state.score}</h2> : <h2>Кликай как можно быстрее и получай очки</h2>} 
                <div className="cells">
                    {this.state.cells}
                </div>
            </div>
        )
    }
}
