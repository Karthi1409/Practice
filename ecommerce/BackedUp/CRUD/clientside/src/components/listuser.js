import axios from "axios";
import React, { useState } from "react";

export default function Listuser() {

    const [buyer,setBuyer] = useState([])

    const buyerList = () => {

        const baseUrl = "http://localhost:4000/Admin/user";
        axios.get(baseUrl)
            .then((response) => {
                setBuyer(response.data)
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let List = buyer.map( (value) => {
        return <li>{value.userName} = {value.passWord}</li>
    } )
    return (
        <div>
            <h1>List of buyers details</h1>
            <button onClick={buyerList}>Get Buyers</button>
            <ul>
            {List}
            </ul>
        </div>
    )
}