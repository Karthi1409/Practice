import React, { Component } from "react";



class CalComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numb: []
        }
    }

    onClickEvent = (event) => {
        this.state.numb.push(event.target.value)
        if (event.target.value === '+') {
            let ind = this.state.numb.findIndex((value, index) => {
                return value === value
            })
            this.state.numb.splice(ind, 1)
        }
        this.setState({
            numb: this.state.numb
        })
    }

    onChangeEvent = (event) => {
        this.state.numb = event.target.value
        this.setState({
            numb: event.target.value
        })
    }
    render() {
        let juk = this.state.numb
        return (
            <div className="wrapper">
                <div className="cals">
                    <div className="display">
                        {juk}
                    </div>
                    <div className="numbpad">
                        <button className="h2" value={1} onChange={this.onChangeEvent}>1</button>
                        <button className="h2" value={2} onClick={this.onClickEvent}>2</button>
                        <button className="h2" value={3} onClick={this.onClickEvent}>3</button>
                        <button className="h2" value={'+'} onClick={this.onClickEvent}>+</button>
                    </div>
                    <div className="numbpad">
                        <button className="h2" value={4} onClick={this.onClickEvent}>4</button>
                        <button className="h2" value={5} onClick={this.onClickEvent}>5</button>
                        <button className="h2" value={6} onClick={this.onClickEvent}>6</button>
                    </div>
                    <div className="numbpad">
                        <button className="h2" value={7} onClick={this.onClickEvent}>7</button>
                        <button className="h2" value={8} onClick={this.onClickEvent}>8</button>
                        <button className="h2" value={9} onClick={this.onClickEvent}>9</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default CalComp;