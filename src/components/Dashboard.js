import React, { Component } from 'react'
import axios from 'axios'
import Header1 from './Header1'
import Header from './Header'
import Sidebar from './Sidebar'

export default class Dashboard extends Component {
    state = {
        auth:"",
        admin:false
    }
    componentDidMount() {        
        axios.get("http://localhost:4000/auth",{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
            if(res.data.isAuth == true){
                if(res.data.isAdmin == 0){
                    this.setState({
                        auth:'success',
                        admin:true
                    })
                }
                else{
                    this.setState({
                        auth:'success',
                        admin:false
                    })
                }
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
            if(this.state.admin == true){
                return (
                    <div>
                        <Header1 />
                        <div className = "admin_page">
                            <Sidebar />
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        <Header1 />
                    </div>
                )
            }
        }
        else{
            return (
                <div>
                    <Header />
                    <p className = "warning">Please Login First</p>
                </div>
            )
        }        
    }
}
