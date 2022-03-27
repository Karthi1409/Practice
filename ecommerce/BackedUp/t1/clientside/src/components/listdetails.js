import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListDetailsComp() {

    const [listDetail, setListDetail] = useState([]) 



    useEffect(() => {
        const url = 'http://localhost:5000/student/getdetails'
        axios.get(url)
            .then((result) => {
                console.log(result.data);
                setListDetail(result.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const details = listDetail.map((value,index) => {
        return(
            <div>
                <input disabled='true' defaultValue={value.stdname}></input>
                <button>Edit</button>
                <button>Delete</button>
                <button>Save</button>
            </div>
        )
    })

    return(
        <div>
            <h1>ListDetails</h1>
            {details}
        </div>
    )
}

export default ListDetailsComp;