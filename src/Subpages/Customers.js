import React, { Component } from 'react'
import Header1 from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'

export default class Customers extends Component {
    render() {
                return (
                    <div>
                        <Header1 />
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
}
