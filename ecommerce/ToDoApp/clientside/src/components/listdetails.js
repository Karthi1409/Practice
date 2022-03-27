import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StdListComp() {

    const [listdata, setListData] = useState([])
    const [editindex, setEditIndex] = useState()

    useEffect(() => {
        axios.get('http://localhost:8000/student/getdetails')
            .then((res) => {
                // console.log(res.data);
                setListData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const onEditIndex = (value,index)=> {
        setEditIndex(index)
    }

    // const onSaveIndex = (value,index) => {
    //     setEditIndex(index)
    // }
    const list = listdata.map((value,index) => {
        return(
            <div key={value.id}>
                <input disabled={editindex===index ? false : true}placeholder={value.stdname}></input>
                <input disabled={editindex===index ? false : true} placeholder={value.mobile}></input>
                <input disabled={editindex===index ? false : true} placeholder={value.email}></input>
                <input disabled={editindex===index ? false : true} placeholder={value.doj}></input>
                <button onClick={()=>onEditIndex(value,index)}>Edit</button>
                <button >Delete</button>
                <button >Save</button>
            </div>
        )
    })
    return (
        <div>
            <h1>This is list component</h1>
            {list}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default StdListComp;
