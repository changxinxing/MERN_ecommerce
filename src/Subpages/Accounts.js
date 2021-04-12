import React, { Component } from 'react'
import Header1 from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import Allusers from './All_users'

export default class Accounts extends Component {
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
                        <Header1 />
                        <div className="mt-cus1">
                            <Sidebar />
                            <div className="main">
                                <Breadcrumb />
                                <p className = "text-center text-5xl py-5 text-yellow-800">All Members</p>
                                <Allusers />
                            </div>
                        </div>
                    </div>
                )
    }
}
