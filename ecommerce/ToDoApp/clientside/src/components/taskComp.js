import React, { useState } from 'react'
import axios from 'axios';
function TaskComp() {

    const [formdata,setFormData] = useState({})

    const getInputData = (event) => {
        setFormData({
            ...formdata, [event.target.name] : event.target.value
        })
    }

    const getFormData=()=>{
        axios.post('http://localhost:8000/student/register',formdata).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
        // console.log(formdata);
    }
    return (
        <div>
            <h1>Task</h1>
            <input type="text" name='stdname' placeholder="stdname" onChange={getInputData}></input>
            <input type="number" name='mobile' placeholder="mobile" onChange={getInputData}></input>
            <input type="email" name='email' placeholder="email" onChange={getInputData}></input>
            <input type="date" name='doj' placeholder="joiningdate" onChange={getInputData}></input>
            <br></br>
            <br></br>
            <button onClick={() => { getFormData() }}>ADD</button>
        </div>
    )
}

export default TaskComp