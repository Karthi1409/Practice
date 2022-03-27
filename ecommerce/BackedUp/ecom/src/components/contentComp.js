import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class ContentComp extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <div className="linkstyle">
                        <NavLink to='/topoffers' activeClassName='active'> <img alt='offers' className="content-img" src={require("../img/1.png").default}></img>
                            <h4>Top Offers</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/groceries' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/2.png").default}></img>
                            <h4>Grocery</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/mobiles' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/3.png").default}></img>
                            <h4>Mobiles</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/fashions' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/4.png").default}></img>
                            <h4>Fashion</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/electronics' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/5.png").default}></img>
                            <h4>Electronics</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/applicances' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/6.jpg").default}></img>
                            <h4>Home</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/applicances' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/7.png").default}></img>
                            <h4>Appliances</h4>
                        </NavLink>
                    </div>
                    <div className="linkstyle">
                        <NavLink to='/travel' activeClassName='active'> <img className="content-img" alt='offers' src={require("../img/8.png").default}></img>
                            <h4>Travel</h4>
                        </NavLink>
                    </div>
                    <div className="dropdown">
                        <NavLink to='/toys' activeClassName='active'> <img className=" dropbtn content-img" alt='offers' src={require("../img/9.png").default}></img>
                            <h4>Beauty,Toys& More </h4>
                        </NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/">Link 1</NavLink>
                            <NavLink to="/">Link 2</NavLink>
                            <NavLink to="/">Link 3</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentComp;