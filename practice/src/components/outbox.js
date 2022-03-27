import React, { Component } from "react";
import axios from 'axios';

class OutboxComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetail : {
                fullname : "Karthik",
                email : "karthisoft@gmail.com"
            }
        }
    }

    onhandleChange = (event) => {
        this.setState({
            userdetail : {...this.state.userdetail, [event.target.name] : event.target.value}
        })
    }

    onSubmit() {
        const url = "https://reqres.in/api/users";
        axios.put(url, this.state.userdetail)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return(
            <div className="user-detail">
                <input type="text" name="fullname" placeholder={this.state.userdetail.fullname} onChange={this.onhandleChange}></input>
                <input type="text" name="email" placeholder={this.state.userdetail.email} onChange={this.onhandleChange}></input>
                <button type="submit" onClick={() => {this.onSubmit()}}>Submit</button>
            </div>
        )
    }
}

export default OutboxComp;