import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LoginComp extends Component {

    onHandleMail = (event) => {
        if (event.target.type === 'checkbox') {
            if (event.target.checked) {
                this.props.login.hobbies.push(event.target.value)
            }
            else {
                const ind = this.props.login.hobbies.findindex((value, index) => {
                    return value === event.target.value
                })
                console.log(ind);
            }

        }
        else {
            this.props.onReceiveMail(event.target.name, event.target.value)
        }

        console.log(this.props);
    }

    onLogin() {
        console.log(this.props.login);
    }

    onFocusInput = (event) => {
        // console.log('this is on focus', event.target);
        this.props.onReceivePa(false, event.target.name)
        // console.log(this.props);
    }

    onBlurInput = (event) => {
        // console.log('this is on blur', event.target);

        const val = event.target.value
        if (val.length === 0) {
            this.props.onReceivePa(true, event.target.name)
        }


    }

    render() {
        return (
            <div>
                <div className="mainlogin">
                    <div className="sublogin">
                        <div className="imglogin">
                            <img className="imgplace" src={require("../img/login/1.PNG").default} alt="login"></img>
                        </div>
                        <div className="contentlogin">
                            <div className="formlogin">
                                {/* <form> */}
                                <div className="input1">
                                    <input className="input1x" name="email" type="text" placeholder="Enter Email/Mobile number" onChange={this.onHandleMail} onFocus={this.onFocusInput} onBlur={this.onBlurInput}></input>
                                    {
                                        this.props.error.email &&
                                        <div>
                                            <span className="error-msg">Please enter the valid email</span>
                                        </div>
                                    }

                                </div>
                                <div className="input2">
                                    <input className="input2x" name="password" type="password" placeholder="Enter your password" onChange={this.onHandleMail} onFocus={this.onFocusInput} onBlur={this.onBlurInput}></input>
                                    {
                                        this.props.error.password &&
                                        <div>
                                            <span className="error-msg">Please enter the valid password</span>
                                        </div>
                                    }
                                </div>
                                {/* <NavLink to="/"> */}
                                <div className="btnlogin">
                                    <button className="btnlogin1" type="button" onClick={() => { this.onLogin() }} >Login</button>
                                </div>
                                {/* </NavLink> */}
                                <div className="termslogin">
                                    <p>By continuing, you agree to Flipkart's<NavLink to="/">Terms and Conditions</NavLink> and <NavLink to="/">Privacy Policy.</NavLink></p>
                                </div>
                                <div className="btnsignup">
                                    <NavLink to="/signup">
                                        <button type="button">New to flipkart? Create an flipkart account</button>
                                    </NavLink>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComp;