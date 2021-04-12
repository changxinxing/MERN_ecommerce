import React, { Component } from 'react'
import axios from 'axios'
import Header1 from '../components/Header'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'

export default class Rep extends Component {
    state = {
        auth: "",
        admin: false
    }
    // componentDidMount() {
    //     axios.get("http://localhost:4000/auth", { withCredentials: true, credentials: 'include' })
    //         .then((res) => {
    //             if (res.data.isAuth === true) {
    //                 if (res.data.isAdmin === 0) {
    //                     this.setState({
    //                         auth: 'success',
    //                         admin: true
    //                     })
    //                 }
    //                 else {
    //                     this.setState({
    //                         auth: 'success',
    //                         admin: false
    //                     })
    //                 }
    //             }
    //             else {
    //                 this.setState({
    //                     auth: "failed"
    //                 })
    //             }
    //         })
    // }
    render() {
                return (
                    <div>
                        <Header />
                        <div className="mt-cus1">
                            <Sidebar />
                            <div className="main">
                                <Breadcrumb />
                                <p>This is the Rep page for admin</p>
                            </div>
                        </div>
                    </div>
                )
    }
}
