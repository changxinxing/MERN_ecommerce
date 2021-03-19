import React, { Component } from 'react'
import axios from 'axios'
import Header1 from './Header1'

export default class Dashboard extends Component {
    submit = (e) => {        
        axios.get("http://localhost:4000/auth",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <Header1 />
                <button className = "bg-red-500 hover : bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {this.submit}>Tailwind Button </ button>
            </div>
        )
    }
}
