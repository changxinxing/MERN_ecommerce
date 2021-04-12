
import React, { Component } from 'react'
import Header1 from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import Apitest from '../components/Apitest'

export default class Products extends Component {
    render() {
                return (
                    <div>
                        <Header1 />
                        <div className="mt-cus1">
                            <Sidebar />
                            <div className="main">
                                <Breadcrumb />
                                <Apitest />                               
                            </div>
                        </div>
                    </div>
                )
            }
}
