import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignupComp extends Component {
    render() {
        return (
            <div>
                <div className="mainlogin">
                    <div className="sublogin">
                        <div className="imglogin">
                            <img className="imgplace" src={require("../img/login/2.PNG").default} alt="login"></img>
                        </div>
                        <div className="contentlogin">
                            <div className="formlogin">
                                <form>
                                    <div className="input1">
                                        <input className="input1x" type="text" placeholder="Enter Email/Mobile Number"></input>
                                    </div>
                                    <div className="input2">
                                        <input className="input2x" type="password" placeholder="Enter Your New Password"></input>
                                    </div>
                                    <div className="input2">
                                        <input className="input2x" type="password" placeholder="Confirm Your New Password"></input>
                                    </div>
                                    <div className="termslogin">
                                        <p>By continuing, you agree to Flipkart's<NavLink to="/">Terms and Conditions</NavLink> and <NavLink to="/">Privacy Policy.</NavLink></p>
                                    </div>
                                    <NavLink to="/">
                                    <div className="btnlogin">
                                        <button className="btnlogin1" type="button">Continue</button>
                                    </div>
                                    </NavLink>
                                    <NavLink to="/login">
                                    <div className="btnlogin">
                                        <button className="btnlogin1">Existing User? Log in</button>
                                    </div>
                                    </NavLink>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupComp;