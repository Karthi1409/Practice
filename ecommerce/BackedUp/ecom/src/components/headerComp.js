import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderComp extends Component {
    render() {
        return (
            <div>
                <div className="header fixedElement">
                    <div className="header1">
                        <NavLink to="/" exact><img className="imgstyle" src={require('../img/download.jpg').default} alt={'fashion'}></img></NavLink>
                        <input type="search" className='imgstyle1' placeholder="Search for gifts and orgami and more"></input>
                    </div>
                    <div className="header2">
                        <div className="b1">
                            <NavLink to="/login">
                                <button  className="p10" type="button">Login</button>
                            </NavLink>
                        </div>
                        <div className="b1">
                            <h4 className="p0">More</h4>

                        </div>
                        <div className="b1">
                            <h4 className="p0">Cart</h4>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

export default HeaderComp;