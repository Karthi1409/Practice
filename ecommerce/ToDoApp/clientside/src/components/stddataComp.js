import React, { Component } from 'react'

class StddataComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            DOB: "",
            gender: "",
            address: "",
            city: "",
            checkbox1: []
        }
    }

    onFormChange = (event) => {

        if (event.target.name === "checkbox1") {
            if (event.target.checked) {
                this.state.checkbox1.push(event.target.value)
            }
            else {
                const index = this.state.checkbox1.findIndex((value, ind) => {
                    return value === event.target.value
                })
                this.state.checkbox1.splice(index, 1)
            }
        }
        else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    onForm() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="formcss">
                <label id="email">Please enter email</label>
                <input name="email" type="email" placeholder="Enter the email" onChange={this.onFormChange}></input>
                <br></br>
                <label>Please enter your password</label>
                <input name="password" type="password" placeholder="Enter the password" onChange={this.onFormChange}></input>
                <br></br>
                <label>Enter your date of birth</label>
                <input type="date" name="DOB" placeholder="Enter your DOB" onChange={this.onFormChange}></input>
                <br></br>
                <div className="checkedcss">
                    <label>Please select your gender</label>
                    <input name="gender" value="Male" type="radio" onChange={this.onFormChange}></input>Male
                    <input name="gender" value="Female" type="radio" onChange={this.onFormChange} ></input>Female
                    <input name="gender" value="Transgender" type="radio" onChange={this.onFormChange}></input>Transgender
                    <br></br>
                </div>
                <label>Please enter your address</label>
                <textarea type="text" placeholder="Enter the address" onChange={this.onFormChange}></textarea>
                <br></br>
                <label name="">Select the city </label>
                <select name="city" defaultValue="" onChange={this.onFormChange}>
                    <option value="" disabled >Please enter the city</option>
                    <option value="CHN" >Chennai</option>
                    <option value="CBE" >Kovai</option>
                    <option value="SLM" >Salem</option>
                    <option value="MDX" >Madurai</option>
                </select>
                <br></br>
                <div className="checkedcss">
                    <label >Select your hobbies</label>
                    <input name="checkbox1" type="checkbox" onChange={this.onFormChange} value="Cricket"></input> Cricket
                    <input name="checkbox1" type="checkbox" onChange={this.onFormChange} value="Tennis"></input> Tennis
                    <input name="checkbox1" type="checkbox" onChange={this.onFormChange} value="Table tennis"></input> Table Tennis
                    <input name="checkbox1" type="checkbox" onChange={this.onFormChange} value="Carrom"></input> Carrom
                </div>
                <br></br>
                <label name="">Select the city </label>
                <input list="data"></input>
                <datalist id="data" name="city" defaultValue="" onChange={this.onFormChange}>
                    <option disabled value="" >Please enter the city</option>
                    <option value="CHN" >Chennai</option>
                    <option value="CBE" >Kovai</option>
                    <option value="SLM" >Salem</option>
                    <option value="MDX" >Madurai</option>
                </datalist>
                <br></br>
                <button type="button" onClick={() => this.onForm()}>Create the account</button>
                <button type="reset">Reset</button>

            </div>
        )
    }
}

export default StddataComp
