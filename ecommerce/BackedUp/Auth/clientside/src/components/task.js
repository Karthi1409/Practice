import React, { useState } from "react";
import axios from "axios";

function Task() {

    const [formdata, setFormData] = useState({})

    const getInputData = (event) => {
        setFormData({ ...formdata, [event.target.name]: event.target.value })
    }

    const URL = "http://localhost:5000/candid/register"
    const putInputData = () => {
        console.log(formdata);
        axios.post(URL, formdata)
            .then((result) => {
            console.log(result);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Task</h1>
            <div className="inputstyle">
                <input type="text" name="name" onChange={getInputData} placeholder="Name"></input>
                <input type="text" name="mobile" onChange={getInputData} placeholder="Mobile"></input>
                <input type="email" name="email" onChange={getInputData} placeholder="Email"></input>
                <input type="text" name="address" onChange={getInputData} placeholder="Address"></input>
            </div>
            <br></br>
            <br></br>

            <button className="btn1" onClick={() => putInputData()}>Add</button>
        </div>
    )
}

export default Task
