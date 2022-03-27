import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [inputForm, setInputForm] = useState({ userName: "", passWord: "" })

    const getBuyerDetail = (event) => {
        // console.log(event.target.name);
        setInputForm({ ...inputForm, [event.target.name]: event.target.value })
    }

    const getData = () => {
        console.log(inputForm);
        const baseUrl = 'http://localhost:4000/Admin/register';

    axios.post(baseUrl, inputForm)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    
    return (
        <div>
            <h1>Buyers Registrations</h1>
            <input name="userName" type="text" placeholder="email" onChange={getBuyerDetail}></input>
            <br></br>
            <input name="passWord" type="passwordShown" placeholder="password" onChange={getBuyerDetail}></input>
            <br></br>
            <br></br>
            <button onClick={getData}>Register</button>
        </div>
    )
}