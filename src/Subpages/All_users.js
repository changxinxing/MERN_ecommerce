import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function All_users() {
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4000/getusers", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                setUserdata(res.data)
            })
    }, [])

    return (
        <div className = "text-center">
            {userdata.map((user, index) => (
                <button key={index} className = "bg-green-200 hover:bg-green-700 hover:text-white float-left w-1/4 mx-4 my-4 px-4 py-20 rounded-2xl ">
                    <p><b>{user.name}</b></p>
                    <p>{user.email}</p>
                </button>
            ))}
        </div>
    )
}
