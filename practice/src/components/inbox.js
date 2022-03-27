import React, { Component } from "react";
import axios from 'axios';
import DataSharing from "./datasharing";

class InboxComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userdetail: {
                fullname: "",
                email: ""
            }
        }
    }

    onhandleChange = (event) => {
        this.setState({
            userdetail: { ...this.state.userdetail, [event.target.name]: event.target.value }
        })
        this.context.onTensferData(event.target.name, event.target.value)
    }

    onSubmit() {
        const url = "https://reqres.in/api/users";
        axios.post(url, this.state.userdetail)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (

            <DataSharing.Consumer>
                {
                    (context) => {
                        // console.log(context.fromData);
                        return(
                        <div className="user-detail">
                            <input type="text" name="fullname" placeholder="Enter Your Name" onChange={this.onhandleChange}></input>
                            <input type="text" name="email" placeholder="Enter Your Email" onChange={this.onhandleChange}></input>
                            <button type="submit" onClick={() => { this.onSubmit() }}>Submit</button>
                            <button onClick={() => { this.gotocals() }}></button>
                            <h1>Message from Header component : {this.context.fromData.comments}</h1>
                        </div>
                        )
                    }
                }
            </DataSharing.Consumer>

        )
    }
}

InboxComp.contextType = DataSharing;
export default InboxComp;