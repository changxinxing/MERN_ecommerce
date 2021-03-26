import React, { Component } from 'react'
import axios from 'axios'
import Header1 from '../components/Header'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'

export default class Customers extends Component {
    state = {
        auth: "",
        admin: false
    }
    componentDidMount() {
        axios.get("http://localhost:4000/auth", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                if (res.data.isAuth === true) {
                    if (res.data.isAdmin === 0) {
                        this.setState({
                            auth: 'success',
                            admin: true
                        })
                    }
                    else {
                        this.setState({
                            auth: 'success',
                            admin: false
                        })
                    }
                }
                else {
                    this.setState({
                        auth: "failed"
                    })
                }
            })
    }
    render() {
        if (this.state.auth === "success") {
            if (this.state.admin === true) {
                return (
                    <div>
                        <Header />
                        <div className="mt-cus1">
                            <Sidebar />
                            <div className="main">
                                <Breadcrumb />
                                <p>This is the Customers page for admin</p>                                
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <Header />
                        <p>You are not allowed to access to this page.</p>
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    <Header1 />
                    {/* <p className="warning">Please Login First</p> */}
                </div>
            )
        }
    }
}
