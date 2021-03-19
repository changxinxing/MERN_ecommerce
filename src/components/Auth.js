import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component {
    submit = (e) => {        
        axios.get("http://localhost:4000/auth")
        .then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <button onClick = {this.submit}>Click</button>
            </div>
        )
    }
}
