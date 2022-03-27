import React, { useState } from 'react';
import axios from 'axios';
function FunctionComp() {
const [setinput, setInput] = useState({})
    
    const getInputForm = (event) => {
        setInput({...setinput,[event.target.name] : event.target.value})
    }

    const url = 'http://localhost:5000/student/new'
    const postInputForm = () => {
        axios.post(url,setinput)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    
    return(
        <div>
            <h1>Student form</h1>
            <input className="" type="text" name="stdname" placeholder="name" onChange={getInputForm}></input><br></br>
            <button onClick={postInputForm}>button</button>
        </div>
    )
}

export default FunctionComp