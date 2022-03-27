import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HeaderComp extends Component {
    render() {
        return (
            <div>
                <div className="mainmenu-area">
                    <div className="container pad-top-22">
                        <div className="row header-top-pad">
                            <div className="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to="/" exact className="router-nav rmunderlink" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/shop" className="router-nav rmunderlink" activeClassName="active">Shop page</NavLink></li>
                                    <li><NavLink to="/product/1" className="router-nav rmunderlink" activeClassName="active">Single product</NavLink></li>
                                    <li><NavLink to="/cart" className="router-nav rmunderlink" activeClassName="active">Cart</NavLink></li>
                                    <li><NavLink to="/checkout" className="router-nav rmunderlink" activeClassName="active">Checkout</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComp;