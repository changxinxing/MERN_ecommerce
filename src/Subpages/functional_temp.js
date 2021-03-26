import React, { useState, useEffect } from 'react'
import Header from '../components/Header1'
import Sidebar from '../components/Sidebar'
import Breadcrumb from '../components/Breadcrumb'
import Apitest from '../components/Apitest'
import axios from 'axios'

export default function Products() {
    const [auth, setAuth] = useState(false);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:4000/auth", { withCredentials: true, credentials: 'include' })
            .then((res) => {
                if (res.data.isAuth === true) {
                    setAuth(true);
                    if (res.data.isAdmin === 0) {
                        setAdmin(true);
                    }
                }
            })
    }, [])
    return (
        <div>
            <Header />
            <div className="mt-cus1">
                <Sidebar />
                <div className="main">
                    <Breadcrumb />
                    <p className="text-center text-5xl py-5 text-yellow-800">All Products</p>
                    <Apitest />
                </div>
            </div>
        </div>
    )
}
