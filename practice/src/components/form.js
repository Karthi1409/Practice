import React, { Component } from 'react';

class FormComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: {
                firstName: "",
                lastName: "",
                emailId: "",
                passWord: "",
                dateOfBirth: "",
                gender: "",
                hobbies: [],
                comments: ""
            },
            userError: {
                firstName: false,
                lastName: false,
                emailId: false,
                passWord: false,
                dateOfBirth: false,
                gender: false,
                hobbies: false,
                comments: false
            }
        }

    }

    componentDidMount() {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault()
        })
    }

    onHandleForm = (event) => {
        if (event.target.type === "checkbox") {
            if (event.target.checked) {
                this.state.userDetails.hobbies.push(event.target.value)
            }
            else {
                let ind = this.state.userDetails.hobbies.findIndex((value) => {
                    return value === event.target.value
                })
                this.state.userDetails.hobbies.splice(ind, 1)
            }
            this.setState({
                hobbies: this.state.userDetails.hobbies
            })
        }
        else {
            this.setState({
                userDetails: { ...this.state.userDetails, [event.target.name]: event.target.value }
            })
        }

    }

    onFocusForm = (event) => {
        this.setState({
            userError: { ...this.state.userError, [event.target.name]: false }
        })
    }

    onBlurForm = (event) => {
        let val = event.target.value
        if (val.length === 0) {
            this.setState({
                userError: { ...this.state.userError, [event.target.name]: true }
            })
        }
        else {
            this.state.userError[event.target.name] = false
        }
    }

    onFormSubmit() {
       

        for (let key in this.state.userDetails) {
            if (key === "hobbies") {
                if (this.state.userDetails.hobbies.length === 0) {
                    this.state.userError.hobbies = true
                }
                else {
                    this.state.userError.hobbies = false
                }
            }
            else if (this.state.userDetails[key] === "") {
                this.state.userError[key] = true
            }
            else {
                this.state.userError[key] = false
            }
            this.setState({
                userError: this.state.userError
            })
        }

        for (let key in this.state.userDetails) {
            if (this.state.userError[key]) {
                return;
            }
        }
        console.log(this.state)
    }

    render() {
        return (
            <div className='form-header'>
                <h1>Create Your Account</h1>
                <form autoComplete='off'>
                    <div>
                        <label className='label'>Enter Your First Name</label>
                        <input type="text" name='firstName' className='input' placeholder='Enter Your First Name' onChange={this.onHandleForm} onBlur={this.onBlurForm} onFocus={this.onFocusForm} />
                        {
                            this.state.userError.firstName &&
                            <div>
                                <span className='usr-error'>Please Enter the First Name</span>
                            </div>
                        }
                    </div>
                <div>
                    <label className='label'>Enter Your Last Name</label>
                    <input type="text" name='lastName' className='input' placeholder='Enter Your Last Name' onBlur={this.onBlurForm} onFocus={this.onFocusForm} onChange={this.onHandleForm} />
                    {
                        this.state.userError.lastName &&
                        <div>
                            <span className='usr-error'>Please Enter the Last Name</span>
                        </div>
                    }
                </div>
                </form>
                <div>
                    <label className='label'>Enter Your Email ID :</label>
                    <input type="email" name='emailId' className='input' placeholder='Enter Your Email ID' onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm} />
                    {
                        this.state.userError.emailId &&
                        <div>
                            <span className='usr-error'>Please Enter the EmailID</span>
                        </div>
                    }
                </div>
                <div>
                    <label className='label'>Enter Your Password</label>
                    <input type="password" name='passWord' className='input' placeholder='Enter Your Password' onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm} />
                    {
                        this.state.userError.passWord &&
                        <div>
                            <span className='usr-error'>Please Enter the Password</span>
                        </div>
                    }
                </div>
                <div>
                    <label className='label'>Enter Your DOB</label>
                    <input type="date" name='dateOfBirth' className='input' placeholder='Enter Your DOB' onBlur={this.onBlurForm} onFocus={this.onFocusForm} onChange={this.onHandleForm} />
                    {
                        this.state.userError.dateOfBirth &&
                        <div>
                            <span className='usr-error'>Please Enter the DOB</span>
                        </div>
                    }
                </div>
                <div className='input-rad'>
                    <label className='label-radio'>Enter your Gender</label>
                    <input className='input-radio' name='gender' type='radio' value="Male" onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm}></input>Male
                    <input className='input-radio' name='gender' type='radio' value="Female" onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm}></input>Female
                    <input className='input-radio' name='gender' type='radio' value="Do not like to mention" onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm}></input>Others
                </div>
                {
                    this.state.userError.gender &&
                    <div>
                        <span className='usr-error'>Please Enter the Gender</span>
                    </div>
                }
                <div className='input-rad'>
                    <label className='label'>Enter your hobbies</label>
                    <input type="checkbox" name='hobbies' onChange={this.onHandleForm} value='cricket'></input>cricket
                    <input type="checkbox" name='hobbies' onChange={this.onHandleForm} value='football'></input>football
                    <input type="checkbox" name='hobbies' onChange={this.onHandleForm} value='carrom'></input>carrom
                    <input type="checkbox" name='hobbies' onChange={this.onHandleForm} value='chess'></input>chess
                </div>
                {
                    this.state.userError.hobbies &&
                    <div>
                        <span className='usr-error'>Please Enter the Hobbies</span>
                    </div>
                }
                <div className='textarea-input'>
                    <label className='label'>Enter your comments</label>
                    <textarea className='input' name='comments' onFocus={this.onFocusForm} onBlur={this.onBlurForm} onChange={this.onHandleForm}></textarea>
                </div>
                {
                    this.state.userError.comments &&
                    <div>
                        <span className='usr-error'>Please Enter the comments</span>
                    </div>
                }
                <div>
                    <button className='submitform' type='button' onClick={() => { this.onFormSubmit() }}>Submit</button>
                </div>
            </div>
        )
    }
}

export default FormComp;