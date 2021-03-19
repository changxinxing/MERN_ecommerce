import React, { Component } from 'react'
import axios from 'axios'
import Header1 from './Header1'
import Header from './Header'

export default class Dashboard extends Component {
    state = {
        auth:""
    }
    componentDidMount() {        
        axios.get("http://localhost:4000/auth",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
            if(res.data.isAuth == true){
                this.setState({
                    auth:'success'
                })
            }
            else {
                this.setState({
                    auth:"failed"
                })
            }
        })
    }
    render() {
        if(this.state.auth == "success"){
            return (
                <div>
                    <Header1 />
                    <button className = "bg-red-500 hover : bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {this.submit}>Tailwind Button </ button>
                </div>
            )
        }
        else{
            return (
                <div>
                    <Header />
                    <p className = "warning">Please Login First</p>
                    <button className = "bg-red-500 hover : bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick = {this.submit}>Tailwind Button </ button>
                </div>
            )
        }        
    }
}
