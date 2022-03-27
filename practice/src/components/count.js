import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CountComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            countnum: 0
        }
    }

    handlePlusCount = (event) => {
        if (event.target.name === 'plus') {
            this.state.countnum = this.state.countnum + 1
        }
        else if (event.target.name === "minus") {
            this.state.countnum = this.state.countnum - 1
        }
        else if (event.target.name === "reset") {
            this.state.countnum = 0
        }
        this.setState({
            countnum: this.state.countnum
        })
    }

    render() {
        let num = this.state.countnum
        return (
            <div className='wrapper'>
                <div className='header'>
                </div>
                <div className='content'>
                    <div>
                        <button className='btnplus' name='plus' onClick={this.handlePlusCount}>+</button>
                    </div>
                    <div className='num'>
                        {num}
                    </div>
                    <div>
                        <button className='btnminus' name='minus' onClick={this.handlePlusCount}>-</button>
                    </div>
                </div>
                <div className='footer'>
                    <div className='btnreset'>
                        <button type='reset' onClick={this.handlePlusCount} name='reset'>Reset</button>
                    </div>
                    <div className='btnreset'>
                        <NavLink to="/cal">Go to calculator</NavLink>
                        <NavLink to="/form">Go to userform</NavLink>
                    </div>
                </div>

            </div>
        )
    }
}

export default CountComp;